import React, { useEffect } from 'react'
// import { useTheme } from 'styled-components';

import { BrowserRouter, Link } from 'react-router-dom'

// import PostsList from '../PostsList'
import Header from '../Header'
import Footer from '../Footer'

import Routes from '../../Routes'

import { Nav } from './styles'

export default class Layout extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Nav>
          <Link to='/'>Home</Link>
          <Link to='/posts'>Posts</Link>
        </Nav>

        <Routes />
        {/* <PostsList /> */}
        <Footer />
      </BrowserRouter>
    )
  }
}

// export default function Layout() {
// no useTheme, usa o useContext, já passando o contexto dentro dela
// const theme = useTheme();

// Função de efeito - vai ser executada durante o ciclo de vida do componente, toda vez que ele for renderizado
// Mount - Montar um componente é renderizar em tela
// É o melhor lugar para fazer requisições, faz com que alguma requisição seja feito quando o componente for montado
// useEffect(() => {
//   console.debug({ selectedTheme })

//   // controlar se o componente ta renderizado na tela ou não
//   return () => {
//     console.debug('Layout saiu da tela')
//   }
// }, [selectedTheme])
// quando o array está vazio, essa função só é executada na primeira vez que for montada
// quando tiver um valor, toda que vez que for executada vai ter uma alteração

// useEffect(() => {
//   function handleScroll() {
//     console.debug('scrollow')
//   }
//   document.addEventListener('scroll', handleScroll)

//   return () => document.removeEventListener('scroll', handleScroll)
// }, [])

//   return (
//     <>
//       <Header />
//       <PostsList />
//       <Footer />
//     </>
//   )
// }
