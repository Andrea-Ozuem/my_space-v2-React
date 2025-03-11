import { useEffect, useState } from "react"
import WidgetHeading from "./WidgetHeading"
import { defaultPosition } from '../data'

export default function Weather() {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchWeatherData = async (latitude, longitude) => {
            try {
                const apiKey = import.meta.env.VITE_WEATHER_API_KEY
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
                );
                const data = await response.json()
                setWeatherData(data)
            } catch (err) {
                setError('Failed to fetch weather data')
            }
        };

        // Get user's location using Geolocation API
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    fetchWeatherData(latitude, longitude)
                },
                (err) => {
                    fetchWeatherData(defaultPosition.latitude, defaultPosition.longitude)
                }
            );
        } else {
            fetchWeatherData(defaultPosition.latitude, defaultPosition.longitude)
        }

        // Cleanup
        return () => {
            setWeatherData(null);
        };
    }, []);

    if (error && !weatherData) {
        return (
            <div className="widget">
                <WidgetHeading name="WEATHER" />
                <p className="text-center text-red-500">{error}</p>
            </div>
        );
    }

    if (!weatherData) {
        return (
            <div className="widget">
                <WidgetHeading name="WEATHER" />
                <p className="text-center">Loading weather data...</p>
            </div>
        )
    }

    

    return (
        <div className="widget">
            <WidgetHeading name="WEATHER" />
            <div className="mb-1">
                <p className="font-semibold text-center">{weatherData.name}</p>
                <p className="text-center">{weatherData.weather[0].description}</p>
            </div>
            <div>
                <div className="flex justify-between py-1 border-b-2 mb-2 px-2 text-sm border-white">
                    <p className="before:content-['\2666'] before:text-[10px] before:me-1">Current Temperature</p>
                    <p>{Math.round(weatherData.main.temp)}°C</p>
                </div>
                <div className="flex justify-between py-1 border-b-2 mb-2 px-2 text-sm border-white">
                    <p className="before:content-['\2666'] before:text-[10px] before:me-1">Humidity</p>
                    <p>{weatherData.main.humidity}%</p>
                </div>
                <div className="flex justify-between py-1 border-b-2 mb-2 px-2 text-sm border-white">
                    <p className="before:content-['\2666'] before:text-[10px] before:me-1">Wind Speed</p>
                    <p>{weatherData.wind.speed} m/s</p>
                </div>
                <div className="flex justify-between py-1 border-b-2 mb-2 px-2 text-sm border-white">
                    <p className="before:content-['\2666'] before:text-[10px] before:me-1">Pressure</p>
                    <p>{weatherData.main.pressure} hPa</p>
                </div>
            </div>
        </div>
    )
}