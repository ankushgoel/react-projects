import React, { useState } from 'react'
import { GrFormAdd } from "react-icons/gr";


const ToDoMenu = () => {

    return (
        <div className='mx-auto mt-8'>
            <div className='flex items-center justify-center mb-4'>
                <input type="text"
                    placeholder='Enter your task'
                    className='w-[350px] border-2 border-blue-900 rounded
                bg-gradient-to-r from-sky-900 via-sky-500 to-indigo-200
                font-bold px-3 py-2 mr-3 text-white' />
                <button className='bg-blue-500 hover:bg-blue-600 font-bold p-3 rounded'>
                    <GrFormAdd />
                </button>
            </div>
        </div>
    )
}

export default ToDoMenu