import React from "react";
import ThemeProvider from "./ThemeContext";
import ThemedApp from "./ThemedApp";

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
