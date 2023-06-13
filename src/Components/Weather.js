import { WeatherIcon } from "../Media/WeatherIcons";

export const Weather = (props) => {
    const weather = props.weather;
    let dorn;
    if (weather.finalWeather.sys.sunrise <= Date.now() && weather.finalWeather.sys.sunset >= Date.now()) {
        dorn = 'night';
    }
    else {
        dorn = 'day';
    }
    return <div className='weather'>
        <div>
            <h1 className='add1'>{weather ? weather.address1 : ''}</h1>
            <h1 className='add2'>{weather ? weather.address2 : ''}</h1>
            <br />
            <h3 className='temp'>{`${Math.round(weather.finalWeather.main.temp - 273.15)}°C`}</h3>
        </div>
        <WeatherIcon dorn={dorn}/>
    </div>
}

export const SecWeather = (props) => {
    const weather = props.weather;
    console.log(weather);
    return <div className='sec-weather weather'>
        <h3>{`Humidity: ${weather.finalWeather.main.humidity}%`}</h3>
        <h3>{`Pressure: ${weather.finalWeather.main.pressure}`}hPa</h3>
        <h3>{`Wind Speed: ${weather.finalWeather.wind.speed}`}</h3>
    </div>
}