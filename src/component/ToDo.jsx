import React, { useState, useEffect } from 'react';
import "./ToDo.css"
import ToDoTasks from "./ToDoTasks"
import toDoListData from "../data/ToDoListData";

const ToDo = ({ id }) => {
    const [showAddTask, setShowAddTask] = useState(true);
    const [newTask, setNewTask] = useState({text:"", completed:false});
    const data = toDoListData.filter(item => item.id == id)[0];

    const [tasks, setTasks] = useState(data.tasks);
    const onClick = () => {
        setShowAddTask(false);
    }
    const handleChange = (e) => {
        setNewTask({text:e.target.value, completed:false});
    }
    const onAddTaskClick = () => {
        if (newTask.text)
            setTasks([...tasks, newTask])
        console.log(tasks);
    }

    const onCloseClick = () => {
        setShowAddTask(true);
    }

    useEffect(() => {
        setNewTask({text:"", completed:false});
    }, [tasks]);

    return (
        <div className="col-sm-3" style={{ marginBottom: "2rem" }}>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-header">{data.title}</div>
            </div>
            <ToDoTasks tasks={tasks} />
            <div className="card-footer">
                <div className={showAddTask ? "" : "hidden"}>
                    <button onClick={onClick}>+ Add a task</button>
                </div>
                <div className={!showAddTask ? "" : "hidden"}>
                    <textarea value={newTask.text} type="text" onChange={handleChange}></textarea>
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary me-md-2" type="button" onClick={onAddTaskClick}>Add</button>
                        <button className="btn btn-primary" type="button" onClick={onCloseClick}>Close</button>
                        {/* <button type="button" class="btn-close" aria-label="Close" onClick={onCloseClick}></button> */}
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default ToDo;