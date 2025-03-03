import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import TaskStatus from "./TaskStatus"
import TaskContainer from './TaskContainer'
import { tasks, user } from '../data'

export default function InfoSection() {
    const [tasksData, setTasksData] = useState(tasks)
    const { currentUser} = useOutletContext()
    function handleClickTask(id) {
        setTasksData(prevArr =>  prevArr.map(task =>
            task.id == id ?
                {...task, completed: !task.completed}:
                task
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const desc = formData.get('description')
        const newTask = {
            id: tasksData.length + 1,
            desc,
            completed: false
        }
        setTasksData(prevArr => [...prevArr, newTask])
        formEl.reset()
    }

    function handleClear() {
        setTasksData([])
    }

    return (
        <section className="tasks-area w-full md:w-[22rem] max-w-40em">
            <TaskStatus tasks={tasksData} name={currentUser.firstName} />
            <TaskContainer handleClear={handleClear} tasks={tasksData} handleClickTask={handleClickTask} handleSubmit={handleSubmit}/>
        </section>
    )
}