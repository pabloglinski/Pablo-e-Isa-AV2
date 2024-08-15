const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const image = document.querySelector(".image");
const perguntas = [
    {
        enunciado: "Prepare-se para descobrir curiosidades fascinantes e testar seu conhecimento sobre esses seres maravilhosos que coloram nossos céus e trilhas. Que comecem as perguntas, e que você se divirta explorando o universo dos pássaros!",
        alternativas: [
            {
                texto: "Começar ♡︎",
                afirmacao: "Você marcou:",
            }
        ]
    },
    {
        enunciado: "Qual é o pássaro que pode imitar mais sons de outros animais e objetos? 𓅪♪♫", 
        image: "https://i.pinimg.com/736x/aa/91/45/aa9145ffc0582c1a1da2d35841dc0226.jpg",
        alternativas: [
            {
                texto: "Corvo",
                afirmacao: "Corvo",
            },
            {
                texto: "Papagaio-de-cara-roxa",
                afirmacao: "Papagaio-de-cara-roxa",
            }
        ]
},
{
    enunciado: "a resposta certa é Corvo! :)",
    alternativas: [
        {
            texto: "Próximo ♡︎",
            afirmacao: "",
        }
    ]

},
    {
        enunciado: "Qual é o único pássaro que pode voar para trás? 𓅯➪",
        alternativas: [
            {
                texto: "Martim-Pescador",
                afirmacao: "Martim-Pescador",
            },
            {
                texto: "Beija-Flor",
                afirmacao: "Beija-Flor",
            }
        ]
    },
    {
        enunciado: "a resposta certa é Beija-Flor! :)",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ]
    
    },
    {
        enunciado: "Qual pássaro tem a capacidade de mudar a cor das penas para se camuflar com o ambiente ao longo das estações do ano? ⛭❆☃︎❀ ",
        alternativas: [
            {
                texto: "Búho-real",
                afirmacao: "Búho-Real",
            },
            {
                texto: "Corvo-marinho",
                afirmacao: "Corvo-marinho",
            }
        ]
    },
    {
        enunciado: "a resposta certa é Corvo-Marinho! :)",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ]
    
    },
    {
        enunciado: "Qual é o pássaro que pode voar a uma altitude superior a 8.000 metros, quase na estratosfera? ⚝✩𓅮",
        alternativas: [
            {
            texto: "Condor-andino",
            afirmacao: "Condor-Andino",
            },
            {
            texto: "Falcão-peregrino",
            afirmacao: "Falcão-Peregrino",
            }
        ]
    },
    {
        enunciado: "a resposta certa é Condor-Andino! :)",
        alternativas: [
            {
                texto: "Próximo ♡︎",
                afirmacao: "",
            }
        ]
    
    },
    {
        enunciado: "Qual pássaro tem a habilidade de dormir com um olho aberto e metade do cérebro ativo para se proteger de predadores? ರಠ",
        alternativas: [
            {
            texto: "Pato",
            afirmacao: "Pato",
            },
            {
            texto: "Coruja",
            afirmacao: "Coruja",
            }
        ]
    },
    {
        enunciado: "a resposta certa é Coruja! :)",
        alternativas: [
            {
                texto: "Terminei ♡︎",
                afirmacao: "",
            }
        ]
    
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "Se suas respostas foram: Corvo, Beija-flor, Corvo-Marinho, Condor-Andino e Coruja, parabéns! Você acertou tudo ♡︎♡︎♡︎";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

caixaAlternativas.textContent = "";
mostraAlternativas();
