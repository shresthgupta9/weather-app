import React from 'react'
import './ShowWeather.css'

function ShowWeather(props) {
    const data = props.value;
    if (data.base) {
        const temp = (data.main.temp - 273).toFixed(2)
        const feels_like = (data.main.feels_like - 273).toFixed(2)
        const visibility = data.visibility/1000

        const description = (data.weather[0].description)[0].toUpperCase() + (data.weather[0].description).slice(1)
        return (
            <div className='content'>
                <div className="region">
                    <h1>{data.name}, {data.sys.country}</h1>
                </div>
                <div className="main">
                    <h1>{temp} °C</h1>
                    <h3>{data.weather[0].main} &nbsp;&nbsp;&nbsp; Feels like {feels_like} °C</h3>
                </div>
                <div className="others">
                    <div className="minbox">
                        {/* <h2>Description: `${data.weather[0].description}`</h2> */}
                        <h2>Description: {description}</h2>
                        <h2>Latitude: {data.coord.lat}°</h2>
                        <h2>Longitude: {data.coord.lon}°</h2>
                        <h2>Pressure: {data.main.pressure} hPa</h2>
                    </div>
                    <div className="minbox">
                        <h2>Wind Direction: {data.wind.deg} deg</h2>
                        <h2>Wind Speed: {data.wind.speed} m/s</h2>
                        <h2>Humidity: {data.main.humidity} %</h2>
                        <h2>Visibility: {visibility} km</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowWeather;