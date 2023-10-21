import { useState } from "react";
import TodoList from "./TodoList";
import InputField from "./InputField";
import { addTodo } from "../../store/todoSlice";
import { useAppDispatch } from "../../store/hook";

export default function TodoComponent() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const addTask = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <h1>Todo</h1>
      <h2>Можно добавить, удалить, изменить статус ToDo</h2>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}
