import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  const theme = props.theme;

  return (
    <>
      {/* o papel dessa arrow function é executar o onRemove passando o id do nosso post como argumento*/}
      <button
        onClick={props.onClick}
        // estilos inline precisamos passar como objetos
        style={{
          color: theme === "dark" ? "#fff" : "#000",
          background: theme === "dark" ? "#000" : "#fff",
        }}
      >
        {props.children}
      </button>
    </>
  );
}

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
