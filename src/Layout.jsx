import { useState, useEffect, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import {clsx} from 'clsx'
import Header from './components/Header'

export const SideBarContext = createContext(null)

export default function Layout() {
  const [isSideOpen, setIsSideOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSideOpen(false);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
      const fetchUserData = async () => {
        const data = await (
          await fetch(
            'https://jsonplaceholder.typicode.com/users/1',
          )
        ).json();
        data.tz = 'Asia/Manila'

        setCurrentUser(data);
      };
  
      fetchUserData();
  }, []);

  return (
    <div className='w-full  relative'>
      <SideBarContext.Provider value={isSideOpen}>
        <Header handleSideBar={() => setIsSideOpen(!isSideOpen)} />
          <Outlet context={{ currentUser, setCurrentUser }}/>
      </SideBarContext.Provider>
    </div>
  )
}

