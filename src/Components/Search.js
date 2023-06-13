import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { SearchIcon } from '../Media/SearchIcon';

export const Search = () => {
    const [search, setSearch] = useState('');
    // const [temps, setTemps] = useState('');
    const [results, setResults] = useState([]);
    const [visible, setVisible] = useState(false);
    const { setWeather } = useContext(AppContext);
    useEffect(() => {
        if (search.length >= 3) {
            const url = '/.netlify/functions/getSuggestions';
            fetch(url, {
                method: "POST",
                body: JSON.stringify({search: search})
            })
            .then(response => response.json())
            .then(result => {
                setResults(() => result.results.map(temp => {
                    let arr = {
                        full_result: temp,
                        address1: temp.address_line1,
                        address2: temp.address_line2,
                        lat: temp.lat, lon: temp.lon,
                        id: temp.place_id
                    };
                    return arr;
                }));
            })
            .catch(error => console.log('error', error));
        }
    }, [search]);

    function suggestions() {
        return results.map((item) => {
            return <div key={item.id}
                className='search-results'
                onClick={() => handleClick(item)}
                // onMouseOver={() => {
                //     setTemps(search);
                //     setSearch(item.address1+' '+item.address2);
                // }}
                // onMouseLeave={setSearch(temps)}
            >
                <div className='search-results-sub'>
                <span className='add1'>{item.address1+', '}</span>
                <span className='add2'>{item.address2}</span>
                </div>
            </div>
        });
    }

    function handleClick(item) {
        const llurl = '/.netlify/functions/getWeather';
        fetch(llurl,{
            method: "POST",
            body: JSON.stringify({lat: item.lat,lon: item.lon})
        })
            .then(response => response.json())
            .then(result => {
                setWeather({ address1: item.address1,
                    address2: item.address2,
                    finalWeather: result });
            })
            .catch(error => console.log('error', error));
        setVisible(false);
        setSearch(item.address1+' '+item.address2);
    }
    return <div className='search'>
        <div className='search-bar'>
            <input className='search-box'
                id='Search'
                type='text'
                placeholder='Enter location'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                autoComplete='off'
                onFocus={() => setVisible(true)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter')
                        handleClick(results[0]);
                }}
            />
            <div onClick={() => handleClick(results[0])}>
                <SearchIcon />
            </div>
        </div>
        <div className='collected-results'>
            {visible && search.length > 2 && suggestions()}
        </div>
    </div>
}