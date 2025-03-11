import Widgets from "./Widgets"
import Info from './Info'
import Spotify from './Spotify'

export default function MySpace() {
    return (
        <main className=""> 
            <Info />
            <div className="middle self-end">
                <Spotify />
            </div>
            <Widgets />
        </main>
    )
}
