import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// sempre que utilizamos tags html dentro de javascript, precisamos importar o React
// ele recebe dois argumentos - o primeiro é o elemento que queremos renderizar, ele é uma tag html ou um componente React, e o segundo argumento é o container, que seria onde vamos querer renderizar o elemento que passamos no primeiro argumento
ReactDOM.render(<App />, document.getElementById("root"));

// As duas únicas formas de criar componentes no React
// Functional Component (Componente Funcional)
// function
// Class Component (Componente de Classe)
// class
