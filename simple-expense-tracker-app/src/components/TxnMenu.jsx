// import React from 'react'

import { useState } from "react"

const TxnMenu = ({ onIncome, onExpense }) => {
    const [menu, setMenu] = useState(false)
    const [data, setData] = useState([])
    const [amount, setAmount] = useState(0)
    const [title, setTitle] = useState("")
    const [txnType, setTxnType] = useState("")

    // const toggleButton = () => {
    //     setMenu(!menu)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("submit");
        if (!amount || !title || !txnType) {
            alert("Please enter all details to add transaction.")
            return;
        }
        if (txnType == "income") {
            onIncome(Number(amount));
        } else {
            onExpense(Number(amount));
        }

        const newTxn = {
            id: data.length + 1,
            amount,
            title,
            txnType
        }
        setData((prevData) => [...prevData, newTxn])
        setMenu(false)
        setAmount(0)
        setTitle("")
        setTxnType("")

    }

    return (
        <div className="mt-6 flex flex-col items-center">
            <button className="bg-black p-2 rounded-lg hover:bg-gray-700 mb-6"
                onClick={() => setMenu(!menu)}>
                Add Transaction
            </button>
            {menu &&
                <form className="flex flex-col items-center">
                    <div className="flex flex-col gap-1">
                        <input type="number" required
                            placeholder="Enter Amount"
                            className="p-2 border-none rounded-lg"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <input type="text" required
                            placeholder="Enter Title"
                            className="p-2 border-none rounded-lg"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <select name="" className="p-2 broder rounded-lg"
                            value={txnType}
                            onChange={(e) => setTxnType(e.target.value)}>
                            <option value="">Select txn type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                        <button className="bg-black my-4 p-2 rounded-lg hover:bg-gray-700"
                            type="submit" onClick={handleSubmit}>
                            Add
                        </button>
                    </div>
                </form>
            }
            {/* ToDo - Add scroll to txns, Option to Edit and remove txns */}
            {data.length &&
                data.map((txn) => (
                    <div className={`rounded-md mb-2 ${txn.txnType == "income" ? "bg-green-600" : "bg-red-500"}`} key={txn.id}>
                        <div className="flex w-[200px] justify-between font-bold gap-4 p-2">
                            <p>{txn.title}</p>
                            <p>{txn.amount}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default TxnMenu