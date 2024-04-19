// import React from 'react'

import { useState } from "react"
import TxnMenu from "./TxnMenu"

const Balance = () => {
    const [balance, setBalance] = useState(0)
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)

    const onIncome = (amt) => {
        setIncome(income + amt)
        setBalance(balance + amt)
    }

    const onExpense = (amt) => {
        setExpense(income + amt)
        setBalance(balance - amt)
    }


    return (
        <div className='flex flex-col items-center gap-2'>
            <p className="text-2xl mt-16">
                Balance: <span className="font-bold">
                    10000
                </span>
            </p>
            <div className='flex flex-row space-x-8 mt-5'>
                <p className="bg-green-600 p-2 rounded-xl">
                    Income: <span className="font-bold">{income}</span>
                </p>
                <p className="bg-red-500 p-2 rounded-xl">
                    Expense: <span className="font-bold">{expense}</span>
                </p>
            </div>

            <TxnMenu onIncome={onIncome} onExpense={onExpense} />
        </div>
    )
}

export default Balance