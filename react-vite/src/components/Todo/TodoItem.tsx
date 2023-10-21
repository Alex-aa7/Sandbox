import { useAppDispatch } from "../../store/hook";
import { removeTodo, toggleTodoComplete } from "../../store/todoSlice";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete(id))}
      ></input>
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))} className="delete">
        X
      </span>
    </li>
  );
};
export default TodoItem;
