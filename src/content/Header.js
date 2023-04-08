import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { SearchContext } from "../context/SearchContext";
import { WeatherContext } from "../context/WeatherContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { searchJsonData } = useContext(SearchContext);
  const { setCoordinates } = useContext(WeatherContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("search term: " + searchTerm);
      const searchResults = searchJsonData(searchTerm);
      console.log(searchResults);

      if (searchResults.length > 0) {
        const { lat, lon } = searchResults[0];
        console.log({ lat, lon });
        setCoordinates({ lat, lon });
      }
    }
  };
  return (
    <div className={`header ${theme}`}>
      <div className="logo">Weather App</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="mode-container">
        <div
          className="dark-light"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
