import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo,toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        
        <div>
        <FontAwesomeIcon className='delete-icon' icon={faXmark} onClick={()=>deleteTodo(task.id)}/>
        </div>
    </div>
  )
}