import clsx from 'clsx';

import Time from './Time'
import Weather from './Weather'
import Calendar from './Calendar'

export default function Widgets({ isSideOpen }) {
    return (
        <section className={clsx("w-full sm:w-[20rem] md:block hidden max-w-40em", {'pane': isSideOpen})}>
            <Calendar />
            <Time />
            <Weather />
        </section>
    )
}