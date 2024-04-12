import { useState } from 'react'
import Switch from "react-switch";

const PG = () => {

    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeUpperCase, setIncludeUpperCase] = useState(true)
    const [includeNumbers, setIncludeNumbers] = useState(true)
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true)

    const generatePassword = () => {
        if (passwordLength > 30 || passwordLength < 5) {
            alert(`Invalid Password Length!!
length can be between 5 to 30.`)
            return
        }
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '1234567890';
        const specialChars = '!@#$%^&*()-_+=';

        let validChars = lowerCaseChars;

        if (includeUpperCase) {
            validChars += upperCaseChars;
        }
        if (includeNumbers) {
            validChars += numbers
        }
        if (includeSpecialChars) {
            validChars += specialChars
        }
        let newPassword = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length)
            newPassword += validChars.charAt(randomIndex);
            // console.log(validChars[randomIndex]);
        }
        // console.log(newPassword);
        setPassword(newPassword);
    }

    return (
        <div className='pt-8 text-white font-bold flex flex-col 
        bg-purple-800 w-[350px] shadow-2xl mx-auto mb-52 p-4 hover:shadow-blue-900 rounded-md'>
            <div className='form'>
                <div className='mb-4 flex justify-between'>
                    <label htmlFor='length'>Password Length:</label>
                    <input name='length' type="number"
                        min={5} max={30}
                        className='w-12 bg-purple-700 pl-2'
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(e.target.value)} />
                </div>
                <div className='mb-4 flex justify-between'>
                    <label htmlFor='uppercase'>Include Uppercase:</label>
                    <Switch name='uppercase' height={20} width={40}
                        handleDiameter={18} onChange={() => setIncludeUpperCase(!includeUpperCase)}
                        checked={includeUpperCase} />
                </div>
                <div className='mb-4 flex justify-between'>
                    <label htmlFor='numbers'>Include Numbers:</label>
                    <Switch name='numbers' height={20} width={40}
                        handleDiameter={18} onChange={() => setIncludeNumbers(!includeNumbers)}
                        checked={includeNumbers} />
                </div>
                <div className='mb-4 flex justify-between'>
                    <label htmlFor='specialChars'>Include Special Characters:</label>
                    <Switch name='specialChars' height={20} width={40}
                        handleDiameter={18} onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                        checked={includeSpecialChars} />
                </div>
                <button className='' onClick={generatePassword}>Generate Password</button>
            </div>
            <h2>{password}</h2>
        </div>
    )
}

export default PG