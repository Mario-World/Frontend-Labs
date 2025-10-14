// App.jsx
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Fetch all countries on initial render
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
         "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
        );
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter((country) =>
        country.common.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  return (
    <div className="app">
      <h1>Country Flags</h1>
      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={handleSearch}
      />

      <div className="countriesGrid">
        {filteredCountries.map((country) => (
          <div key={country.common} className="countryCard">
            <img src={country.png} alt={`${country.common} flag`} />
            <p>{country.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
