export const WeatherIcon = (props) => {
    let text = props.weather;
    let text1 = text.toLowerCase();
    //Cloudy Day
    if (props.dorn === 'day' && text1.search('cloud') !== -1)
        return <div className='icon'>
            <svg className='weather-icon'
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 64 64">
                <defs>
                    <filter id="blur" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="0" dy="4" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.05" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#blur)" id="cloudy-day-3">
                    <g transform="translate(20,10)">
                        <g transform="translate(0,16)">
                            <g className="am-weather-sun">
                                <g>
                                    <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                                </g>
                                <g transform="rotate(45)">
                                    <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                                </g>
                                <g transform="rotate(90)">
                                    <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                                </g>
                                <g transform="rotate(135)">
                                    <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                                </g>
                                <g transform="rotate(180)">
                                    <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                                </g>
                                <g transform="rotate(225)">
                                    <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                                </g>
                                <g transform="rotate(270)">
                                    <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                                </g>
                                <g transform="rotate(315)">
                                    <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                                </g>
                            </g>
                            <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                        </g>
                        <g className="am-weather-cloud-2">
                            <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                        </g>
                    </g>
                </g>
            </svg>
            {text}
        </div>


    //Cloudy Night
    else if (props.dorn === 'night' && text1.search('cloud') !== -1)
        return <div className='icon'>
            <svg className='weather-icon'
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64">
                <defs>
                    <filter id="blur" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="0" dy="4" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.05" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#blur)" id="cloudy-night-3">
                    <g transform="translate(20,10)">
                        <g transform="translate(16,4), scale(0.8)">
                            <g className="am-weather-moon-star-1">
                                <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" />
                            </g>
                            <g className="am-weather-moon-star-2">
                                <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)" />
                            </g>
                            <g className="am-weather-moon">
                                <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                        </g>
                        <g className="am-weather-cloud-2">
                            <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                        </g>
                    </g>
                </g>
            </svg>
            {text}
        </div>

    //Rainy
    else if (text1.search('rain') !== -1)
        return <div className='icon'>
            <svg className='weather-icon'
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64">
                <defs>
                    <filter id="blur" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="0" dy="4" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.05" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#blur)" id="rainy-7">
                    <g transform="translate(20,10)">
                        <g>
                            <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                        </g>
                    </g>
                    <g transform="translate(31,46), rotate(10)">
                        <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(-5,1)" x1="0" x2="0" y1="0" y2="8" />
                        <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
                        <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" strokeLinecap="round" strokeWidth="3" transform="translate(5,0)" x1="0" x2="0" y1="0" y2="8" />
                    </g>
                </g>
            </svg>
            {text}
        </div>


    //Snow
    else if (text1.search('snow') !== -1)
        return <div className='icon'>
            <svg className='weather-icon'
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64">
                <defs>
                    <filter id="blur" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="0" dy="4" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.05" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#blur)" id="snowy-6">
                    <g transform="translate(20,10)">
                        <g className="am-weather-cloud-2">
                            <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.2" transform="translate(-20,-11)" />
                        </g>
                        <g className="am-weather-snow-1">
                            <g transform="translate(3,28)">
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                            </g>
                        </g>
                        <g className="am-weather-snow-2">
                            <g transform="translate(11,28)">
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                            </g>
                        </g>
                        <g className="am-weather-snow-3">
                            <g transform="translate(20,28)">
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                                <line fill="none" stroke="#57A0EE" strokeLinecap="round" strokeWidth="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            {text}
        </div>
    //Day
    else if (props.dorn === 'day' && text1.search('clear') !== -1)
        return <div className='icon'>
            <svg className='weather-icon'
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64">
                <defs>
                    <filter id="blur" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="0" dy="4" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.05" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#blur)" id="day">
                    <g transform="translate(32,32)">
                        <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
                            <g>
                                <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                            </g>
                            <g transform="rotate(45)">
                                <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                            </g>
                            <g transform="rotate(90)">
                                <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                            </g>
                            <g transform="rotate(135)">
                                <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                            </g>
                            <g transform="rotate(180)">
                                <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                            </g>
                            <g transform="rotate(225)">
                                <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                            </g>
                            <g transform="rotate(270)">
                                <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                            </g>
                            <g transform="rotate(315)">
                                <line fill="none" stroke="orange" strokeLinecap="round" strokeWidth="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                            </g>
                        </g>
                        <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" strokeWidth="2" />
                    </g>
                </g>
            </svg>
            {text}
        </div>


    //Night
    else if (props.dorn === 'night' && text1.search('clear') !== -1)
        return <div className='icon'>
            <svg className='weather-icon'
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64">
                <defs>
                    <filter id="blur" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="0" dy="4" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.05" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#blur)" id="night">
                    <g transform="translate(20,20)">
                        <g className="am-weather-moon-star-1">
                            <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" />
                        </g>
                        <g className="am-weather-moon-star-2">
                            <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)" />
                        </g>
                        <g className="am-weather-moon">
                            <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                    </g>
                </g>
            </svg>
            {text}
        </div>
    //Dust
    else
        return <div className='icon'>
            <svg
                width="64"
                height="64"
                viewBox="0 0 1024 1024"
                className="weather-icon"
            >
                <path
                    d="M71.68 800.47104m46.34624 0l787.94752 0q46.34624 0 46.34624 46.34624l0 0.01024q0 46.34624-46.34624 46.34624l-787.94752 0q-46.34624 0-46.34624-46.34624l0-0.01024q0-46.34624 46.34624-46.34624Z"
                    fill="#EE921C"
                />
                <path
                    d="M266.35264 633.63072m46.34624 0l556.19584 0q46.34624 0 46.34624 46.34624l0 0.01024q0 46.34624-46.34624 46.34624l-556.19584 0q-46.34624 0-46.34624-46.34624l0-0.01024q0-46.34624 46.34624-46.34624Z"
                    fill="#EE921C"
                />
                <path
                    d="M173.64992 466.7904m46.34624 0l556.19584 0q46.34624 0 46.34624 46.34624l0 0.01024q0 46.34624-46.34624 46.34624l-556.19584 0q-46.34624 0-46.34624-46.34624l0-0.01024q0-46.34624 46.34624-46.34624Z"
                    fill="#EE921C"
                    opacity="0.5"
                />
                <path
                    d="M349.77792 299.96032m46.34624 0l444.95872 0q46.34624 0 46.34624 46.34624l0 0.01024q0 46.34624-46.34624 46.34624l-444.95872 0q-46.34624 0-46.34624-46.34624l0-0.01024q0-46.34624 46.34624-46.34624Z"
                    fill="#EE921C"
                    opacity="0.5"
                />
                <path
                    d="M507.36128 133.12m46.34624 0l259.56352 0q46.34624 0 46.34624 46.34624l0 0.01024q0 46.34624-46.34624 46.34624l-259.56352 0q-46.34624 0-46.34624-46.34624l0-0.01024q0-46.34624 46.34624-46.34624Z"
                    fill="#EE921C"
                />
            </svg>
            {text}
        </div>
}