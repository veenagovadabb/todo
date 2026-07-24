import React from 'react'

const Form = () => {
  const [todo,setTodo] = React.useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
   console.log(todo);
  }
  
  return (
    <div>
      <form>
        <label>To Do:</label>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button onClick={onSubmitHandler} type="submit">Add To Do</button>
      </form>
    </div>
  )
}

export default Form