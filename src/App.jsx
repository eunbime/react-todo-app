import "App.css";
import TodoForm from "components/TodoForm";
import TodoList from "components/TodoList";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContents = (e) => {
    setContents(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && contents !== "") {
      const newTodo = {
        id: uuid(),
        title,
        contents,
        isDone: false,
      };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      setTitle("");
      setContents("");
    } else {
      alert("제목과 내용을 입력해주세요");
    }
  };

  const handleDone = (id) => {
    const isDoneTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(isDoneTodos);
  };

  return (
    <div className="main-container">
      <header>
        <h1>My Todo List</h1>
      </header>
      <TodoForm
        title={title}
        contents={contents}
        handleTitle={handleTitle}
        handleContents={handleContents}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleDone={handleDone}
        listIsDone={false}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleDone={handleDone}
        listIsDone={true}
      />
    </div>
  );
}

export default App;
