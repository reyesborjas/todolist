import React, { useState } from "react";
import { Trash2 } from "lucide-react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (event) => {
    if (event.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">To Do List</h1>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-blue-500"
          placeholder="Agregar una nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleNewTask}
        />
        <ul className="space-y-2">
          {tasks.length === 0 ? (
            <li className="text-gray-500 text-center">No hay tareas, agrega una nueva</li>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 bg-gray-100 rounded hover:bg-gray-200"
              >
                <span>{task}</span>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
