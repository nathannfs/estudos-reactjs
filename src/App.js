import React, { useState } from "react";

import Post from "./Post";

import Header from "./Header";

// o React trabalha com valores imutáveis

// Props (Properties) -> Propriedades -
function App() {
  // useState - permite fazer alterações em um array e retornar ele
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title#01",
      subtitle: "Sub#01",
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: "Title#02",
      subtitle: "Sub#02",
      likes: 10,
      read: true,
    },
    {
      id: Math.random(),
      title: "Title#03",
      subtitle: "Sub#03",
      likes: 50,
      read: false,
    },
    {
      id: Math.random(),
      title: "Title#04",
      subtitle: "Sub#03",
      likes: 50,
      read: true,
    },
  ]);

  console.log({ posts });

  // função para o botão de atualizar
  function handleRefresh() {
    // em vez de usar este método para adiconar novos elementos dentro de um array
    // posts.push({
    //   id: Math.random(),
    //   title: `Title#0${posts.length + 1}`,
    //   subtitle: `Sub#0${posts.length + 1}`,
    //   likes: 50,
    // });

    // usamos deste jeito com useState
    // para limpar a lista
    // setPosts([]);

    // useState recebe um único argumento que é o prevState, que é basicamente a lista de post antes de fazer a alteração neste exemplo
    // sempre que precisarmos do valor anterior usando useState, precisamos passar uma função e usar prevState como o exemplo abaixo
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: Number((Math.random() * 100).toFixed(0)),
      },
    ]);
  }

  // função para remover um post a partir do id
  function handleRemovePost(postId) {
    // passamos um filtro para quando clicar em remover algum post, filtrarmos os post e deixarmos só os posts que não tem o id que recebemos quando clicamos em remover
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

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
        <h2>
          Posts da semana
          {/* os eventos passamos como props */}
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {/* se passarmos um array, o jsx pega o valor do array e joga direto no nosso DOM */}
      {/* {[<h1>Primeiro elemento</h1>, <h1>Segundo elemento</h1>]} */}

      {/* Renderização de Listas */}
      {/* Cria um novo array com as mesmas posições e valores do array que estamos passando como argumento 
      transformando um array de objetos em um array de componentes
      */}
      {/* sempre que usarmos o map, precisamos usar um key */}
      {posts.map((post) => (
        // estamos percorrendo item por item e passando o title e subtitle para cada um, de acordo com as posições do novo array que criamos acima
        <Post
          // ela precisa ser única
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          // aqui passamos o objeto completo porque estamos usando todos
          post={post}
        />
      ))}
    </>
  );
}

export default App;
