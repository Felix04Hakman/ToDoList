import React from "react";

const Todo = ({ text,todo, todos, setTodos }) => {

    const deleteHandler = (e, id)  => {
        e.preventDefault();
        setTodos(prev => prev.filter((el) => el.id !== id));
    };
    const completeHandler = (e, id) => {
        e.preventDefault();
        console.log(id);
        setTodos(
            todos.map((item) => {
                console.log(id, item.id)
                console.log(item)
                if (id === todo.id) {
                    console.log("czemu się równa", id === todo.id)
                    return {
                        ...item,
                        "completed": !item.completed
                    }
                }
            })
        );
    };
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={(e) => completeHandler(e, todo.id)} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={(e) => deleteHandler(e, todo.id)} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );

}
export  default Todo;