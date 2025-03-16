import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { memo } from 'react'
import { clsx } from 'clsx'

const Task = memo(function Task({id, completed, title, handleClickTask }) {
    const checkBoxStyles = {
        color: '#554160'
    }
    
    return (
            <li key={id} className='mb-6 px-2'>
                <input type="checkbox" id={id} className='opacity-0 absolute' onChange={()=> handleClickTask(id)}/>
                <label htmlFor={id} className={clsx('flex gap-2', {'opacity-[0.5]': completed == 1})}>
                    {completed ? <RadioButtonCheckedIcon sx={checkBoxStyles}/> :  <RadioButtonUncheckedIcon sx={checkBoxStyles}/>}
                    <p className='border-b border-color-grey w-[90%]'>{title}</p>
                </label>
            </li>
    )
})

export default Task