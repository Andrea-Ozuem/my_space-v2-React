import { useOutletContext } from 'react-router-dom'
import TaskContainer from './TaskContainer'

export default function InfoSection() {
  const { currentUser, setCurrentUser } =  useOutletContext()

    return (
        <section className="tasks-area w-full md:w-[22rem] max-w-40em">
            <h1 className="text-4xl">Good morning,<br /> <span className='font-semibold'>{currentUser.username}</span></h1>
            <TaskContainer />
        </section>
    )
}