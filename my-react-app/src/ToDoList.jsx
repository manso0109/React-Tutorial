import  {useState} from "react"

function ToDoList () {
    const [tasks, setTasks] = useState (["eat", "poop"])
    const [newTask, setNewTasks] =useState("")
    
    function handleInputChange (event) {
        setNewTasks(event.target.value)
    }

    function addTask () {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTasks("")
        }
        
    }

    function deleteTask (index) {
        const updatedTasks = tasks.filter ((_, i) => i !== index)
        setTasks (updatedTasks)
    }

    function moveTaskUp (index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] =  [updatedTasks[index - 1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown (index) {

        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] =  [updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="enter a task ..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((tasks,index) => <li key={index}>
                    <span className="text">{tasks}</span>
                    <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
                    <button onClick={() => moveTaskUp(index)} className="move-button">Up</button>
                    <button onClick={() => moveTaskDown(index)} className="move-button">Down</button>

                </li>)}
            </ol>
        </div>
    )
}

export default ToDoList 