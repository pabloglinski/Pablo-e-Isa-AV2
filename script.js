const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Prepare-se para descobrir curiosidades fascinantes e testar seu conhecimento sobre esses seres maravilhosos que coloram nossos céus e trilhas. Que comecem as perguntas, e que você se divirta explorando o universo dos pássaros!",
        alternativas: [
            {
                texto: "Começar ♡︎",
                afirmacao: "Você marcou:",
            }
        ],
        imagem: "https://i.pinimg.com/474x/88/18/90/88189085f93fe875c7a734a61942d037.jpg"
    },
    {
        enunciado: "Qual é o pássaro que pode imitar mais sons de outros animais e objetos? 𓅪♪♫ ",
        alternativas: [
            {
                texto: "Corvo",
                afirmacao: "Corvo,",
            },
            {
                texto: "Papagaio-de-cara-roxa",
                afirmacao: "Papagaio-de-cara-roxa,",
            }
        ],
        imagem: "https://i.pinimg.com/736x/aa/91/45/aa9145ffc0582c1a1da2d35841dc0226.jpg" 
    },
    {
        enunciado: "a resposta certa é Corvo! :)",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/7d/2a/01/7d2a0114aa81c03c40985cb87ea7cc60.jpg" 
    },
    {
        enunciado: "Qual é o único pássaro que pode voar para trás? 𓅯➪",
        alternativas: [
            {
                texto: "Martim-Pescador",
                afirmacao: "Martim-Pescador,",
            },
            {
                texto: "Beija-Flor",
                afirmacao: "Beija-Flor,",
            }
        ],
        imagem: "https://i.pinimg.com/736x/30/9e/9e/309e9e0cb5b0415f498bce6257082cc7.jpg"
    },
    {
        enunciado: "a resposta certa é Beija-Flor! :)",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/13/86/a7/1386a7f48513f53ceb189c720bea62a0.jpg" 
    },
    {
        enunciado: "Qual pássaro tem a capacidade de mudar a cor das penas para se camuflar com o ambiente ao longo das estações do ano? ⛭❆☃︎❀ ",
        alternativas: [
            {
                texto: "Búho-real",
                afirmacao: "Búho-Real,",
            },
            {
                texto: "Corvo-marinho",
                afirmacao: "Corvo-marinho,",
            }
        ],
        imagem: "https://i.pinimg.com/736x/d9/d0/fa/d9d0fa0a097cfd1be137de308be6868f.jpg" 
    },
    {
        enunciado: "a resposta certa é Corvo-Marinho! :)",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/c0/6b/3a/c06b3a20f9a2398e3224bd12485b4788.jpg"
    },
    {
        enunciado: "Qual é o pássaro que pode voar a uma altitude superior a 8.000 metros, quase na estratosfera? ⚝✩𓅮",
        alternativas: [
            {
                texto: "Condor-andino",
                afirmacao: "Condor-Andino,",
            },
            {
                texto: "Falcão-peregrino",
                afirmacao: "Falcão-Peregrino,",
            }
        ],
        imagem: "https://i.pinimg.com/736x/86/e6/d1/86e6d14e3cac87cb538281990edcd28a.jpg" 
    },
    {
        enunciado: "a resposta certa é Condor-Andino! :)",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/5d/1c/76/5d1c764f5f79272976ffd81a4c2e4730.jpg" 
    },
    {
        enunciado: "Qual pássaro tem a habilidade de dormir com um olho aberto e metade do cérebro ativo para se proteger de predadores? ರಠ",
        alternativas: [
            {
                texto: "Pato",
                afirmacao: "e Pato",
            },
            {
                texto: "Coruja",
                afirmacao: "e Coruja",
            }
        ],
        imagem: "https://i.pinimg.com/736x/56/c1/71/56c171496a435c168f27fccd174583bd.jpg" 
    },
    {
        enunciado: "a resposta certa é Coruja! :)",
        alternativas: [
            {
                texto: "Terminei ♡︎",
                afirmacao: "",
            }
        ],
        imagem: "https://i.pinimg.com/474x/cc/0f/5b/cc0f5bab0f655342516aa8835d374f0e.jpg" 
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = ""; 
   
    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);
    
   
    if (perguntaAtual.imagem) {
        const img = document.createElement("img");
        img.src = perguntaAtual.imagem;
        img.alt = "Imagem relacionada";
        caixaPerguntas.appendChild(img);
    }
    
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Se suas respostas foram: Corvo, Beija-flor, Corvo-Marinho, Condor-Andino e Coruja, parabéns! Você acertou tudo ♡︎♡︎♡︎";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = ""; 

   
    const enunciado = document.createElement("p");
    enunciado.textContent = perguntaAtual.enunciado;
    caixaPerguntas.appendChild(enunciado);
    
  
    if (perguntaAtual.imagem) {
        const img = document.createElement("img");
        img.src = perguntaAtual.imagem;
        img.alt = "Imagem relacionada";
        img.style.width = "280px"; 
        img.style.height = "auto"; 
        caixaPerguntas.appendChild(img);
    }
    
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
