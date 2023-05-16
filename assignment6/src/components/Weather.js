import React, { useState } from 'react';
import { useQuery } from 'react-query';
import '../css/weather.css';

const city = [
    { id: 1, country: 'Pakistan', cities: ['Islamabad', 'Lahore', 'Karachi', 'Peshawar'] },
    { id: 2, country: 'India', cities: ['Delhi', 'Mumbai', 'Kolkata', 'Patna'] },
    { id: 3, country: 'America', cities: ['Austin', 'Seattle', 'Boston', 'San Francisco'] },
    { id: 4, country: 'Australia', cities: ['Queensland', 'Brisbane', 'Adelaide', 'Tasmania'] },
    { id: 5, country: 'Canada', cities: ['Edmonton', 'Alberta', 'Victoria', 'Fredericton'] },
];

const getWeatherData = (selectedCity) => {
    if (selectedCity) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=2317456e579045b6fdc891fd2e4feb80`;
        return fetch(url)
            .then((res) => res.json())
            .then((data) => data);
    }
};

const Weather = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleCountryChange = (event) => {
        const selectedCountry = event.target.value;
        setSelectedCountry(selectedCountry);
        setSelectedCity('');
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const getCitiesByCountry = (country) => {
        const selectedOption = city.find((option) => option.country === country);
        return selectedOption ? selectedOption.cities : [];
    };

    const weatherQuery = useQuery(['weather', selectedCity], () => getWeatherData(selectedCity));

    return (
        <div>
            <div className="container">
                <div className="user">
                    <div className="userarea">
                        <select name="country" id="selectCountry" value={selectedCountry} onChange={handleCountryChange}>
                            <option value="">-- Select Country --</option>
                            {city.map((option) => (
                                <option key={option.id} value={option.country}>
                                    {option.country}
                                </option>
                            ))}
                        </select>
                        <select name="city" id="selectCity" value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
                            <option value="">-- Select City --</option>
                            {getCitiesByCountry(selectedCountry).map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        <button className="btn" onClick={() => weatherQuery.refetch()} disabled={!selectedCity}>
                            Get Weather
                        </button>
                    </div>
                    <div className="output">
                        {weatherQuery.isLoading ? (
                            <div>Loading...</div>
                        ) : weatherQuery.isError ? (
                            <div>Error loading weather data</div>
                        ) : weatherQuery.isSuccess ? (
                            <div>
                                {weatherQuery.data ? (
                                    <div>
                                        <div className="resu" id="result">
                                            Temperature: {(weatherQuery.data.main.temp - 273.15).toFixed(0)} °C
                                        </div>
                                        <div className="resu" id="humidity">
                                            Humidity: {weatherQuery.data.main.humidity}%
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;

