import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Header from "./Header";
import Weather from "./Weather";

function Container() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme === "dark" ? "" : "light-mode"}`}>
      <Header />
      <Weather />
    </div>
  );
}

export default Container;
