import clsx from 'clsx'
import { useContext } from "react"
import { SideBarContext } from '../Layout'
import Time from './Time'
import Weather from './Weather'
import Calendar from './Calendar'

export default function Widgets() {
    const isSideOpen = useContext(SideBarContext)
    return (
        <section className={clsx("w-full sm:w-[20rem] lg:block hidden max-w-40em", {'pane': isSideOpen})}>
            <Calendar />
            <Time />
            <Weather />
        </section>
    )
}