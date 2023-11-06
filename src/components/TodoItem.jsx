import React from "react";
import "../styles/TodoItem.css";

function TodoItem({ todo, handleDelete, handleDone }) {
  return (
    <li className="item-container">
      <div className="todo-info">
        <h3 className="todo-title">{todo.title}</h3>
        <p className="todo-contents">{todo.contents}</p>
      </div>

      <div className="btn">
        <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
          삭제하기
        </button>
        <button className="finish-btn" onClick={() => handleDone(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
