import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export class ThemeProvider extends React.Component {
  // state = {
  //   // iniciando o tema com o valor salvo no localstorage
  //   theme: JSON.parse(localStorage.getItem('theme')),
  // }

  constructor(props) {
    super(props)

    let theme = 'dark'

    try {
      theme = JSON.parse(localStorage.getItem('theme'))
    } catch (err) {
      console.log(err)
    }

    this.state = {
      theme,
    }
  }
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    // monitorar alterações de state ou prop
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem('theme', JSON.stringify(this.state.theme))
    }
  }

  handleToggleTheme = () => {
    this.setState(
      (prevState) => ({
        theme: prevState.theme === 'dark' ? 'light' : 'dark',
      })
      // podemos passar uma arrow function como callback nas funções em classes
      // () => {
      // salvando no localstorage
      // localStorage.setItem('theme', JSON.stringify(this.state.theme))
      // }
    )
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('dark')

//   function handleToggleTheme() {
//     setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }
