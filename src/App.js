import { useContext } from "react";
import "./App.css";
import Container from "./content/Container";
import { WeatherContext } from "./context/WeatherContext";

import clearsky from "./assets/clearsky.jpg";
import rain from "./assets/rain.jpg";
import fewclouds from "./assets/fewclouds.jpg";
import scattered from "./assets/scatteredclouds.jpg";
import broken from "./assets/brokenclouds.jpg";
import overcast from "./assets/overcastclouds.jpg";
import lightrain from "./assets/lightrain.jpg";
import snow from "./assets/snow.jpg";
import mist from "./assets/mist.jpg";

function App() {
  const { currentWeather } = useContext(WeatherContext);
  let backgroundImageUrl = "";
  console.log(currentWeather.weather[0].description);

  if (currentWeather && currentWeather.weather) {
    switch (currentWeather.weather[0].description) {
      case "clear sky":
        backgroundImageUrl = `url(${clearsky})`;
        break;
      case "few clouds":
        backgroundImageUrl = `url(${fewclouds})`;
        break;
      case "rain":
        backgroundImageUrl = `url(${rain})`;
        break;
      case "scattered clouds":
        backgroundImageUrl = `url(${scattered})`;
        break;
      case "broken clouds":
        backgroundImageUrl = `url(${broken})`;
        break;
      case "overcast clouds":
        backgroundImageUrl = `url(${overcast})`;
        break;
      case "light rain":
        backgroundImageUrl = `url(${lightrain})`;
        break;

      case "snow":
        backgroundImageUrl = `url(${snow})`;
        break;
      case "mist":
        backgroundImageUrl = `url(${mist})`;
        break;
      default:
        backgroundImageUrl = "none";
    }
  } else {
    // If currentWeather is null or undefined, use default background color
    backgroundImageUrl = "none";
  }

  return (
    <div className="app" style={{ backgroundImage: backgroundImageUrl }}>
      <Container></Container>;
    </div>
  );
}

export default App;
