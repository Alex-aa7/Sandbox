import { useState } from "react";

export default function TodoComponent() {
  
  const [todos, setTodos]=useState([]);
  const [text, setText]=useState('');

  const addTodo=()=>{
    if(text.trim().length) {
      setTodos([...todos,
        {id: new Date().toISOString(),
          text,
          completed: false
      }])
      setText('');
    }
  };

  const removeTodo = (id)=>{
    setTodos(todos.filter(todos=>todos.id !== id));
  }
  
const toggleTodoComplete =(id)=>{
  setTodos(
    todos.map(
      todo=>{
        if(todo.id!==id) return todo;
        return{
        ...todo,
        completed: !todo.completed,
        }}
    )
  )
}

  return (
    <div>
      <h1>Todo</h1>
      <label>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={addTodo}>Add todo</button>
      </label>

      <ul>
        {todos.map(todo => <li key={todo.id}>
            <input type='checkbox' checked={todo.completed} onChange={()=>toggleTodoComplete(todo.id)}></input>
              <span>{todo.text}</span>
              <span onClick={()=>removeTodo(todo.id)} className="delete">X</span>
          </li>)
        }
      </ul>
    </div>
  );
}
