import { useState } from "react";
import TodoList from "./todoList";
import InputField from "./inputField";

export default function TodoComponent() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        { id: new Date().toISOString(), text, completed: false },
      ]);
      setText("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const toggleTodoComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div>
      <h1>Todo</h1>
      <InputField text={text} handleInput={setText} handleSubmit={addTodo}/>
      <TodoList  todos={todos}
            toggleTodoComplete={toggleTodoComplete}
            removeTodo={removeTodo} />
    </div>
  );
}
