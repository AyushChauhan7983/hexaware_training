import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import ThemeDisplay from "./ThemeDisplay";
import "./App.css";

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <h1>Context API Example with Themes</h1>
      <ThemeDisplay />
      <ThemeSwitcher />
    </div>
  );
};

export default ThemedApp;
