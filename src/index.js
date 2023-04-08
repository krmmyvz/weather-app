import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import { WeatherProvider } from "./context/WeatherContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SearchProvider>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>
);
