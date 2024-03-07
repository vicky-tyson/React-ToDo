import { useState } from "react";
import ToDoList from "./ToDoList";

export default function Container(){
 
const [todoItem, setTodoItem] = useState('');
const [task, setTask] = useState([]);

const listContainer = document.getElementsByClassName("list-container")

function saveTasks(){
    localStorage.setItem("data", task);
}

function displayTaks(){
   listContainer.innerHTML = localStorage.getItem("data");
}

    function addData(event){
            setTodoItem(event.target.value);
            saveTasks();
    }

    function submitHandler() {
        if(todoItem === ''){
            alert("Enter One ToDo")
        } else{
            const newTodos = [...task, todoItem];
            setTask(newTodos);
            setTodoItem("");
            saveTasks();
        }
    }

    function deleteHandler(indexValue){
        const newtodos = task.filter((todo, index) => index !== indexValue);
        setTask(newtodos);
        saveTasks();
    }

displayTaks();

    return(
        <>
           <div className="list-container">
                <div className="input-box">
                    <input type="text" placeholder="Enter Your To-Do" className="todo-data" id="todo" value={todoItem} onChange={addData}/>
                    <button onClick={submitHandler}>Add</button>
                </div>
                <ToDoList todolists={task} handleDelete={deleteHandler} task={saveTasks}/>
           </div>
        </>
    )
}