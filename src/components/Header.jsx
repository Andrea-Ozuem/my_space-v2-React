import { Link } from "react-router-dom"
import SettingsIcon from '@mui/icons-material/Settings'
import WidgetsIcon from '@mui/icons-material/Widgets'

export default function Header({ handleSideBar }) {
    const widgetStyle = {color: '#313131'}
    return (
        <header className="bg-primary text-white py-3">
            <nav className="flex w-[95%] mx-auto font-sans justify-between">
                <Link  className='text-grey' to="/">My Space</Link>
                <ul className="flex">
                    <li className='me-1'>
                        <Link to="settings">
                            <SettingsIcon sx={widgetStyle}/>
                        </Link>
                    </li>
                    {window.location.href.includes('settings') ?
                        null :
                         <li className='md:hidden block'>
                            <button onClick={handleSideBar}>
                                <WidgetsIcon sx={widgetStyle} />
                            </button>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    )
}