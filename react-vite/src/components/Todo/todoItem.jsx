import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({id}))}
      ></input>
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo({ id }))} className="delete">
        X
      </span>
    </li>
  );
};
export default TodoItem;
