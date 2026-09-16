'use client'


import { useState } from "react"

export default function Home() {
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=30.9&longitude=75.8&current=temperature_2m");
    const data = await res.json();
    setWeather(data.current.temperature_2m)
  }


  return (
    <div>
      {weather && (
        <h2> Temperature: {weather} </h2>
      )}
      <button
        onClick={() => getWeather()}
      >
        Get Weather
      </button>
    </div>
  )
}