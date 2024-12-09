import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeDisplay = () => {
  const { theme } = useContext(ThemeContext);

  return <h2>The current theme is: {theme}</h2>;
};

export default ThemeDisplay;
