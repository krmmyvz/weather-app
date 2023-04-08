import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Weather() {
  const { currentWeather, dailyWeather } = useContext(WeatherContext);

  if (!currentWeather) {
    return null;
  }

  return (
    <div className="content-wrapper">
      <div className="content-section-title">Current Weather</div>
      <div className="app-card">
        <div className="card-info">
          <p className="city">{currentWeather.name}</p>
          <p className="temp">{currentWeather.main.temp.toFixed(0)}°C</p>
          <p className="description">{currentWeather.weather[0].description}</p>
        </div>
      </div>
      <div className="content-section-title">5-day Forecast</div>
      <div className="forecast-list">
        {dailyWeather.map((data) => (
          <div className="app-card-forecast">
            <div className="card-info">
              <p className="">{data.dt_txt}</p>
              <p className="">{data.main.temp.toFixed(0)}°C</p>
              <p className="">{data.weather[0].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
