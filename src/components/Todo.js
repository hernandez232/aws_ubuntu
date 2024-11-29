import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? 'completed' : 'incompleted'}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <button onClick={() => editTodo(task.id)} aria-label="edit"> 
          <FontAwesomeIcon
            className="edit-icon"
            icon={faPenToSquare}
          />
        </button>
        <button onClick={() => deleteTodo(task.id)} aria-label="delete">
          <FontAwesomeIcon
            className="delete-icon"
            icon={faTrash}
          />
        </button>
      </div>
    </div>
  );
};
