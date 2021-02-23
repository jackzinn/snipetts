import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]); // ['React', 'React Native']
  // tech = ReactJS e React Native (padrao)
  const [newTech, setNewTech] = useState('');

  // function handleAdd() {
  //   setTech([...tech, newTech]);
  //   // essa funcao esta dando push dentro da lista techs
  //   setNewTech('');
  // }

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);
  // dentro do array vc deve colocar apenas as variaveis de estado que foram
  // usadas dentro do evento clique


  // Este useEffect so sera executado no momento que a pagina for totalmente carregada,
  // porque dentro do array é o local que vai ouvir 'watch' cada mudança efetuada
  // como nao tem nenhum item dentro ele so vai executar uma vez
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if(storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // diferente do primeiro useEffect, este está escutando cada mudança efetuada no estado 'tech'
  // qualquer alteracao
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  // useMemo é uma funcao callback que escuta a alteracao no estado
  // toda vez q estado é atualizado, o useMemo atualiza e retorna na variavel o callback
  // que pode ser calculo, botao loading, alteracao em um array, etc
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
      <strong>Voce tem {techSize} tecnologias</strong>
      <br />
      {/* o onChange é um evento html que escuta cada tecla
       do seu teclado e assim ele altera o estado que foi passado a cada tecla digita*/}
      <input value={newTech} onChange={e => setNewTech(e.target.value)}type="text"/>
      <button type='button' onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;

// quando tem lista e coloca botao embaixo, react obriga colocar fragment <> / </>

// useCallback evita de que alguma funcao callback (ex: click, change, blur, etc)
// seja criada novamente a funcao callback, e com isso economiza processamento no browser e computador
// pq o useCallback alocou um espaco em memoria e nao vai ser mais criada novamente
