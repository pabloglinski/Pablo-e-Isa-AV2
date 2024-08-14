const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Prepare-se para descobrir curiosidades fascinantes e testar seu conhecimento sobre esses seres maravilhosos que coloram nossos céus e trilhas. Que comecem as perguntas, e que você se divirta explorando o universo dos pássaros! As respostas apareceram no final",
        alternativas: [
            {
                texto: "Começar ♡︎",
               
            }
        ]
    },
    {
        enunciado: "Qual é o pássaro que pode imitar mais sons de outros animais e objetos?", 
        img: "https://i.pinimg.com/564x/41/dc/24/41dc247aee6aae4121a7765ece1ba7a8.jpg",
        alternativas: [
            {
                texto: "Corvo",
                image: "https://i.pinimg.com/564x/41/dc/24/41dc247aee6aae4121a7765ece1ba7a8.jpg",
            },
            {
                texto: "Papagaio-de-cara-roxa",
                
            }
        ]
},
    {
        enunciado: "Qual é o único pássaro que pode voar para trás?",
        alternativas: [
            {
                texto: "Martim-Pescador",
                
            },
            {
                texto: "Beija-Flor",
               
            }
        ]
    },
    {
        enunciado: "Qual pássaro tem a capacidade de mudar a cor das penas para se camuflar com o ambiente ao longo das estações do ano?",
        alternativas: [
            {
                texto: "Búho-real",
               
            },
            {
                texto: "Corvo-marinho",
                
            }
        ]
    },
    {
        enunciado: "Qual é o pássaro que pode voar a uma altitude superior a 8.000 metros, quase na estratosfera?",
        alternativas: [
            {
            texto: "Condor-andino",
           
            },
            {
            texto: "Falcão-peregrino",
            
            }
        ]
    },
    {
        enunciado: "Qual pássaro tem a habilidade de dormir com um olho aberto e metade do cérebro ativo para se proteger de predadores? ",
        alternativas: [
            {
            texto: "Pato",
            
            },
            {
            texto: "Coruja",
            
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
