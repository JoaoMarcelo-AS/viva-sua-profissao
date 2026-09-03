// Linguagens
const linguagens = [
  {
    nome: "HTML",
    subtitulo: "ESTRUTURA",
    texto:
      "HTML é responsável por organizar o conteúdo de uma página, como textos, imagens, links e botões. Ele funciona como a estrutura base de um site.",
    cor: "#f16529",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    nome: "CSS",
    subtitulo: "ESTILO",
    texto:
      "CSS é usado para definir a aparência do site, como cores, fontes, tamanhos, espaçamentos e a organização dos elementos na tela.",
    cor: "#2965f1",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    nome: "JavaScript",
    subtitulo: "INTERATIVIDADE",
    texto:
      "JavaScript adiciona comportamento e interação ao site. Com ele podemos criar menus, modais, botões e outras funcionalidades.",
    cor: "#e0c91b",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  }
];

const areaCards = document.getElementById("linguagens-cards");
const modal = document.getElementById("modal");
const modalConteudo = document.getElementById("modal-conteudo");
const modalSubtitulo = document.getElementById("modal-subtitulo");
const modalTexto = document.getElementById("modal-texto");
const modalIcone = document.getElementById("modal-icone");
const fecharModal = document.getElementById("fechar-modal");

linguagens.forEach(function (linguagem) {
  const card = document.createElement("div");
  card.classList.add("linguagem-card");
  if (linguagem.nome === "JavaScript") {
    card.classList.add("js-card");
  }

  card.style.backgroundColor = linguagem.cor;
  card.innerHTML = `
    <div>
      <img
        class="linguagem-icone"
        src="${linguagem.icone}"
        alt="${linguagem.nome}"
      >
      <p>${linguagem.nome}</p>
    </div>
    <span>SAIBA MAIS →</span>
  `;

  card.addEventListener("click", function () {
    modalSubtitulo.innerText = linguagem.subtitulo;
    modalTexto.innerText = linguagem.texto;
    modalIcone.innerHTML = `
      <img src="${linguagem.icone}" alt="${linguagem.nome}"
      >
    `;
    modalConteudo.style.boxShadow = `0 20px 60px ${linguagem.cor}55`;
    modalSubtitulo.style.color = linguagem.cor;
    modal.classList.add("ativo");
  });
  areaCards.appendChild(card);
});

fecharModal.addEventListener("click", function () {
  modal.classList.remove("ativo");
});

modal.addEventListener("click", function (evento) {
  if (evento.target === modal) {
    modal.classList.remove("ativo");
  }
});

