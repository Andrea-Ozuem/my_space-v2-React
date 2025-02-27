import SettingsIcon from '@mui/icons-material/Settings';
import WidgetsIcon from '@mui/icons-material/Widgets';

export default function Header({ handleSideBar }) {
    const widgetStyle = {color: '#313131'}
    return (
        <header className="bg-primary text-white py-3">
            <nav className="flex w-[95%] mx-auto font-sans justify-between">
                <a  className='text-grey' href="#">My Space</a>
                <ul className="flex">
                    <li className='me-1'>
                        <a href="">
                            <SettingsIcon sx={widgetStyle}/>
                        </a>
                    </li>
                    <li className='md:hidden block'>
                        <button onClick={handleSideBar}>
                            <WidgetsIcon sx={widgetStyle} />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}