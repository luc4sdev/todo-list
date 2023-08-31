import { useState, FormEvent } from 'react'

import './Header.modules.css'
import logo from '../assets/Logo.svg'
import plus from '../assets/plus.svg'


interface HeaderProps {
    setTasks: (tasks: string[]) => void;
    tasks: string[];
}

export function Header({ setTasks, tasks } : HeaderProps) {

    function handleSubmitForm(e: FormEvent) {
        e.preventDefault();
        setTasks([...tasks, currentTask])
    }

    const [currentTask, setCurrentTask] = useState('')
    return (
       <div className='header'>
        <img src={logo} alt="Logo" />

        <form className='div-input' onSubmit={handleSubmitForm}>
            <input type="text" placeholder='Adicione uma nova tarefa' value={currentTask} onChange={e => setCurrentTask(e.target.value)}/>
            <button type='submit'>Criar <img src={plus} alt="Plus" /></button>
        </form>
       </div>
    )
}