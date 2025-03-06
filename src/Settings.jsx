import { useOutletContext } from 'react-router-dom'

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
            awayTimeZone: data.tz !== '' && data.tz !== prevUser.awayTimeZone ? data.tz : prevUser.awayTimeZone
        }))
    }

    return (
        <main className="width-[70%]">
            <div className="w-full md:w-[60%] mx-auto">
                <h1 className="mb-5 text-center">Edit User Settings</h1>
                <form action="" className="w-full" onSubmit={handleUserSubmit}>
                    <fieldset className="mb-5">
                        <legend className="">User Info</legend>
                        <div className="settings-input-box mb-3">
                            <label htmlFor="username">Username</label>
                            <div><input defaultValue={currentUser.username} className="" type="text" name="username" id="username" /></div>
                        </div>
                        <div className="settings-input-box mb-3">
                            <label htmlFor="name">Full Name</label>
                            <div><input type="text" name="name" id="name" /></div>
                        </div>
                    </fieldset>

                    <fieldset>
                    <legend>Choose Your Timezones</legend>
                    <div className="tz1 settings-input-box">
                        <label htmlFor="tz1">Home</label>
                        <select name="tz" id="tz" className="border rounded-md ms-3">
                            {
                                intlTimezones.map(zone => <option key={zone} value={zone}> {zone}</option> )
                            }
                        </select>
                    </div> 
                    </fieldset>
                    <input id="submit" className='bg-primary rounded-md mt-5 py-2 text-black px-3' type="submit" value="Update"></input>
                </form>
            </div>
        </main>
    )
}