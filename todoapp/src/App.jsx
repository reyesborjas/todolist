import { useState } from 'react'
import ToDoList from './components/TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <ToDoList/>
  )
}

export default App
