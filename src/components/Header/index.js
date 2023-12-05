import React, { Component } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'

// import PropTypes from 'prop-types'

import { Container } from './styles'

function HOC(ComponentHeader) {
  return class Component extends React.Component {
    render() {
      return (
        // Render Props
        // em classe como não pode-se utilizar hooks, então para consumir a Context, utilizamos deste jeito, passando a Context por fora como um componente pai e colocando uma arrow function dentro dele, onde recebe como argumento os valores da Context e dentro da função fica o que vai ser renderizado
        <ThemeContext.Consumer>
          {(value) => <ComponentHeader {...value} />}
        </ThemeContext.Consumer>
      )
    }
  }
}

class Header extends Component {
  // podemos tipar deste jeito também nas classes
  // ele precisa ser estático, não pertecendo mais a instância da classe, quando ela é estática ela pertence a classe em si e não a instância dela
  // static propTypes = {
  //   selectedTheme: PropTypes.string.isRequired,
  //   onToggleTheme: PropTypes.func.isRequired,
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.theme !== prevProps.theme) {
      console.log('tema mudou ...')
    }
  }

  render() {
    // nas classes as props ficam dentro do objeto this e propriedade props
    // assim usamos props dentro de uma classe
    // const { onToggleTheme, selectedTheme } = this.props

    return (
      <Container>
        <h1>JStack's Blog</h1>{' '}
        <button type='button' onClick={this.props.handleToggleTheme}>
          {this.props.theme === 'dark' ? '🌞' : '🌑'}{' '}
        </button>{' '}
      </Container>
    )
  }
}

export default HOC(Header)

// tipando as props
// Header.propTypes = {
//   selectedTheme: PropTypes.string.isRequired,
//   onToggleTheme: PropTypes.func.isRequired,
// }
