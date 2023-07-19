import React from "react";
import PropTypes from "prop-types";

// todo componente do React recebe um único argumento que são as props
export default function Post(props) {
  return (
    <>
      <article>
        {/* usamos props.(o nome da propriedade) */}
        <strong>{props.post.title}</strong>
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Media: {props.likes / 2}
      </article>
      <br />
    </>
  );
}

// tipando as props
Post.propTypes = {
  // isRequired quer dizer que é obrigatória
  likes: PropTypes.number.isRequired,

  // com .shape() estou dizendo que ela é um objeto
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};
