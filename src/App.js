
import React,{useState} from 'react'
import Todolist from './Todolist'

const App = () => {
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([]);

  const changeHandler= e => {
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask("");

  }
  const deleteHandler = (indexValue) =>{
    const newTodos =todos.filter((todo,index)=>index!== indexValue);
    setTodos(newTodos);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
      <center>
        <h3>Todo Management Application</h3>
        <input type="text" name="task" value={task} onChange={changeHandler}/> &nbsp;  &nbsp; 
        <input type="submit" name="Add" />
      </center>
      </form>
      <Todolist todolist={todos} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default App
