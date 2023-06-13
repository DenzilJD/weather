export const Weather = (props) => {
    const weather = props.weather;
    return <div className='weather'>
        <div className='weather-and-icons'>
            <div>
            <h1 className='add1'>{weather ? weather.address1 : ''}</h1>
            <h1 className='add2'>{weather ? weather.address2 : ''}</h1>
            </div>
            <div></div>
        </div>
        <br />
        <h3 className='temp'>{`${Math.round(weather.finalWeather.main.temp - 273.15)}°C`}</h3>
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