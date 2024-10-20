import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/App.css'

export const Task = ({ task, toggleComplete, deleteTask  }) => {
  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className={`card-title ${task.complete ? 'text-decoration-line-through' : ''}`}>
            {task.task}
          </h5>
        </div>
        <div>
          <input
            type="checkbox"
            className="form-check-input custom-checkbox me-2"
            checked={task.complete}
            onChange={() => toggleComplete(task.id, task.complete)}
           
          />
           <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
           <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};
