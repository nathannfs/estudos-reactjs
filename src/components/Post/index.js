import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

import { Container, SubTitle, Rate } from "./styles";

// todo componente do React recebe um único argumento que são as props
export default function Post(props) {
  // outra forma de renderização condicional, que é mais quando quiser uma alteração na estrutura
  // if (props.post.read) {
  //   return <h2>{props.post.title} já foi lido</h2>;
  // }

  return (
    <Container removed={props.post.removed}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />

      <SubTitle>{props.post.subtitle}</SubTitle>
      <Rate>Media: {props.post.likes / 2}</Rate>
    </Container>
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
    removed: PropTypes.bool.isRequired,
  }).isRequired,
};
