import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchJsonData = (searchTerm) => {
    const filteredData = require("../city.list.json").filter(
      (city) => city.name.toLowerCase() === searchTerm.toLowerCase()
    );
    const results = filteredData.map((city) => {
      const { name, coord } = city;
      return { name, lat: coord.lat, lon: coord.lon };
    });
    return results;
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        handleSearchTermChange,
        searchJsonData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
