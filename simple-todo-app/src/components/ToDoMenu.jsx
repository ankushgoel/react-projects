import React, { useState } from 'react'
import { GrFormAdd } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";

import Switch from "react-switch";


const ToDoMenu = () => {
    const [task, setTask] = useState('')
    const [list, setList] = useState([])

    const addTask = (e) => {
        e.preventDefault();
        if (task) {
            const todo = {
                id: list.length + 1,
                title: task,
                toggle: false
            }
            setList([todo, ...list])
            setTask('')
        }
    }
    // console.log(list);

    const deleteTask = (id) => {
        const filteredList = list.filter((task) => id != task.id)
        setList(filteredList)
    }
    const toggleTask = (id) => {
        const updatedTaskList = list.map((task) =>
            task.id == id ? { ...task, toggle: !task.toggle } : task
        )
        setList(updatedTaskList)
    }

    return (
        <div className='mx-auto mt-8'>
            <form className='form flex items-center justify-center mb-4'>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)}
                    placeholder='Enter your task'
                    className='w-[350px] border-2 border-blue-900 rounded
                bg-gradient-to-r from-sky-900 via-sky-500 to-indigo-200
                font-bold px-3 py-2 mr-3 text-white' />
                <button type='submit' className='bg-blue-500 hover:bg-blue-600 font-bold p-3 rounded'
                    onClick={addTask}>
                    <GrFormAdd />
                </button>
            </form>
            <div className='flex flex-col items-center'>
                {list.length ?
                    list.map((task) =>
                        <div key={task.id} className='flex items-center w-[350px] text-emerald-400 
                        font-bold space-x-2 bg-gray-200 p-2 mb-2'>
                            <h4 className={`text-black flex-grow ${task.toggle ? 'line-through' : ''}`}>{task.title}</h4>
                            <Switch name='uppercase' height={20} width={40} handleDiameter={18}
                                checked={task.toggle} onChange={() => toggleTask(task.id)} />
                            <button className='text-red-600 font-bold text-xl p-1'
                                onClick={() => deleteTask(task.id)}><RiDeleteBin5Fill /> </button>
                        </div>
                    ) : <h1>Add Tasks</h1>
                }

            </div >
        </div >
    )
}

export default ToDoMenu