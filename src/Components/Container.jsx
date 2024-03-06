import { useState } from "react";
import ToDoList from "./ToDoList";

export default function Container(){
 
const [todoItem, setTodoItem] = useState('');
const [task, setTask] = useState([]);

    function addData(event){
            setTodoItem(event.target.value);
    }

    function submitHandler() {
        if(todoItem == ''){
            alert("Enter One ToDo")
        } else{
            const newTodos = [...task, todoItem];
            setTask(newTodos);
            setTodoItem("");
        }
    }

    function deleteHandler(indexValue){
        const newtodos = task.filter((todo, index) => index != indexValue);
        setTask(newtodos);
    }

    return(
        <>
           <div className="list-container">
                <div className="input-box">
                    <input type="text" placeholder="Enter Your To-Do" className="todo-data" id="todo" value={todoItem} onChange={addData}/>
                    <button onClick={submitHandler}>Add</button>
                </div>
                <ToDoList todolists={task} handleDelete={deleteHandler}/>
           </div>
        </>
    )
}