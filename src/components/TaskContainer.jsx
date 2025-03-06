import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Tasks from './Tasks'
import TaskStatus from './TaskStatus'

export default function TaskContainer() {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const fetchTasks = async () => {
          const data = await (
            await fetch(
              'https://jsonplaceholder.typicode.com/users/1/todos?_start=10&_limit=8',
            )
          ).json()

          console.log(data)
          setTasks(data);
        }
        fetchTasks();
    }, [])

    function handleClear() {
        setTasks([])
    }

          
    function handleClickTask(id) {
        setTasks(prevArr =>  prevArr.map(task =>
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
            id: tasks.length + 1,
            title: desc,
            completed: false
        }
        setTasks(prevArr => [...prevArr, newTask])
        formEl.reset()
    }

    return (
        <>
            <TaskStatus tasks={tasks} />

            <div className="bg-primary mb-8 p-4 text-black rounded-2xl">
                <div className="flex justify-between mb-3">
                    <h2 className="h2 text-xl font-semibold">My Tasks</h2>
                    <button className="text-secondary font-light" onClick={handleClear}>clear</button>
                </div>

                <div className='mb-4 max-h-[340px] overflow-hidden flex flex-col'>
                    <Tasks tasks={tasks} handleClickTask={handleClickTask}/>
                </div>

                <form onSubmit={handleSubmit} className='px-2 flex gap-3'>
                    <input name='description' type="text" className='order-2 border-b focus:outline-none focus:border-b-2 focus:border-secondary' placeholder='Add task' />
                    <button className='order-1 text-secondary text-xl' type='submit'>+</button>
                </form>
            </div>
        </>
    )
}