import React from 'react'

import { Container } from './styles'
import Post from './Post'

import posts from './posts'

// todo componente de classe precisa estender algo que está dentro do React.Component
export default class Posts extends React.Component {
  // obrigatório usar render, ele serve para renderizar o componente
  render() {
    return (
      <Container>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Container>
    )
  }
}
