import { useState, useEffect } from "react"
import axios from "axios"

export default function WeatherModule() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/api/weather")
      .then(res => {
        setWeather(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to fetch weather")
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{color:"red"}}>{error}</p>

  return (
    <div>
      <h2>Weather</h2>
      <p>City: {weather.city}</p>
      <p>Temperature: {weather.temp}°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  )
}
