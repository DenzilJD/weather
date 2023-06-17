export const Air = (props) => {
    const air = props.weather.finalWeather.air.list[0].components;
    let aqi, aqiClass;
    if (props.weather.finalWeather.air.list[0].main.aqi === 1) {
        aqi = 'Good';
        aqiClass = 'dark-green';
    }
    else if (props.weather.finalWeather.air.list[0].main.aqi === 2) {
        aqi = 'Fair';
        aqiClass = 'light-green';
    }
    else if (props.weather.finalWeather.air.list[0].main.aqi === 3) {
        aqi = 'Moderate';
        aqiClass = 'yellow';
    }
    else if (props.weather.finalWeather.air.list[0].main.aqi === 4) {
        aqi = 'Poor';
        aqiClass = 'orange';
    }
    else {
        aqi = 'Very Poor';
        aqiClass = 'red';
    }
    return <div className='air'>
        <div className='airq'>Air Quality</div>
        <p className='temp'><span className={aqiClass}>{aqi}</span></p>
        <p><span className='w-features'>NO: </span>{air.no}</p>
        <p><span className='w-features'>CO: </span>{air.co}</p>
        <p><span className='w-features'>NO<sub>2</sub>: </span>{air.no2}</p>
        <p><span className='w-features'>O<sub>3</sub>: </span>{air.o3}</p>
        <p><span className='w-features'>SO<sub>2</sub>: </span>{air.so2}</p>
        <p><span className='w-features'>(pm)<sub>2.5</sub>: </span>{air.pm2_5}</p>
        <p><span className='w-features'>(pm)<sub>10</sub>: </span>{air.pm10}</p>
        <p><span className='w-features'>NH<sub>3</sub>: </span>{air.nh3}</p>
    </div>
}