import { useState } from 'react'
import { WeatherData } from '../../interfaces'
import NoSearch from './no-search'

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [location2, setLocation2] = useState<string>('')
  const [search, setSearch] = useState<boolean>(false)

  if (!search)
    return (
      <NoSearch
        setSearch={setSearch}
        setWeatherData={setWeatherData}
        location2={location2}
        setLocation2={setLocation2}
      />
    )
  if (!weatherData) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-gray-200 mt-8 w-[30%] flex flex-col h-[20rem] items-center justify-center rounded-2xl shadow-md">
      <h2 className="mb-4 text-4xl font-semibold">{weatherData.name}</h2>
      <div className="flex items-center">
        <img
          className="w-12 h-12 mr-4"
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          alt={weatherData.weather[0].description}
        />
        <div>
          <p className="text-2xl font-medium text-gray-700">
            {Math.round(weatherData.main.temp - 273.15)}°C
          </p>
          <p className="text-gray-500">{weatherData.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherDashboard
