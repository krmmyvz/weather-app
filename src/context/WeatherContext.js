import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: 41.0,
    lon: 28.97,
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentWeatherResponse = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              lat: coordinates.lat,
              lon: coordinates.lon,
              appid: process.env.REACT_APP_API_KEY,
              units: "metric",
            },
          }
        );

        const dailyWeatherResponse = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast",
          {
            params: {
              lat: coordinates.lat,
              lon: coordinates.lon,
              appid: process.env.REACT_APP_API_KEY,
              units: "metric",
            },
          }
        );
        setCurrentWeather(currentWeatherResponse.data);
        setDailyWeather(
          dailyWeatherResponse.data.list.filter((item) =>
            item.dt_txt.includes("12:00:00")
          )
        );

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [coordinates.lat, coordinates.lon]);

  if (isLoading) {
    //TODD
    return <div>Loading...</div>;
  }
  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        dailyWeather,
        setCoordinates,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
