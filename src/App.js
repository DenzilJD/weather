import { BrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Search } from './Components/Search';
import { SecWeather, Weather } from './Components/Weather';
import { Toggle } from './Components/Toggle';

export const AppContext = createContext(null);
function App() {
  const [weather, setWeather] = useState();
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
            {weather ? <SecWeather weather={weather} /> : ''}
          </div>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;