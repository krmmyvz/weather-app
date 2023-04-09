import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import { WeatherProvider } from "./context/WeatherContext";
import { GeolocationProvider } from "./context/GeolocationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeolocationProvider>
      <ThemeProvider>
        <SearchProvider>
          <WeatherProvider>
            <App />
          </WeatherProvider>
        </SearchProvider>
      </ThemeProvider>
    </GeolocationProvider>
  </React.StrictMode>
);
