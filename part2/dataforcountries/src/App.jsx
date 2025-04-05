import React from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [filteredCountries, setFilteredCountries] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      });
  }, []);
  React.useEffect(() => {
    const filtered = countries.filter((country) => {
      let name = country.name.common.toLowerCase();
      return name.includes(value.toLowerCase());
    });
    setFilteredCountries(filtered);
  }, [value]);
  return (
    <>
      find countries{" "}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      {filteredCountries.length !== 1 ? (
        filteredCountries.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          filteredCountries.map((country) => {
            return <p key={country.name.common}> {country.name.common} </p>;
          })
        )
      ) : (
        <>
          <h1> {filteredCountries[0].name.common} </h1>
          Capital {filteredCountries[0].capital} <br />
          {/*capital is an array , maybe some countries have more than one capital*/}
          Area {filteredCountries[0].area}
          <h2>Languages</h2>
          <ul>
            {/*    languages is an object    */}
            {Object.values(filteredCountries[0].languages).map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
          <img
            src={filteredCountries[0].flags.png}
            alt={filteredCountries[0].flags.alt}
          />
        </>
      )}
    </>
  );
};

export default App;
