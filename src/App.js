import { useState } from "react";
import ShowWeather from "./components/ShowWeather";

function App() {

  const WeatherKey = "814f3660d491c471868d077c4cd50d46";

  const [input, setInput] = useState({
    city: "",
    country: ""
  });

  const [fetchData, setFetchData] = useState({});

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setInput({ ...input, city: value })
    }
    if (name === "country") {
      setInput({ ...input, country: value })
    }
  }

  async function WeatherData(e) {
    e.preventDefault();
    if (input.city === "") {
      alert("Please type city");
    }
    else if (input.country === "") {
      alert("Please type country");
    }
    else {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.city},${input.country}&appid=${WeatherKey}`)
        .then((res) => res.json())
        .then((data) => setFetchData(data));
    }
  }

  return (
    <div className="App">
      <div className="title">Weather Display</div>
      <div className="enter">
        <div className="city box">
          <input type="text" name="city" placeholder="City" onChange={(e) => handleChange(e)} />
        </div>
        <div className="country box">
          <input type="text" name="country" placeholder="Country" onChange={(e) => handleChange(e)} />
        </div>
        <button className="box" onClick={(e) => WeatherData(e)}>Search</button>
      </div>
      <ShowWeather value={fetchData} />
    </div>
  );
}

export default App;
