import { WeatherIcon } from "../Media/WeatherIcons";

export const Forecast = (props) => {
    const weather = props.weather;
    console.log(weather);
    function forec() {
        console.log(weather.finalWeather.list);
        const timezone=weather.finalWeather.city.timezone;
        return weather.finalWeather.list.map((item, index) => {
            let date = new Date((item.dt+timezone) * 1000).toUTCString();
            console.log(date);
            let subfore;
            if (index % 2 === 0)
                subfore = 'sub-forecast-even';
            else
                subfore = 'sub-forecast-odd';
            let dorn = 'day';
            if (weather.finalWeather.sys.sunrise <= item.dt && weather.finalWeather.sys.sunset >= item.dt)
                dorn = 'day';
            else
                dorn = 'night';
            return <div className={subfore} key={item.dt}>
                {date.substring(date.length-12, date.length-7)}
                <WeatherIcon dorn={dorn} weather={item.weather[0].main} />
                <h3 className='fore'>{`${Math.round(item.main.temp - 273.15)}°C`}</h3>
            </div>
        }).slice(0, 8);
    }
    return <div className='forecast'>
        <div className='fore'>Forecast</div>
        <div className='sub-forecast'>
            {forec()}
        </div>
    </div>
}