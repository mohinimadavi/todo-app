const ToDoTasks = ({tasks}) => {
    const formattedTasks = tasks.map(task => {
        return (
            <li key={task.text} className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value={task.text} aria-label="..." checked={task.completed} />
                {task.text}
            </li>
        )
    })
    return (
        <ul className="list-group list-group-flush">
            {formattedTasks}
        </ul>
    )
}

export default ToDoTasks;