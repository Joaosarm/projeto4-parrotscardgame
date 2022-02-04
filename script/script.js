const gifs = [
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

Jogo();

function Jogo(){
    let numCartas=0;
    do{
        numCartas = prompt('Quantas cartas você deseja? (Números pares de 4 á 14 )');
    }while(numCartas%2!=0||numCartas<4||numCartas>14)
    gifs.length=numCartas;
    gifs.sort(comparador);
    const distribuiçao = document.querySelector('main');
    for(let cont=0;cont<numCartas;cont++){
        distribuiçao.innerHTML += 
        `<div class="carta" onclick="gira(this)">
            <div class="front-face face" >
                <img src="images/front.png" alt="papagaio">
            </div>
            <div class="back-face face">
                ${gifs[cont]}
            </div>
        </div>`;
    } 

    // distribuiçao.innerHTML += "<br>";
    // for(let cont=0;cont<numCartas/2;cont++){
    //     distribuiçao.innerHTML += 
    //     `<div class="carta">
    //         <div class="front-face face">
    //             <img src="images/front.png" alt="papagaio">
    //         </div>
    //     <div class="back-face face"></div>
    //     </div>`;
    // } 

    // JogarNovamente();
    
}

function gira(elemento){
    elemento.querySelector('.front-face').classList.toggle('front-giro');
    elemento.querySelector('.back-face').classList.toggle('back-giro');
}


function JogarNovamente(){
    const Resp = prompt('Você quer jogar novamente? (s ou n))');
    if(Resp=='s'){
        Jogo();
    } else{
        alert('Até a próxima!!')
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}