import SettingsIcon from '@mui/icons-material/Settings';
import WidgetsIcon from '@mui/icons-material/Widgets';

export default function Header({ handleSideBar }) {
    return (
        <header className="bg-primary text-white py-3">
            <nav className="flex w-[95%] mx-auto font-sans justify-between">
                <a href="#">My Space</a>
                <ul className="flex">
                    <li className='me-1'>
                        <a href="">
                            <SettingsIcon />
                        </a>
                    </li>
                    <li className='md:hidden block'>
                        <button onClick={handleSideBar}>
                            <WidgetsIcon />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}