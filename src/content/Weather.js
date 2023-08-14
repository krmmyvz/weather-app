import { useContext, useState, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";
import {
  WiCloudy,
  WiDayCloudy,
  WiDaySunny,
  WiDirectionUpRight,
  WiFog,
  WiHumidity,
  WiRainWind,
  WiRain,
  WiShowers,
  WiSnow,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometer,
} from "react-icons/wi";
import Footer from "./Footer";

function Weather() {
  const { currentWeather, dailyWeather } = useContext(WeatherContext);

  const sunrise = currentWeather.sys.sunrise; // Unix timestamp in seconds
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const sunset = currentWeather.sys.sunset; // Unix timestamp in seconds
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const [formattedWeather, setFormattedWeather] = useState([]);
  useEffect(() => {
    // dailyWeather verilerini biçimlendir
    const formattedDates = dailyWeather.map((data) => {
      const date = new Date(data.dt_txt);
      return date.toLocaleString("en-EN", {
        weekday: "short",
        day: "numeric",
        month: "long",
      });
    });
    setFormattedWeather(formattedDates);
  }, [dailyWeather]);

  if (!currentWeather) {
    return null;
  }
  return (
    <div className="content-wrapper">
      <div className="content-section-title">Current Weather</div>

      <div className="app-card">
        <div className="main-info">
          <p className="city">{currentWeather.name}</p>
          {(() => {
            switch (currentWeather.weather[0].description) {
              case "clear sky":
                return <WiDaySunny />;
              case "few clouds":
                return <WiDayCloudy />;
              case "rain":
                return <WiRainWind />;
              case "moderate rain":
                return <WiRain />;
              case "scattered clouds":
                return <WiCloudy />;
              case "broken clouds":
                return <WiCloudy />;
              case "overcast clouds":
                return <WiCloudy />;
              case "light rain":
                return <WiShowers />;
              case "snow":
                return <WiSnow />;
              case "mist":
                return <WiFog />;
              default:
                return "none";
            }
          })()}

          <p className="temp">{currentWeather.main.temp.toFixed(0)}°C</p>
          <p className="description">{currentWeather.weather[0].description}</p>
          <p className="description">
            Day {currentWeather.main.temp_max.toFixed(0)}° • Night{" "}
            {currentWeather.main.temp_min.toFixed(0)}°
          </p>
        </div>
        <div className="detail-info">
          <div className="app-card-mini">
            <p className="mini-header">
              <WiThermometer /> Feels Like
            </p>
            <p className="mini-info">
              {currentWeather.main.feels_like.toFixed(0)}°C
            </p>
          </div>
          <div className="app-card-mini">
            <p className="mini-header">
              <WiHumidity /> Humidiy
            </p>
            <p className="mini-info">{currentWeather.main.humidity}%</p>
          </div>
          <div className="app-card-mini">
            <p className="mini-header">
              <WiStrongWind /> Wind Speed
            </p>
            <p className="mini-info">
              {currentWeather.wind.speed.toFixed(1)} km/h
            </p>
          </div>
          <div className="app-card-mini">
            <p className="mini-header">
              <WiDirectionUpRight /> Pressure
            </p>
            <p className="mini-info">
              {currentWeather.main.pressure.toLocaleString()} hPa
            </p>
          </div>
          <div className="app-card-mini">
            <p className="mini-header">
              <WiSunrise /> Sun Rise
            </p>
            <p className="mini-info">{sunriseTime}</p>
          </div>
          <div className="app-card-mini">
            <p className="mini-header">
              <WiSunset />
              Sun Set
            </p>
            <p className="mini-info">{sunsetTime}</p>
          </div>
        </div>
      </div>

      <div className="content-section-title">5-day Forecast</div>
      <div className="forecast-list">
        {dailyWeather.map((data, index) => (
          <div key={data.dt} className="app-card-forecast">
            <div className="card-info">
              <p className="card-date">{formattedWeather[index]}</p>
              {(() => {
                switch (data.weather[0].description) {
                  case "clear sky":
                    return <WiDaySunny />;
                  case "few clouds":
                    return <WiDayCloudy />;
                  case "rain":
                    return <WiRainWind />;
                  case "moderate rain":
                    return <WiRain />;
                  case "scattered clouds":
                    return <WiCloudy />;
                  case "broken clouds":
                    return <WiCloudy />;
                  case "overcast clouds":
                    return <WiCloudy />;
                  case "light rain":
                    return <WiShowers />;
                  case "snow":
                    return <WiSnow />;
                  case "mist":
                    return <WiFog />;
                  default:
                    return "none";
                }
              })()}
              <p className="card-weather">{data.main.temp.toFixed(0)}°C</p>
              <p className="card-desc">{data.weather[0].description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Weather;
