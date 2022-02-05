let gifs;

let ContadorDeJogadas=0;
let ContadorCartasViradas=0;
const Tempo = document.querySelector(".cronometro");
let TempoDeJogo = null;

Jogo();

// Função que contém o funcionamento do jogo
function Jogo(){
    DeclararElementosDoGifs();
    
    //Zera todos as variaveis necessarias no jogo
    Tempo.innerHTML=0;
    let numCartas=0;
    ContadorCartasViradas=0;
    ContadorDeJogadas=0;

    //Repete a pergunta até receber uma resposta aceitavel
    do{
        numCartas = prompt('Quantas cartas você deseja? (Números pares de 4 á 14 )');
    }while(numCartas%2!=0||numCartas<4||numCartas>14)

    //Define o tamanho do array para que os pares estejam sempre no mesmo jogo
    gifs.length=numCartas;

    //Embaralha as cartas
    gifs.sort(comparador);

    //Distribui as cartas embaralhadas
    const distribuiçao = document.querySelector('main');
    for(let cont=0;cont<numCartas/2;cont++){
        distribuiçao.innerHTML += 
        `<div class="carta" data-identifier="card" onclick='gira(this)'>
            <div class="front-face face" data-identifier="back-face">
                <img src="images/front.png" alt="papagaio">
            </div>
            <div class="back-face face" data-identifier="front-face">
                ${gifs[cont]}
            </div>
        </div>`;
    } 

    distribuiçao.innerHTML += `<div class="break"></div>`
    
    for(let cont=numCartas/2;cont<numCartas;cont++){
        distribuiçao.innerHTML += 
        `<div class="carta" data-identifier="card" onclick='gira(this)'>
            <div class="front-face face" data-identifier="back-face">
                <img src="images/front.png" alt="papagaio">
            </div>
            <div class="back-face face" data-identifier="front-face">
                ${gifs[cont]}
            </div>
        </div>`;
    } 

    TempoDeJogo = setInterval(cronometro,1000);
    
}

//Funçao que vira as cartas ao clicar
function gira(elemento){


    //Aumenta uma jogada a cada clique
    ContadorDeJogadas++;
    const CartaVirada = document.querySelector('.carta .front-giro');

    //  Checa se já tem uma carta virada, e caso haja, 
    //  se ela possui o mesmo conteudo da que acabou de ser virada
    if(CartaVirada!== null){
        const Igual1 = CartaVirada.parentNode.querySelector('.back-face').innerHTML;
        const Igual2 = elemento.querySelector('.back-face').innerHTML;
        if(Igual1===Igual2){
            ManterCartaVirada(elemento);
            ManterCartaVirada(CartaVirada.parentNode);
            setTimeout(() => ChecarFim(elemento), 300);
        }else{
        setTimeout(ImpedirCartasDeClique, 10);
        VirarCarta(elemento);
        setTimeout(() => VirarCarta(elemento), 1000);
        setTimeout(() => VirarCarta(CartaVirada.parentNode), 1000);
        setTimeout(ImpedirCartasDeClique, 1000);
        }
    } else{
        VirarCarta(elemento);
    }
}

//
function ImpedirCartasDeClique(){
    document.querySelector('.background-cartas').classList.toggle('escondido');
}


//Função para fazer a anomação da virada da carta
function VirarCarta(elemento){
    elemento.querySelector('.front-face').classList.toggle('front-giro');
    elemento.querySelector('.back-face').classList.toggle('back-giro');
}

//Funçao para manter a carta virada
function ManterCartaVirada(elemento){
    elemento.querySelector('.front-face').classList.remove('front-giro');
    elemento.querySelector('.back-face').classList.remove('back-giro');
    elemento.querySelector('.front-face').classList.toggle('front-gire');
    elemento.querySelector('.back-face').classList.toggle('back-gire');
}

//Funçao que checa se todas as cartas ja estao viradas
function ChecarFim(elemento){
    const EstaVirada = elemento.querySelector('.front-face');
    if(EstaVirada.classList.contains('front-gire')){
        ContadorCartasViradas= ContadorCartasViradas+2;
    }
    if(ContadorCartasViradas===gifs.length){
        clearInterval(TempoDeJogo);
        alert(`Você ganhou em ${ContadorDeJogadas} jogadas e ${Tempo.innerHTML} segundos!`)
        JogarNovamente();
    }
}

//Funçao que pergunta se o jogador quer jogar novamente após o fim do jogo
function JogarNovamente(){
    const Resp = prompt('Você quer jogar novamente? (s ou n))');
    if(Resp==='s'||Resp==='S'){
        document.querySelector('main').innerHTML="";
        Jogo();
    } else{
        alert('Até a próxima!!');
    }
}

//Funçao que re-declara os elementos do array de gifs,
function DeclararElementosDoGifs(){
    gifs = [
        `<img src="images/fiestaparrot.gif" alt="Fiesta Parrot">`,
        `<img src="images/fiestaparrot.gif" alt="Fiesta Parrot">`,
        `<img src="images/bobrossparrot.gif" alt="Bob Ross Parrot">`,
        `<img src="images/bobrossparrot.gif" alt="Bob Ross Parrot">`,
        `<img src="images/explodyparrot.gif" alt="Explody Parrot">`,
        `<img src="images/explodyparrot.gif" alt="Explody Parrot">`,
        `<img src="images/revertitparrot.gif" alt="Revert Parrot">`,
        `<img src="images/revertitparrot.gif" alt="Revert Parrot">`,
        `<img src="images/tripletsparrot.gif" alt="Triplets Parrot">`,
        `<img src="images/tripletsparrot.gif" alt="Triplets Parrot">`,
        `<img src="images/unicornparrot.gif" alt="Unicorn Parrot">`,
        `<img src="images/unicornparrot.gif" alt="Unicorn Parrot">`,
        `<img src="images/metalparrot.gif" alt="Metal Parrot">`,
        `<img src="images/metalparrot.gif" alt="Metal Parrot">`
      ];
}

//Função para embaralhar as cartas
function comparador() { 
	return Math.random() - 0.5; 
}

//Função para contar o tempo que o jogador levou para terminar o jogo
function cronometro(){
    Tempo.innerHTML = parseInt(Tempo.innerHTML) + 1;
}