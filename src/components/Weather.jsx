import { useEffect } from "react";
import WidgetHeading  from "./WidgetHeading"
import { weather } from '../data'

export default function Weather() {
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        const dataFetch = async () => {
        const data = await (
            await fetch(
            'https://run.mocky.io/v3/d6155d63-938f-484c-8d87-6f918f126cd4',
            )
        ).json()

        // set state when the data received
        setWeatherData(data)
        };

        dataFetch();
    }, []);

    return (
        <div className="widget">
            <WidgetHeading name="WEATHER" />
            <div className="mb-1">
                <p className="font-semibold text-center">{weather.city}</p>
                <p className="text-center">{weather.desc}</p>
            </div>
            <div>
                <div className="flex justify-between py-1 border-b-2 mb-2 px-2 text-sm border-white">
                    <p className="before:content-['\2666'] before:text-[10px] before:me-1">Current Temperature</p>
                    <p>{weather.feels_like}</p>
                </div>
                <div className="flex justify-between py-1 border-b-2 mb-2 px-2 text-sm border-white">
                    <p className="before:content-['\2666'] before:text-[10px] before:me-1">Humidity</p>
                    <p>{weather.humidity}</p>
                </div>
                <div className="flex justify-between py-1 border-b-2 mb-2 px-2 text-sm border-white">
                    <p className="before:content-['\2666'] before:text-[10px] before:me-1">Wind Speed</p>
                    <p>{weather.wind_speed}</p>
                </div>
                <div className="flex justify-between py-1 border-b-2 mb-2 px-2 text-sm border-white">
                    <p className="before:content-['\2666'] before:text-[10px] before:me-1">Pressure</p>
                    <p>{weather.pressure}</p>
                </div>
            </div>
        </div>
    )
}
