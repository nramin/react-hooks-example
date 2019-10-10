import React, {useState, useEffect} from 'react';
import './App.css';

export default function App() {
  useEffect(() => {
    document.getElementById("city-name-input").focus();
  });

  const [cityName, setCityName] = useState("");
  const [cities, setCities] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    addCity(cityName);
    setCityName("");
  }

  const addCity = city => {
    const newCities = [...cities, {city}];
    setCities(newCities);
  }

  const CityListing = ({city}) => <div className="city-listing">{city.city}</div>

  return (
    <div className="App">
      <header className="App-header">
        {cities.map((city, index) => (
          <CityListing key={index} city={city} />
        ))}

        <form onSubmit={handleSubmit}>
          <input 
            id="city-name-input"
            type="text" 
            value={cityName} 
            onChange={e => setCityName(e.target.value)}
          />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}
