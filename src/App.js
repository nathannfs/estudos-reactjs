import React from "react";

import Post from "./Post";

import Header from "./Header";

// Props (Properties) -> Propriedades -
function App() {
  return (
    // React.Fragment - é um componente fantasma, usando isso o que está dentro dele são filhos direto do nosso elemento, sem ter que adicionar outro pai sem necessidade
    // Existe 3 formas de utilizar ele - usando React.Fragment - importando ele desestruturando {Fragment} e utilizando <Fragment></Fragment> - ou só utilizando <></> vazio deste jeito que seria a short sintax, não existe diferença usar alguma das 3, só que se usar a short sintax não conseguimos passar atributos para ele
    <>
      {/* jsx - é o código html dentro do JavaScript
       Render - Renderizar - é mostrar algo em tela
       Para passar valores de variáveis como conteúdo
       Quando abrimos chaves deste jeito {category}, estamos dizendo que tudo que está dentro daquela chave é para ser interpretado como código JavaScript e não html */}

      <Header>
        {/* Prop Children - serve para pegar todo valor que a gente passa em um componente */}
        {/* // por padrão o react não entende onde renderiza o que está dentro da
        tag, então ele injeta uma propriedade que é a children no nosso componente
        então a propriedade children recebe tudo que colocarmos aqui dentro da tag do componente */}
        <h2>Posts da semana</h2>
        Uma string qualquer <br />
        <span>string dentro de um span</span>
      </Header>

      <hr />

      {/* podemos passar quantas propriedades quiser 
          elas são apenas leitura - não podemos fazer alterações no valor das props em componentes */}
      <Post
        likes={20}
        post={{
          title: "Título da notícia 01",
          subtitle: "Subtítulo da notícia 01",
        }}
      />

      <Post
        likes={10}
        post={{
          title: "Título da notícia 02",
          subtitle: "Subtítulo da notícia 02",
        }}
      />

      <Post
        likes={50}
        post={{
          title: "Título da notícia 03",
          subtitle: "Subtítulo da notícia 03",
        }}
      />
    </>
  );
}

export default App;
