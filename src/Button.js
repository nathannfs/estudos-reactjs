import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <>
      {/* o papel dessa arrow function é executar o onRemove passando o id do nosso post como argumento*/}
      <button onClick={props.onClick}>{props.children}</button>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
