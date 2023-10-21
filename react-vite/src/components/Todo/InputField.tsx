
interface NewTodoFormProps {
  text:string, 
  handleInput:(str:string)=>void, 
  handleSubmit: ()=>void,
}

const InputField: React.FC<NewTodoFormProps> = ({text, handleInput, handleSubmit})=>{

    return(<label>
<input
  placeholder="new ToDo"
  type="text"
  value={text}
  onChange={(e) => handleInput(e.target.value)}
/>
<button onClick={handleSubmit}>Add todo</button>
</label>)
}
export default InputField;

