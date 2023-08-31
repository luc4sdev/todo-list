import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from 'react'

import './App.modules.css'

export default function App() {

  const [tasks, setTasks] = useState<string[]>([])
  console.log(tasks)

  return (
    <div className="container">
      <Header setTasks={setTasks} tasks={tasks}/>
     <Tasks setTasks={setTasks}  tasks={tasks} />
    </div>
  )
}