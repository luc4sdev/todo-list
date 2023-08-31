import { useState } from 'react'

import './Tasks.modules.css'
import clipboard from '../assets/Clipboard.svg'
import trash from '../assets/trash.svg'

interface TasksProps {
    setTasks: (tasks: string[]) => void;
    tasks: string[];
}
export function Tasks({ setTasks, tasks }: TasksProps) {


    const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const handleCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>, task:string) => {
    if (event.target.checked) {
      setSelectedTasks(prevSelectedTasks => [...prevSelectedTasks, task]);
    } else {
      setSelectedTasks(prevSelectedTasks => prevSelectedTasks.filter(selectedTask => selectedTask !== task));
    }
  };


  function deleteTask(index: number) {
    const temp = [...tasks]
    temp.splice(index,1)
    setTasks(temp)
  }



    return (
        <div className='tasks'>
            <div className='tasks-container'>
                <div className='tasks-info'>
                    <div className='tasks-created'>
                        <h1>Tarefas criadas</h1>
                        <span>{tasks.length}</span>
                    </div>
                    <div className='tasks-finished'>
                        <h1>Concluídas</h1>
                        <span>{selectedTasks.length}</span>
                    </div>
                </div>
                {tasks.length !== 0 ? 
                <div className='current-tasks'>
                   {tasks.map((task, index) => {
                    return (
                        <div className={`task-id ${selectedTasks.includes(task) ? 'task-selected' : ''}`} key={index}>
                        <input type="checkbox" id={`radio${index}`}  onChange={event => handleCheckboxChange(event, task)} />
                        <h1>{task}</h1>
                        <button type='button'><img src={trash} alt="Trash" onClick={() => deleteTask(index)}/></button>
                     </div>
                    )
                   })}
                </div> 
                    : 
                    <div className='tasks-empty'>
                    <img src={clipboard} alt="Clipboard" />
                    <h1>Você ainda não tem tarefas cadastradas</h1>
                    <h1>Crie tarefas e organize seus itens a fazer</h1>
                </div>
                }
            </div>
        </div >
    )
}