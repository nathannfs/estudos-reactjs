import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

// todo componente do React recebe um único argumento que são as props
export default function Post(props) {
  // outra forma de renderização condicional, que é mais quando quiser uma alteração na estrutura
  // if (props.post.read) {
  //   return <h2>{props.post.title} já foi lido</h2>;
  // }

  return (
    <>
      <article>
        <PostHeader
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Media: {props.post.likes / 2}
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
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
