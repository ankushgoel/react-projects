import React, { useEffect, useState } from 'react'

const URL = 'https://v6.exchangerate-api.com/v6/{YOUR-API-KEY}/latest/USD'
const Currency = () => {

    const [amount1, setAmount1] = useState('')
    const [amount2, setAmount2] = useState('')
    const [currency1, setCurrency1] = useState('USD')
    const [currency2, setCurrency2] = useState('INR')

    const [exchangeRates, setExchangeRates] = useState({})

    async function fetchExchangeRates() {
        try {
            const res = await fetch(URL)
            if (!res.ok) {
                throw new Error('Failed')
            }
            const data = await res.json()
            console.log(res)
            console.log(data)
            setExchangeRates(data.conversion_rates)
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

    return (
        <div>Currency</div>
    )
}

export default Currency