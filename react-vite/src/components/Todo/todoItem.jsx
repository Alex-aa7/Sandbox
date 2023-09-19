const TodoItem = ({id, text, completed, toggleTodoComplete, removeTodo}) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      ></input>
      <span>{text}</span>
      <span onClick={() => removeTodo(id)} className="delete">
        X
      </span>
    </li>
  );
};
export default TodoItem;
