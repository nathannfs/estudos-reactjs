import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import { ThemeContext } from "./ThemeContext";

// podemos aplicar desestruturização
export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div
      // dentro de style toda vez que tiver '-' escrevemos em formato camel case
      style={{
        background: "#ccc",
        fontFamily: "sans-serif",
        // com números podemos passar sem as aspas
        marginBottom: 24,
      }}
    >
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,

  // isso quer dizer que pode ser qualquer elemento
  children: PropTypes.node,
};

// definindo as props default
Header.defaultProps = {
  title: `JStack's Blog`,
};
