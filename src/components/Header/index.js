import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export default class Header extends Component {
  // podemos tipar deste jeito também nas classes
  // ele precisa ser estático, não pertecendo mais a instância da classe, quando ela é estática ela pertence a classe em si e não a instância dela
  static propTypes = {
    selectedTheme: PropTypes.string.isRequired,
    onToggleTheme: PropTypes.func.isRequired,
  }

  render() {
    // nas classes as props ficam dentro do objeto this e propriedade props
    // assim usamos props dentro de uma classe
    const { onToggleTheme, selectedTheme } = this.props

    return (
      <Container>
        <h1>JStack's Blog</h1>{' '}
        <button type='button' onClick={onToggleTheme}>
          {selectedTheme === 'dark' ? '🌞' : '🌑'}{' '}
        </button>{' '}
      </Container>
    )
  }
}

// tipando as props
// Header.propTypes = {
//   selectedTheme: PropTypes.string.isRequired,
//   onToggleTheme: PropTypes.func.isRequired,
// }
