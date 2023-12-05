import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'

import { Container } from './styles'

export default function Footer() {
  // useContext - para consumir a Context em componente funcional utilizamos ele deste jeito
  // pode-se utilizar do mesmo jeito que utiliza com classes, porém não precisa
  const { theme, handleToggleTheme } = useContext(ThemeContext)

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type='button' onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌑'}
      </button>
    </Container>
  )
}
