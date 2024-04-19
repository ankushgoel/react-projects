// import React from 'react'

import { useState } from "react"

const TxnMenu = ({ onIncome, onExpense }) => {
    const [menu, setMenu] = useState(false)

    const toggleButton = () => {
        setMenu(!menu)
    }
    return (
        <div className="mt-6 flex flex-col items-center">
            <button className="bg-black p-2 rounded-lg hover:bg-gray-700 mb-6"
                onClick={() => setMenu(!menu)}>
                Add Transaction
            </button>
            {menu &&
                <div className="flex flex-col items-center">
                    <div className="flex flex-col gap-1">
                        <input type="number" required
                            placeholder="Enter Amount"
                            className="p-2 border rounded-lg border-black"
                        />
                        <input type="text" required
                            placeholder="Enter Title"
                            className="p-2 border rounded-lg border-black"
                        />
                        <select name="" className="p-2 broder rounded-lg">
                            <option value="">Select txn type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                </div>
            }

        </div>
    )
}

export default TxnMenu