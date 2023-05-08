import React from "react";

const TodoApp = () => {
    const [Task, setTask] = React.useState([]);
    const [input, setInput] = React.useState("");



    const handleInput = (ele) => {
        setInput(ele.target.value);
    }

    const handleTask = (ele) => {
        const todoList = {
            id: Task.length + 1,
            todo: input
        }
        setTask([...Task, todoList])
    }

    const handleDel = (id) => {
        const DelTask = Task.filter((Task) => Task.id !== id);
        setTask(DelTask);
    }


    return (
        <div className="todo-app">
            <div>
                <input onChange={handleInput} type="text"></input>
                <button onClick={handleTask}>Add Task</button>
                {Task.map(({ id, todo }) =>
                (
                    <div key={id}>
                        <div >{todo}</div>
                        <button onClick={() => handleDel(id)}>Delete Task</button>
                        <hr />
                    </div>

                ))}
            </div>
        </div>
    )

}

export default TodoApp;