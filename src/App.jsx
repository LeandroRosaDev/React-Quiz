import Radio from './Form/Radio';
import React from 'react';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
  {
    pergunta:
      'Qual componente renderiza um elemento conforme o estado da página?',
    options: ['useState', 'useEffect', 'useMemo'],
    resposta: 'useState',
    id: 'p5',
  },
  {
    pergunta:
      'Qual é o nome de uma das mais importantes funcionalidade do React?',
    options: ['SPA', 'SEO', 'POST'],
    resposta: 'SPA',
    id: 'p6',
  },
  {
    pergunta:
      'Quando queremos linkar páginas dentro do React qual tag deveremos usar?',
    options: ['<a>', '<link>', '<URL>'],
    resposta: '<link>',
    id: 'p7',
  },
  {
    pergunta:
      'Qual forma do React é usada em desenvolvimento de aplicações mobile?',
    options: ['React Native', 'React Mobile', 'React Smartphone'],
    resposta: 'React Native',
    id: 'p8',
  },
];

function App() {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChangue({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Voce acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      resultadoFinal();
      setSlide(slide + 1);
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChangue}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Próximo</button>
      )}
    </form>
  );
}

export default App;
