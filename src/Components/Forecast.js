import { WeatherIcon } from "../Media/WeatherIcons";

export const Forecast = (props) => {
    const weather = props.weather;
    console.log(weather);
    function forec() {
        console.log(weather.finalWeather.list);
        return weather.finalWeather.list.map((item, index) => {
            let date = new Date(item.dt * 1000);
            let hours = '0' + date.getHours();
            let minutes = '0' + date.getMinutes();
            let subfore;
            if (index % 2 === 0)
                subfore = 'sub-forecast-even';
            else
                subfore = 'sub-forecast-odd';
            let dorn = 'day';
            if (weather.finalWeather.sys.sunrise <= Date.now() && weather.finalWeather.sys.sunset >= Date.now())
                dorn = 'night';
            else
                dorn = 'day';
            return <div className={subfore} key={item.dt}>
                {hours.substring(hours.length - 2) + ':' + minutes.substring(minutes.length - 2)}
                {/* <WeatherIcon dorn={dorn} weather={item.main} /> */}
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