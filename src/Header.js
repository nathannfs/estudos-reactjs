import React from "react";
import PropTypes from "prop-types";

// podemos aplicar desestruturização
export default function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
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
