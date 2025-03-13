import { useState } from 'react'
import ToDoList from './componets/TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <ToDoList/>
  )
}

export default App
