import { useState, useEffect, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import MySpace from './components/MySpace'
import {user} from './data'

export const SideBarContext = createContext(null)

export default function Layout() {
  const [isSideOpen, setIsSideOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(user)

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

  return (
    <div>
      <SideBarContext.Provider value={isSideOpen}>
        <Header handleSideBar={() => setIsSideOpen(!isSideOpen)} />
          <Outlet context={{ currentUser, setCurrentUser }}/>
        {/* <MySpace isSideOpen={isSideOpen}/> */}
      </SideBarContext.Provider>
    </div>
  )
}

