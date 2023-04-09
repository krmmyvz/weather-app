import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { SearchContext } from "../context/SearchContext";
import { WeatherContext } from "../context/WeatherContext";
import {
  MdOutlineDarkMode,
  MdOutlineSearch,
  MdLocationOn,
} from "react-icons/md";

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
        <MdOutlineSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
      <div className="mode-container">
        <div className="dark-light">
          <MdLocationOn />
        </div>
        <div
          className="dark-light"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <MdOutlineDarkMode />
        </div>
      </div>
    </div>
  );
}

export default Header;
