import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import Layout from './components/Layout'
import themes from './styles/themes'

class App extends React.Component {
  // duas formas de criar estados na classe
  // constructor - é executado assim que a classe é instânciada
  // recebe as nossas props
  // constructor(props) {
  // primeiro temos que executar o método construtor da classe que estamos herdando com o super()
  // sempre passar as props pra dentro do super
  // super(props)

  // this.state - para criar state utilizamos isso, pois o useState não funciona em classe
  // nele colocamos todos os estados que queremos ter dentro do componente

  // 1º forma
  // this.state = {
  //   theme: 'dark',
  //   hi: true,
  // }

  // o this.setState fará basicamente isso quando for executada
  // function setState(newState) {
  //   this.state = {
  //     ...currentState,
  //     ...newState,
  //   }
  // }

  // bind - retorna uma nova função que tem sua chave this conforme o que passamos dentro dela
  //   this.handleToggleTheme = this.handleToggleTheme.bind(this)
  // }

  // 2º forma
  state = {
    theme: 'dark',
    hi: true,
  }

  // criando métodos dentro de uma classe

  // em vez de criar uma função e precisar usar binding para pegar o this da classe, podemos criar a função como uma arrow function, pois deste jeito a arrow function vai herdar o this da onde ela está sendo criada
  handleToggleTheme = () => {
    // existe uma função dentro do React.Component que força a renderização dele em tela, sem ter alteração nas props ou states
    // this.forceUpdate()

    // estamos setando um estado, ele faz um merge com o this.state que estamos passando anteriormente
    this.setState((prevState) => ({
      // para pegar os valor existentes que estão no this.state utilizamos prevState também
      // acessamos a propriedade que pegamos
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }))
  }

  render() {
    const { theme } = this.state

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={this.handleToggleTheme}
          selectedTheme={theme}
        />{' '}
      </ThemeProvider>
    )
  }
}

export default App

// function App() {
//   // userRef - manter valores salvos entre as renderizações
//   const firstRender = useRef(true)

//   const [theme, setTheme] = useState('dark')
//   // useMemo - hook para armazenar valores
//   // array de dependências são as variáveis que ele vai ficar monitorando
//   // retorna o que a currentTheme vai receber
//   const currentTheme = useMemo(() => {
//     // colchetes para acessar valores
//     return themes[theme] || themes.dark
//   }, [theme])

//   function handleToggleTheme() {
//     setTheme((prevState) => (prevState == 'dark' ? 'light' : 'dark'))
//   }

//   // é executado de forma síncrona antes do usuário ver as alterações em tela
//   useEffect(() => {
//     // prevenir que o useEffect não execute na primeira vez que o componente é montado em tela
//     if (firstRender.current) {
//       firstRender.current = false
//       return
//     }

//     console.debug({ theme })
//   }, [theme])

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
//     </ThemeProvider>
//   )
// }
