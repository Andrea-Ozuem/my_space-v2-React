import TextField from '@mui/material/TextField';
import Tasks from './Tasks'

export default function TaskContainer({ tasks, handleClickTask, handleSubmit, handleClear }) {
    return (
        <div className="bg-primary mb-8 p-4 text-black rounded-2xl">
            <div className="flex justify-between mb-3">
                <h2 className="h2 text-xl font-semibold">My Tasks</h2>
                <button className="text-secondary font-light" onClick={handleClear}>clear</button>
            </div>
            <div className='mb-4'>
                <Tasks tasks={tasks} handleClickTask={handleClickTask}/>
            </div>
            <form onSubmit={handleSubmit} className='px-2 flex gap-3'>
                <input name='description' type="text" className='order-2 border-b focus:outline-none focus:border-b-2 focus:border-secondary' placeholder='Add task' />
                <button className='order-1 color-secondary text-xl' type='submit'>+</button>
            </form>
        </div>
    )
}