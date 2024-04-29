import { useEffect, useState } from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import { LuWaves } from "react-icons/lu";
import { HiSun } from "react-icons/hi";
import { PiCloudSunFill } from "react-icons/pi";

import { APIKey } from '../assets/openweathermap';

const WeatherCard = () => {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState(null)
    const [search, setSearch] = useState(false)

    const fetchWeatherData = async (e) => {
        e?.preventDefault();
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
            const data = await response.json();
            console.log(data);
            if (data.cod == 401) {
                throw new Error(data.message);
            }
            setWeatherData(data);
        } catch (error) {
            console.log("Error while fetching weather data", error);
            setWeatherData(null);
        }
        setSearch(true);
    }

    //ToDo - Add debouncing
    useEffect(() => {
        if (city && search) {
            fetchWeatherData();
        }
    }, [city, search])

    return (
        <div className='bg-indigo-600 bg-opacity-20 mt-8 p-2 pt-4 w-[500px] h-[470px] rounded'>
            <form className='flex flex-row justify-between items-center bg-black rounded-2xl px-2'>
                <input type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className='rounded-2xl outline-none p-2'
                    placeholder='Enter City Name' />
                <button type='submit' onClick={fetchWeatherData} className='bg-transparent outline-none'>
                    <FaSearchLocation className='' />
                </button>
            </form>
            {search &&
                (
                    <div>
                        {weatherData ? (
                            <div className="text-white">
                                <div className='text-3xl mt-8'>{weatherData.name}, {weatherData.sys?.country}</div>
                                <div className="flex flex-row justify-center text-5xl mt-5">
                                    {(weatherData.main?.temp - 273.15)?.toFixed(2)}<span className='text-xl font-bold'>°C</span>
                                </div>

                                <div className="weather-info flex flex-row justify-around mt-10 text-xl px-4">
                                    <div className='flex items-center gap-x-3 leading-tight'><BiWind />
                                        <div>
                                            <p>{(weatherData.wind?.speed * 3.6)?.toFixed(2)} km/h</p>
                                            <p>Wind Speed</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-x-3 leading-tight'><LuWaves />
                                        <div>
                                            <p>{(weatherData.main?.humidity)?.toFixed(2)} %</p>
                                            <p>Humidity</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="weather-info flex flex-row justify-around mt-14 text-xl px-4">
                                    <div className='flex items-center gap-x-3 leading-tight'><HiSun />
                                        <div>
                                            <p>{new Date(weatherData.sys?.sunrise * 1000)?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
                                            <p>Sunrise</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-x-3 leading-tight'><PiCloudSunFill />
                                        <div>
                                            <p>{new Date(weatherData.sys?.sunset * 1000)?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
                                            <p>Sunset</p>
                                        </div>
                                    </div>
                                </div>
                                {/* //ToDo - Add Min and Max temp. */}
                            </div>
                        ) : (<div className='mt-16 pt-5 font-bold text-3xl'> Data Not Found</div>)}
                    </div>
                )
            }
        </div>
    )
}

export default WeatherCard