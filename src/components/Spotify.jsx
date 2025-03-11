import { useEffect, useState, startTransition } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import {codeVerifier, sha256, base64encode} from '../utils/spotify'

export default function Spotify() {
    const [playlistId, setPlaylistId] = useState(() => localStorage.getItem('playlist_id'))
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem('access_token'))
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const redirectUri = import.meta.env.VITE_REDIRECT_URI

    useEffect(() => {
        const spotifyCode = searchParams.get('code');
        const error = searchParams.get('error')

        if (spotifyCode) {
          navigate('/', { replace: true })
          getToken(spotifyCode)
          
        } else if (error != null) {
            // display error message in div
            console.error(error)
            alert(error.message)
            setError(error)
        }
        // find out why the items in depArray
      }, []);

    function isTokenExpired() {
        const expirationTime = localStorage.getItem('exp_time');
        if (expirationTime) {
            const bufferTime = 60 * 1000;
            return parseInt(expirationTime) - bufferTime <= Date.now();
        }
    }

    async function getUserId() {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch('https://api.spotify.com/v1/me', {
                headers: {
                  Authorization: 'Bearer ' + accessToken
                }
              })
            
              const data = await response.json()
              console.log(data)
              return data.id
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
        
    }

    async function getPlaylistId(userId) {
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                headers: {
                  Authorization: 'Bearer ' + accessToken
                }
              })
            
              const data = await response.json();
              const randomNo = Math.floor(Math.random() * (data.total))
              const playlistId = data.items[randomNo].id
              localStorage.setItem('playlist_id', playlistId)
              setPlaylistId(playlistId)
        } catch(err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
        
    }

    async function getPlaylist() {
        const userId = await getUserId()
        getPlaylistId(userId)
    }

    async function getRefreshToken() {
        setIsLoading(true)
        setError(null)

        startTransition(async () => {
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const url = "https://accounts.spotify.com/api/token";
            
                const payload = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        grant_type: 'refresh_token',
                        refresh_token: refreshToken,
                        client_id: clientId
                    }),
                }
                const body = await fetch(url, payload)
                const response = await body.json()

                if (response.status === 200) {
                    const token = response.accessToken
            
                    localStorage.setItem('access_token', token);
                    if (response.refreshToken) {
                        localStorage.setItem('refresh_token', response.refreshToken);
                    }
                    setAccessToken(token)
                } else {
                    throw new Error(response.error_description)
                }
            } catch (err) {
                console.error(err)
                localStorage.removeItem('refresh_token')
                localStorage.removeItem('access_token')
                localStorage.removeItem('expires_in')
                localStorage.removeItem('exp_time')
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        })
        
    }

    async function getToken(code) {
        setIsLoading(true)
        setError(null)

        try {
            const codeVerifier = localStorage.getItem('code_verifier');
        
            const url = "https://accounts.spotify.com/api/token";
            const payload = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    client_id: clientId,
                    grant_type: 'authorization_code',
                    code,
                    redirect_uri: redirectUri,
                    code_verifier: codeVerifier,
                }),
            }
        
            const body = await fetch(url, payload);
            const response = await body.json();
            if (response.access_token) {
                console.log(response)
            
                localStorage.setItem('access_token', response.access_token);
                localStorage.setItem('refresh_token', response.refresh_token);
                const expirationTime = Date.now() + (response.expires_in * 1000);
                localStorage.setItem('exp_time', expirationTime)
                setAccessToken(response.access_token)
            } else {
                throw new Error(response)
            }
        } catch(error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleSpotify() {
        const hashed = await sha256(codeVerifier)
        const codeChallenge = base64encode(hashed);

        const scope = 'user-read-private user-read-email playlist-read-private';
        const authUrl = new URL("https://accounts.spotify.com/authorize")

        window.localStorage.setItem('code_verifier', codeVerifier);

        const params =  {
            response_type: 'code',
            client_id: clientId,
            scope,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
            redirect_uri: redirectUri,
        }

        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
    }

    function renderSpotify() {
        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <LinkToSpotify handleSpotify={handleSpotify} />
        }

        if (playlistId) {
            console.log('id is here')
            return playListIframe(playlistId)
        }
        
        if (accessToken && !isTokenExpired()) {
            console.log('no id yet')
            getPlaylist()
        } else if (isTokenExpired()) {
            console.log('expired')
            return getRefreshToken()
        } else {
            console.log('verify plsss')
            return (
                <LinkToSpotify handleSpotify={handleSpotify} />
            )
        }
    }

    return (
        <div className="pb-6 lg:w-[22rem] w-full center h-[150px]">            
            {renderSpotify()}
        </div>
    )
}


function playListIframe(playlistId) {
    return (
        <iframe 
        className='rounded-lg'
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`} 
        width="100%" height="100%" frameBorder="0" 
        allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
        >
        </iframe>
    )
}

function LinkToSpotify({handleSpotify}) {
    return (
        <div className="w-full rounded-lg text-center h-full text-lg bg-[#BCF0D0] text-dark">
            <button className="w-full h-full" onClick={handleSpotify} style={{borderRadius: '12px' }}>Link Spotify Playlist</button>
        </div>
    )
}