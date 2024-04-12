import { useState } from 'react'
import Switch from "react-switch";

const PG = () => {

    const [checked, setChecked] = useState(false);

    function handleChange() {
        setChecked(!checked);
    }

    return (
        <div className='pt-8 text-white font-bold flex flex-col 
        bg-purple-800 w-[350px] shadow-2xl mx-auto mb-52 p-4 hover:shadow-blue-900 rounded-md'>
            <div className='mb-4 flex justify-between'>
                <label htmlFor="">Password Length:</label>
                <input className='w-12 bg-purple-700 pl-2' type="number" />
            </div>
            <div className='mb-4 flex justify-between'>
                <label htmlFor="">Include Uppercase:</label>
                <Switch height={20} width={40} handleDiameter={18} onChange={handleChange} checked={checked} />
            </div>
            <div className='mb-4 flex justify-between'>
                <label htmlFor="">Include Numbers:</label>
                <Switch height={20} width={40} handleDiameter={18} />
            </div>
            <div className='mb-4 flex justify-between'>
                <label htmlFor="">Include Special:</label>
                <Switch height={20} width={40} handleDiameter={18} />
            </div>
            <button className=''>Generate Password</button>
        </div>
    )
}

export default PG