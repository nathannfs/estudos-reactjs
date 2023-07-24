import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

// podemos aplicar desestruturização
export default function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <Button theme={props.theme} onClick={props.onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,

  onToggleTheme: PropTypes.func.isRequired,

  title: PropTypes.string,

  // isso quer dizer que pode ser qualquer elemento
  children: PropTypes.node,
};

// definindo as props default
Header.defaultProps = {
  title: `JStack's Blog`,
};
