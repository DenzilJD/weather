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
            <WeatherIcon dorn={dorn} />
        </div>
        <h3 className='temp'>{`${Math.round(weather.finalWeather.main.temp - 273.15)}°C`}</h3>
        <div className='sec-weather'>
            <p>Humidity: {weather.finalWeather.main.humidity}%</p>
            <p>Pressure: {weather.finalWeather.main.pressure}hPa</p>
            <p>Wind Speed: {weather.finalWeather.wind.speed}m/s</p>
        </div>
    </div>
}

export const Forecast = (props) => {
    const weather = props.weather;
    return <div className='forecast'>
        {weather.finalWeather.list.map(item => {
            return <div key={item.id}>{item.dt}</div>
        })}
    </div>
}