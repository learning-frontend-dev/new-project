import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskList() {
    const [tasks,setTasks] = useState([]);

    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)){
            return;
        }

        const newTask = [task,...tasks];
        setTasks(newTask);
        
    }

    return (
        <div className="tasklist__outer">
            <TaskForm
                onSubmit={addTask}
            />
        </div>
    )
}

export default TaskList;