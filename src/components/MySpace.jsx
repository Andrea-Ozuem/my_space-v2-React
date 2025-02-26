import Widgets from "./Widgets"
import Info from './Info'

export default function MySpace({ isSideOpen}) {
    return (
        <main className="md:flex mt-6 justify-between w-[95%] mx-auto text-white"> 
            <Info />
            <div className="middle"></div>
            <Widgets isSideOpen={isSideOpen} />
        </main>
    )
}