// Entrevista
const perguntasEntrevista = [
  {
    pergunta:
      "O que é preciso para ingressar na área de desenvolvimento Front-end?",

    resumo:
      "É importante dominar HTML, CSS e JavaScript, entender o navegador, DOM, HTTP, aprender Git e construir projetos para mostrar no portfólio.",

    resposta: `
      <p>
        A base é HTML, CSS e JavaScript de verdade, não só decorado.
        É importante entender como o navegador funciona, como o DOM é
        manipulado e como funcionam as requisições HTTP.
      </p>

      <p>
        Depois disso, é recomendado aprender um framework, como React,
        e também ter noções de versionamento com Git.
      </p>

      <p>
        A formação ajuda, mas ter projetos para mostrar também é muito
        importante para entrar na área.
      </p>
    `
  },
  {
    pergunta:
      "Quais são as maiores dificuldades para quem está começando?",

    resumo:
      "Uma das maiores dificuldades é querer aprender muitas ferramentas ao mesmo tempo sem dominar a base e conseguir sair dos tutoriais para projetos reais.",

    resposta: `
      <p>
        Uma das maiores dificuldades é o excesso de ferramentas.
        Muitas pessoas querem aprender várias tecnologias ao mesmo tempo
        sem ter uma base sólida.
      </p>

      <p>
        Outra dificuldade é sair dos tutoriais e encarar projetos reais,
        com regras de negócio, integração com APIs e bugs.
      </p>

      <p>
        Também é importante aprender a ler códigos feitos por outras
        pessoas, algo comum no trabalho em equipe.
      </p>
    `
  },
  {
    pergunta:
      "Quais tecnologias e linguagens você mais utiliza no seu trabalho?",

    resumo:
      "No Front-end utiliza Next.js, React, TypeScript e Tailwind. Também trabalha com NestJS, banco de dados, Docker, Git e ferramentas de IA.",

    resposta: `
      <p>
        No Front-end utiliza Next.js, React, TypeScript e Tailwind.
        Também utiliza ferramentas para gerenciar os dados da API.
      </p>

      <p>
        No Back-end utiliza NestJS, TypeORM e banco de dados Oracle.
      </p>

      <p>
        Docker é utilizado para criar e organizar os ambientes de
        desenvolvimento.
      </p>

      <p>
        Além disso, utiliza Git no dia a dia e ferramentas de IA para
        auxiliar no desenvolvimento e revisão de código.
      </p>
    `
  },
  {
    pergunta:
      "Como é sua rotina trabalhando com desenvolvimento?",

    resumo:
      "A rotina envolve desenvolver novas funcionalidades, corrigir bugs, integrar Front-end e Back-end, testar sistemas, revisar código e dar suporte aos usuários.",

    resposta: `
      <p>
        Na Mart Minas, trabalha na aplicação de intranet da empresa e
        em vários sistemas internos.
      </p>

      <p>
        A rotina mistura desenvolvimento de novas funcionalidades,
        correção de bugs e integração entre Front-end e Back-end.
      </p>

      <p>
        Um dia de trabalho pode envolver entender uma demanda de áreas
        como RH, DP ou TI, desenvolver uma tela, testar e revisar o
        código.
      </p>

      <p>
        Também avalia aplicações feitas por outros desenvolvedores e dá
        suporte aos usuários dos sistemas.
      </p>
    `
  },
  {
    pergunta:
      "Quais conhecimentos você considera mais importantes para um desenvolvedor Front-end?",

    resumo:
      "JavaScript e TypeScript sólidos são fundamentais. Também são importantes APIs, componentização, UX, responsividade, Git e conhecimentos básicos de Back-end e infraestrutura.",

    resposta: `
      <p>
        JavaScript e TypeScript sólidos são conhecimentos muito
        importantes para um desenvolvedor Front-end.
      </p>

      <p>
        Também é importante saber consumir APIs e lidar com
        carregamento, erros e dados.
      </p>

      <p>
        Componentização, reutilização de código, UX, responsividade e
        Git também são conhecimentos importantes.
      </p>

      <p>
        Entender um pouco de Back-end, banco de dados, servidor e
        Docker também pode ajudar bastante.
      </p>
    `
  },
  {
    pergunta:
      "O que você recomendaria para alguém que está começando agora na área?",

    resumo:
      "Escolha uma stack para estudar com profundidade, desenvolva projetos reais, aprenda Git e Docker cedo e utilize IA como ferramenta sem deixar de entender o código.",

    resposta: `
      <p>
        Escolha uma stack e estude com profundidade em vez de ficar
        pulando de tecnologia em tecnologia.
      </p>

      <p>
        Crie projetos que resolvam problemas reais, mesmo que sejam
        projetos pequenos.
      </p>

      <p>
        Aprenda Git cedo e, quando possível, também Docker, pois são
        ferramentas utilizadas em muitos times.
      </p>

      <p>
        Use IA como ferramenta de estudo e trabalho, mas sem deixar de
        entender o código que foi gerado.
      </p>

      <p>
        Também é importante ter paciência com bugs, pois grande parte
        do aprendizado acontece tentando resolver problemas.
      </p>
    `
  },
  {
    pergunta:
      "Em qual empresa e projetos você está trabalhando atualmente?",

    resumo:
      "Atualmente trabalha na Mart Minas desenvolvendo sistemas internos e também atua como desenvolvedor externo para uma faculdade de pós-graduação online.",

    resposta: `
      <p>
        Trabalha na Mart Minas, no time responsável pela intranet da
        empresa.
      </p>

      <p>
        Entre os projetos estão um sistema de abertura de chamados, um
        sistema de recrutamento e seleção para o RH e um sistema de
        acompanhamento de rescisões.
      </p>

      <p>
        Também desenvolveu um agente de IA interno que realiza buscas
        em documentos PDF e consultas no banco de dados.
      </p>

      <p>
        Em paralelo, também atende como cliente externo a Eaula, uma
        faculdade de pós-graduação online.
      </p>

      <p>
        Nesse projeto, além do desenvolvimento, também trabalha com
        infraestrutura, banco de dados, servidor e versionamento.
      </p>
    `
  }
];

const areaPerguntas = document.getElementById("perguntas");
const modalEntrevista = document.getElementById("modal-entrevista");
const fecharEntrevista = document.getElementById("fechar-entrevista");
const modalPergunta = document.getElementById("modal-pergunta");
const modalResposta = document.getElementById("modal-resposta");

perguntasEntrevista.forEach(function (item) {
  const card = document.createElement("div");
  card.classList.add("pergunta");
  card.innerHTML = `
    <h3>${item.pergunta}</h3>
    <p>${item.resumo}</p>
    <button class="pergunta-botao">
      LER RESPOSTA COMPLETA →
    </button>
  `;

  const botao = card.querySelector(".pergunta-botao");

  botao.addEventListener("click", function () {
    modalPergunta.innerText = item.pergunta;
    modalResposta.innerHTML = item.resposta;
    modalEntrevista.classList.add("ativo");
  });
  areaPerguntas.appendChild(card);
});

fecharEntrevista.addEventListener("click", function () {
  modalEntrevista.classList.remove("ativo");
});

modalEntrevista.addEventListener("click", function (evento) {
  if (evento.target === modalEntrevista) {
    modalEntrevista.classList.remove("ativo");
  }
});