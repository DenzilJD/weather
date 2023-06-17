import { BrowserRouter } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import { Search } from './Components/Search';
import { Weather } from './Components/Weather';
import { Forecast } from './Components/Forecast';
import { Air } from './Components/Air';
import { Toggle } from './Components/Toggle';

export const AppContext = createContext(null);
function App() {
  const [weather, setWeather] = useState();
  useEffect(() => {
    const llurl = '/.netlify/functions/getWeather';
    fetch(llurl, {
      method: "POST",
      body: JSON.stringify({
        lat: 28.6273928,
        lon: 77.1716954
      })
    })
      .then(response => response.json())
      .then(result => {
        setWeather({
          address1: 'New Delhi',
          address2: 'DL, India',
          finalWeather: result
        });
      })
      .catch(error => console.log('error', error));
  }, []);
  return (
    <AppContext.Provider value={{ setWeather }}>
      <div className='App'>
        <BrowserRouter>
          <div className='search-settings'>
            <Toggle />
            <Search />
          </div>
          <div className='weather-collection'>
            {weather ? <Weather weather={weather} /> : ''}
            {weather ? <Air weather={weather} /> : ''}
          </div>
          {weather ? <Forecast weather={weather} /> : ''}
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;