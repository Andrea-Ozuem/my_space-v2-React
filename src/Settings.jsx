import { useOutletContext } from 'react-router-dom'
import Widgets from "./components/Widgets"
import { isMobile } from './utils'
export default function Settings() {
    const { currentUser, setCurrentUser } =  useOutletContext()

    const intlTimezones = Intl.supportedValuesOf('timeZone')

    function handleUserSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const data = Object.fromEntries(formData)

        setCurrentUser(prevUser => ({
            ...prevUser,
            username: data.username !== '' && data.username !== prevUser.username ? data.username : prevUser.username,
            name: data.name !== '' && data.name !== prevUser.name ? data.name : prevUser.name,
            tz: data.tz !== '' && data.tz !== prevUser.tz ? data.tz : prevUser.tz
        }))
        alert('User updated successfully')
    }

    return (
        <main>
            <div className="w-full md:w-[60%] max-w-full mx-auto">
                <h1 className="mb-5 text-center">Edit User Settings</h1>
                <form action="" className="w-full" onSubmit={handleUserSubmit}>
                    <fieldset>
                        <legend className="">User Info</legend>
                        <div className="settings-input-box mb-3">
                            <label htmlFor="username">Username</label>
                            <div><input defaultValue={currentUser.username} className="" type="text" name="username" id="username" /></div>
                        </div>
                        <div className="settings-input-box mb-3">
                            <label htmlFor="name">Full Name</label>
                            <div><input defaultValue={currentUser.name} type="text" name="name" id="name" /></div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Choose Your Timezones</legend>
                        <div className="tz1 settings-input-box">
                            <label htmlFor="tz1">Home</label>
                            <select name="tz" id="tz" className="border w-full rounded-md ms-3">
                                {
                                    intlTimezones.map(zone => zone == currentUser.tz ?
                                        <option key={zone} value={zone} selected>{zone}</option> :
                                        <option key={zone} value={zone}> {zone}</option> )
                                }
                            </select>
                        </div> 
                    </fieldset>

                    <fieldset>
                        <legend>Choose Default Weather Position</legend>
                        <div className="lat settings-input-box">
                            <label htmlFor="lat">Latitude: </label>
                            <input className='ms-3' type="number" name="lat" id="lat" />
                        </div> 
                        <div className="long settings-input-box">
                            <label htmlFor="long">Longitude: </label>
                            <input className='ms-3' type="number" name="long" id="long" />
                        </div> 
                    </fieldset>

                    <input id="submit" className='bg-primary rounded-md mt-5 py-2 text-black px-3' type="submit" value="Update"></input>
                </form>
            </div>
            <div className="middle"></div>
            {
                isMobile() ? <Widgets /> : null
            }
        </main>
    )
}