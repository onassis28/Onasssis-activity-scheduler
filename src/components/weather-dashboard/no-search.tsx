import { WeatherData } from '../../interfaces'

interface NoSearchProps {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>
  location: string
  setLocation2: React.Dispatch<React.SetStateAction<string>>
  error: boolean
  setError: React.Dispatch<React.SetStateAction<boolean>>
}
const fetchWeatherData = async (
  setSearch: NoSearchProps['setSearch'],
  setWeatherData: NoSearchProps['setWeatherData'],
  location: string,
  setError: NoSearchProps['setError'],
) => {
  try {
    setError(false)
    setSearch(true)

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status)
    }
    const data = await response.json()
    setWeatherData(data)
  } catch (error) {
    setError(true)
  }
}
const NoSearch = ({
  setSearch,
  setWeatherData,
  location: location2,
  setLocation2,
  setError,
  error,
}: NoSearchProps) => {
  return (
    <div className="bg-gray-200 w-full md:w-[30%] flex flex-col h-[20rem] items-center justify-center rounded-2xl shadow-md">
      {error && <div className="mb-3 text-red-500">Location not found</div>}
      <input
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocation2(event.target.value)}
        placeholder="Insert Location"
        list="cities"
      />
      <button
        onClick={() => {
          fetchWeatherData(setSearch, setWeatherData, location2, setError)
        }}
        className="px-4 py-2 mt-8 font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
      >
        Search weather data
      </button>
    </div>
  )
}

export default NoSearch
