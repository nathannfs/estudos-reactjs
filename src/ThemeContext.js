import React, { useState, createContext } from "react";

// criamos a Context API fora do componente que seria o contexto - dentro dos parênteses passamos o valor inicial dele que pode ser qualquer tipo de dado
export const ThemeContext = createContext("dark");

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    // envolvemos todos os componentes que vamos usar com este componente da Context API
    <ThemeContext.Provider
      // dados que vamos poder acessar nos componentes
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
