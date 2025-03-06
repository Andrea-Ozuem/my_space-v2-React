import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function TaskStatus({ tasks, name }) {
    const total = tasks.length 
    const completed = tasks.filter((task) => task.completed == 1).length
    const percentage = total == 0 ? 0 : Math.round(completed/total * 100)

    return (
        <>
            <div className="w-full bg-grey flex mb-8 mt-12 p-4 justify-between items-center rounded-2xl">
                <div>
                    <p>Daily Tasks</p>
                    <p>{completed} out of {total} done</p>
                </div>
                
                <div className="w-[2.7rem]">
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                            textSize: '22px',
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "#525252",
                        })}
                    />
                </div>
            </div>
        </>
    )
}