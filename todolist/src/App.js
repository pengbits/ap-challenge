import './App.css';

import { useState } from 'react';

function App() {
  
  const initialTodos = [{
    text:'Take Oskar to Dentist',
    id: 1
  },{
    text:'Get Groceries',
    id: 3
  },{
    text:'Clean the car',
    id:2
  }]
  
  let [todos,setTodos ]= useState(initialTodos)
  let [todoDetail,setTodoDetail] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
  
    const nextId = getNextId()
    setTodos([...todos, {
      text: todoDetail,
      id: nextId
    }])
    setTodoDetail('')
  }

  const handleChangeDetail = e => {
    const {value} = e.target;
    setTodoDetail(value)
  }

  const handleDelete = id => {
    setTodos(todos.filter(t => t.id !== id))
  }


  // return the next id for a new todo
  // we can't just naively increment the id of the last item
  // because if the user deletes todos the id could be repeated
  // instead, collect all the ids from todos that are still present,
  // sort them by numeric value, and increment the last one
  const getNextId = () => {
    const ids = Object.values(todos).map(t => t.id).sort((a,b) => a-b)
    const nextId = ids.length ? ids.pop() + 1 : 1
    return nextId
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="Add your task"
          onChange={handleChangeDetail} 
          value={todoDetail} 
        />
        <input type="submit" />
      </form>
      <ul>{todos.map(t => {
        return <li key={t.id}>
          <span>{t.text}</span>{' '}
          <button onClick={(e) => handleDelete(t.id)}>Delete</button>
        </li>
      })}</ul>
    </div>
  );
}


export default App;
