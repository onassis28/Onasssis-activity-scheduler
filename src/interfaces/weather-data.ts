export interface WeatherData {
  name: string
  main: {
    temp: number
  }
  weather: [
    {
      description: string
      icon: string
    },
  ]
}
