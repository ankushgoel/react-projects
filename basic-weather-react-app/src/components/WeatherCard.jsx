import React, { useEffect, useState } from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { BiWind } from "react-icons/bi";

const WeatherCard = () => {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [search, setSearch] = useState(false)

    return (
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 mt-10 p-2 pt-4 w-[400px] h-[320px]'>
            <div className='flex flex-row justify-between items-center bg-black rounded-2xl px-2'>
                <input type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className='rounded-2xl outline-none p-2'
                    placeholder='Enter City Name' />
                <button className='bg-transparent outline-none'>
                    <FaSearchLocation className='' />
                </button>
            </div>
            {search &&
                (
                    <div>
                        {weatherData ? (
                            <div className="text-white">
                                <div className="flex flex-col item-center text-5xl mt-5">
                                    {(weatherData.main?.temp - 273.15)?.toFixed(2)}° C
                                </div>
                                <div>{weatherData.name}</div>

                            </div>
                        ) : (<div> Data Not Found</div>)}
                    </div>
                )
            }
        </div>
    )
}

export default WeatherCard