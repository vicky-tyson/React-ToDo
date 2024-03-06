export default function ToDoList({todolists, handleDelete}){
    return(
        <>
           <ul className="todo-list" id="list">
               {todolists.map((list, index) => <li key={index}>{list} <button className="del-btn" onClick={() => handleDelete(index)}>Delete</button></li>)}
             </ul>
        </>
    )
}