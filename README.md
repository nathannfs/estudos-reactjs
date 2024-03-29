# Library x Framework

## Library - conjunto de funcionalidades focadas em resolver um tipo de problema

date-fns - manipulação de datas
axios - cliente http

## Framework - também são conjuntos de funcionalidades mas resolvem vários tipos de problemas

Angular
Vue.js

### ReactJS - é uma biblioteca para contrução de interfaces (UI's), ele é multiplatafroma

### ReactDOM - para aplicações web

### React Native - para apps mobile

### React Native Windows - para apps windows

### SPA - Single Page Application - são aplicações que navegamos e a página não atualiza

## Conceitos do ReactJS

### Componentes - eles são isolados, são pequenas peças que quando juntamos, se tornam algo maior, o nome de todo componente precisa começar com a letra maiúscula

### JSX - escrever código html dentro de JavaScript

# Temos duas formas de criar componentes

## Primeira

```
import React from 'react';

function App(){
  return <h1>Componente Funcional</h1>;
}
```

## Segunda

nesse caso sempre precisamos ter o método render

```
import React from 'react';

class App extends React.Component{
  render(){
    return <h1>Componente de Classe</h1>
  }
}
```

### O React não consegue rodar no navegador sozinho, então usaremos o Babel, ele basicamente pega o código e transforma para que o navegador consiga entender.

### Além disso usaremos o webpack, ele que dá o poder de conseguir importar arquivos png no JavaScript, e também será o nosso bundle, que basicamente pega todos os arquivos do projeto e converte para apenas um arquivo javascript e arquivos de imagem e estilo.

## Vantagens do React

### Reutilização de componentes (+ velocidade e produtividade)

### Facilidade de manutenção e escalabilidade

### LOWA - Learn Once, Write Anywhere

## Declarativo - Descreve o que quer x Imperativo - Descreve como deve ser feito

### UI Declarativa - quando criamos um componente, estamos dizendo que queremos criar este elemento, mas não como criar este elemento.

```
function Title(){
  return (

    <h1 id="title">
    Hello World!
    </h1>
  );
}
```

## Imperativo - quando criamos um componente, estamos dizendo como deve ser feito para criar este elemento.

```
const h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.innerText = 'Hello World!";
document.body.appendChild(h1);
```

### @babel/core - principal

### @babel/preset-env - entende as funcionalidade e recursos que utilizamos e transformam eles em versões anteriores para conseguir rodar em qualquer versão

### @babel/cli - linha de comando do babel

### @babel/preset-react - para o babel entender a transpilação do React

```
yarn babel src -d build
```

```
const user = {};
```

nas versões mais antigas, tratariamos esse erro de tentar acessar propriedade de valores undefined desse jeito

```
if (user && user.adress) {
  console.log(user.address.street);
}
```

mas nas versões mais recentes foi implementaod o Optional chaining
então ao invés do código acima, usamos exclamação antes dos pontos, dessa forma não retorna o erro de acessar propriedades de undefined

```
console.log(user?.address?.street);
```

## Loaders - permitem que o webpack processem outros tipos de arquivos e converta eles em modos válidos que poderão ser consumidos pela aplicação

Eles pegam tudo que o webpack não conseguem entender e ele transforma esses arquivos para algo que ele consiga entender

Usar extensão .jsx ou .js não muda nada, é escrito do mesmo jeito

```
yarn add prop-types
```

Usamos o PropTypes pasa tipar as props dos componentes.

# Context API - serve para criar um contexto de informações

## Prop Drilling - ação de passarmos um valor em vários níveis sem precisarmos usar ela, este é o problema que a Context API resolve

### Provider - é um componente que a Context API provê para a gente - passamos uma propriedade chamada value, que são as informações que queremos compartilhar com nossos componentes

Quando colocamos os componentes dentro desse Provider, então todos esses componentes eles conseguem acessar o value sem precisarmos repassar as propriedade explicitamente

Resumidamente a Context é só isso, uma forma de repassar nossas propriedades em vários níveis, ou seja, vários componentes e filhos de componentes, sem precisar passar explicitamente

## Para usar arquivos css dentro do código, precisamos usar os loader adequado

```
yarn add css-loader style-loader -D
```

### Após isso configuramos dentro do arquivo do webpack.config

## CSS Modules - é utilizado para não ter conflitos entre classes

### Ele gera automaticamente uma hash aleatória para id's e classes para que não haja conflito na hora de utilizar no código

## SASS e SASS Modules

### SASS é um pré processador de css - basicamente introduz dentro do css funcionalidades que não teriamos dentro dele, tipo variáveis, funções, etc.

```
yarn add sass sass-loader -D
```

## Theming - a vantagem é quando utiliza principalmente style guide, que seria um guia de estilo mesmo

### É utilizado para organização na hora da manutenção, organizar melhor os estilos usados na aplicação

## ThemeProvider - utiliza a Context API
