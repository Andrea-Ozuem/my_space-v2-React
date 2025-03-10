import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { clsx } from 'clsx'
import { memo } from 'react'

const Task = memo(function Task({ task, handleClickTask }) {
    const checkBoxStyles = {
        color: '#554160'
    }

    return (
            <li key={task.id} className='mb-6 px-2'>
                <input type="checkbox" id={task.id} className='opacity-0 absolute' onChange={()=> handleClickTask(task.id)}/>
                <label htmlFor={task.id} className={clsx('flex gap-2', {'opacity-[0.5]': task.completed == 1})}>
                    {task.completed ? <RadioButtonCheckedIcon sx={checkBoxStyles}/> :  <RadioButtonUncheckedIcon sx={checkBoxStyles}/>}
                    <p className='border-b border-color-grey w-[90%]'>{task.title}</p>
                </label>
            </li>
    )
})

export default Task