import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from "./todoList";
import InputField from "./inputField";
import { addTodo } from "../../store/todoSlice";

export default function TodoComponent() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div>
      <h1>Todo</h1>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}
