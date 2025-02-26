import { useState, useEffect } from 'react'

import Header from './components/Header'
import MySpace from './components/MySpace'

function App() {
  const [isSideOpen, setIsSideOpen] = useState(false)

  useEffect(() => {
    // Function to check screen size and close sidebar on md+
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
    <>
      <Header handleSideBar={() => setIsSideOpen(!isSideOpen)} />
      <MySpace isSideOpen={isSideOpen}/>
    </>
  )
}

export default App