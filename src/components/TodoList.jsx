import React from "react";
import "../styles/TodoList.css";
import TodoItem from "components/TodoItem";

function TodoList({ todos, handleDelete, handleDone }) {
  return (
    <div>
      <h2 className="list-label">working 🔥</h2>
      <ul className="list-container">
        {todos
          .filter((todo) => {
            if (todo.isDone === false) return todo;
          })
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleDone={handleDone}
              />
            );
          })}
      </ul>
      <h2 className="list-label">done 👏</h2>
      <ul className="list-container">
        {todos
          .filter((todo) => {
            if (todo.isDone === true) return todo;
          })
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleDone={handleDone}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default TodoList;
