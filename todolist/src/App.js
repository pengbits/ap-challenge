import './App.css';
import { useState } from 'react';

function App() {
  
  const initialTodos = [{
    text:'Take Oskar to Dentist',
    id: 1
  },{
    text:'Get Groceries',
    id: 2
  },{
    text:'Clean the car',
    id:3
  }]
  
  let [todos,setTodos ]= useState(initialTodos)
  let [todoDetail,setTodoDetail] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log('handle submit')
  }

  const handleChangeDetail = e => {
    const {value} = e.target;
    setTodoDetail(value)
  }

  const handleDelete = id => {
    console.log('delete ' + id)
  }


  return (
    <div className="App">
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoDetail" value={todoDetail} onChange={handleChangeDetail}/>
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
