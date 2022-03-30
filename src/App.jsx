import ToDoList from "./component/ToDoList";
import Navbar from "./component/Navbar";
import toDoListData from "./data/ToDoListData"

const App = () => {
    const toDoListIds = toDoListData.map(item => item.id);
    return (
        <div>
            <Navbar/>
            <br />
            <br />
            <div style={{ margin: '2rem' }}><ToDoList toDoListIds={toDoListIds}/></div>
        </div>
    )
}

export default App;