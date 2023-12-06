import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Posts from './pages/Posts'

export default function Routes() {
  return (
    // o Route precisa estar dentro de um componente Router ou suas variações
    // <BrowserRouter>
    // <HashRouter>
    // <MemoryRouter>
    // <NativeRouter>
    // <StaticRouter>
    <>
      {/* cada um desses componentes do Route, representa uma rota
     path - caminho da rota
     component - o que vai ser renderizado nesta rota 
    exact - faz com que a rota funcione só se tiver exatamanete o mesmo path
     */}
      <Route exact path='/' component={Home} />
      <Route path='/posts' component={Posts} />
    </>
  )
}
