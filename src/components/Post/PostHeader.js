import React from "react";
import PropTypes from "prop-types";
import Post from "./";
import Button from "../Button";

export default function PostHeader(props) {
  return (
    <>
      {/* usamos props.(o nome da propriedade) */}
      <strong>
        {/* Renderização condicional - se nossa propriedade atender uma condição ela renderiza de um jeito, se não ela renderiza de outro jeito */}
        {/* {props.post.read ? <s>{props.post.title}</s> : props.post.title} */}
        {/* ---------------------------------------------------------------- */}
        {/* short circuit evaluation (&&) 
    a terceira forma de fazer renderização condicional
    se o valor que está na esquerda do && for true então ele retorna o que está na direita */}
        {props.post.read && <s>{props.post.title}</s>}
        {!props.post.read && props.post.title}
      </strong>
      <Button onClick={() => props.onRemove(props.post.id)}>Remover</Button>
    </>
  );
}

// tipando as props
Post.propTypes = {
  // isRequired quer dizer que é obrigatória
  likes: PropTypes.number.isRequired,

  // com .shape() estou dizendo que ela é um objeto
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
