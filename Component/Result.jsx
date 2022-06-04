import React from 'react';

export default function Result(props) {
    return (
        <div className='task-list'>
            { 
                props.tasks.map((task, index) => {
                    return(
                        <div key={index}>
                            <p>{task.title}</p>
                            <p>{task.description}</p>
                            <input type='button' onClick={() => props.deleteTask(task.id)} value='Done' />
                        </div>
                        )
            })}
        </div>
        )
}

