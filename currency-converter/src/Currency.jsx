import { useEffect, useState } from 'react'

const URL = 'https://v6.exchangerate-api.com/v6/{YOUR-API-KEY}/latest/USD'
const Currency = () => {

    const [amount1, setAmount1] = useState('1')
    const [amount2, setAmount2] = useState('')
    const [currency1, setCurrency1] = useState('USD')
    const [currency2, setCurrency2] = useState('INR')

    const [exchangeRates, setExchangeRates] = useState({})

    async function fetchExchangeRates() {
        try {
            const res = await fetch(URL)
            if (!res.ok) {
                throw new Error('Failed to fetch rates!')
            }
            const data = await res.json()
            console.log(res)
            console.log(data)
            setExchangeRates(data.conversion_rates || {})
        } catch (error) {
            console.log('Error : ' + error);
        }
    }

    useEffect(() => {
        fetchExchangeRates()
    }, [])

    const convertCurrency = (amount, fromCurrency, toCurrency) => {
        if (fromCurrency == toCurrency) return amount;

        const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        return (amount * rate).toFixed(2);
    }

    useEffect(() => {
        if (exchangeRates[currency1] && exchangeRates[currency2]) {
            const convertedAmount = convertCurrency(amount1, currency1, currency2)
            setAmount2(convertedAmount)
        }
    }, [amount1, currency1, currency2, exchangeRates])

    return (
        <div className='mt-32'>
            <form className='flex flex-row gap-x-12 items-center justify-evenly'>
                <div className='border-2 border-white rounded-lg p-1 bg-white'>
                    <select name="fromCurrency" id="" className='p-2 rounded-lg'
                        value={currency1} onChange={(e) => setCurrency1(e.target.value)}>
                        {Object.keys(exchangeRates).map((curr) => (
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))}
                    </select>
                    <input type="number" value={amount1} onChange={(e) => setAmount1(e.target.value)}
                        className='text-black bg-white p-2 focus:outline-none' />
                </div>
                <p>to</p>
                <div className='border-2 border-white rounded-lg p-1 bg-white'>
                    <select name="fromCurrency" id="" className='p-2 rounded-lg'
                        value={currency2} onChange={(e) => setCurrency2(e.target.value)}>
                        {Object.keys(exchangeRates).map((curr) => (
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))}
                    </select>
                    {/* <input type="number" className='text-black bg-white p-2 focus:outline-none' /> */}
                    <input type="number" value={amount2} onChange={(e) => setAmount2(e.target.value)}
                        className='text-black bg-white ml-3 border-b-2 border-blue-700 outline-none' />
                </div>
            </form>
        </div>
    )
}

export default Currency