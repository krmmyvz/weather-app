import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { GeolocationContext } from "./GeolocationContext";
import Loading from "../content/Loading";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { location } = useContext(GeolocationContext);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [dailyWeather, setDailyWeather] = useState([]);
  const [coordinates, setCoordinates] = useState(
    location
      ? { lat: location.latitude, lon: location.longitude }
      : { lat: 41.013, lon: 28.949 }
  );

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
    return <Loading />;
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
