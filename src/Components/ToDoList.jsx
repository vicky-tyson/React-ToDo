export default function ToDoList({todolists, task, handleDelete}){

    const check = document.getElementsByClassName("list-through");

function makeStrike(indexNum){
    check[indexNum].classList.add('active');
    task();
}
    return(
        <>
           <ul className="todo-list" id="list">
               {todolists.map((list, index) => <li key={index} className="list-through" onClick={() => makeStrike(index)}>{list} <button className="del-btn" onClick={() => handleDelete(index)}>Delete</button></li>)}
             </ul>
        </>
    )
}