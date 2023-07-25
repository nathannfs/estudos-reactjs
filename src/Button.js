import React, { useContext } from "react";
import PropTypes from "prop-types";

// importamos o contexto
import { ThemeContext } from "./ThemeContext";

export default function Button(props) {
  // usamos useContext() para usarmos a Context que criamos - precisamos passar dentro dos parênteses o contexto que queremos consumir
  const { theme } = useContext(ThemeContext);

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
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
