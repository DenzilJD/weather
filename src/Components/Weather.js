import { WeatherIcon } from "../Media/WeatherIcons";

export const Weather = (props) => {
    const weather = props.weather;
    let dorn = 'day';
    if (weather.finalWeather.sys.sunrise <= Date.now() && weather.finalWeather.sys.sunset >= Date.now()) {
        dorn = 'night';
    }
    else {
        dorn = 'day';
    }
    return <div className='weather'>
        <div className='weather-and-icon'>
            <div className='add'>
                <h1 className='add1'>{weather ? weather.address1 : ''}</h1>
                <h1 className='add2'>{weather ? weather.address2 : ''}</h1>
            </div>
            <WeatherIcon dorn={dorn} weather={weather.finalWeather.weather[0].main} />
        </div>
        <h3 className='temp'>{`${Math.round(weather.finalWeather.main.temp - 273.15)}°C`}</h3>
        <div className='sec-weather'>
            <p><span className='w-features'>Humidity:</span> {weather.finalWeather.main.humidity}%</p>
            <p><span className='w-features'>Pressure:</span> {weather.finalWeather.main.pressure}hPa</p>
        </div>
        <p><span className='w-features'>Wind Speed:</span> {weather.finalWeather.wind.speed}m/s</p>
    </div>
}