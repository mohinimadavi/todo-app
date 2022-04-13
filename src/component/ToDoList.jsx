import ToDo from "./ToDo"
const ToDoList = ({toDoListIds}) => {
    const formattedToDoList = toDoListIds.map(id => {
        return <ToDo key={id} id={id}/>
    })
    
    return (
        <div className="row">
            {formattedToDoList}
        </div>
    )
}

export default ToDoList;