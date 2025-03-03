import { useState, useEffect } from "react"
import { useOutletContext } from 'react-router-dom'
import WidgetHeading  from "./WidgetHeading"

export default function Time() {
    const { currentUser } = useOutletContext()
    const [homeTime, setHomeTime] = useState("")
    const [awayTime, setAwayTime] = useState("")
    const [awayZone, setAwayZone] = useState(() => currentUser.awayTimeZone)

    useEffect(() => {
        const updateTime = () => {
          // Home Time
          const now = new Date()
          const hours = now.getHours()
          const minutes = now.getMinutes().toString().padStart(2, "0");
          const ampm = hours >= 12 ? "PM" : "AM"
          setHomeTime(`${hours}:${minutes} ${ampm}`)
    
          // Away Time (using selected time zone)
          const awayNow = new Date().toLocaleString("en-US", { timeZone: awayZone })
          const awayDate = new Date(awayNow)
          const awayHours = awayDate.getHours()
          const awayMinutes = awayDate.getMinutes().toString().padStart(2, "0");
          const awayAmpm = awayHours >= 12 ? "PM" : "AM"
          setAwayTime(`${awayHours}:${awayMinutes} ${awayAmpm}`)
        };
    
        updateTime()
        const interval = setInterval(updateTime, 1000)
    
        return () => clearInterval(interval)
    }, [awayZone])

    return (
        <div className="widget">
            <WidgetHeading name="TIME" />
            <div className="flex justify-between px-[3rem]">
                <TimeValue name="Home" value={homeTime}/>
                <div className="border-l-2 mx-2"></div>
                <TimeValue name={awayZone} value={awayTime}/>
            </div>
        </div>
    )
}

function TimeValue({ name, value }) {
    return (
        <div className="flex-1">
            <p className="font-semibold text-lg text-center">{name}</p>
            <p className="text-center">{value}</p>
        </div>
    )
}