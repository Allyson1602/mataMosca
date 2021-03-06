var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaMoscaTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel == 'normal'){
    criaMoscaTempo = 1500;
}else if(nivel == 'dificil'){
    criaMoscaTempo = 1000;
}else if(nivel == 'chickNorris'){
    criaMoscaTempo = 750;
}

function redimensionarJanela(){
    altura = (window.innerHeight - 100);
    largura = (window.innerWidth - 100);

    // console.log(altura,largura);
}
redimensionarJanela();

cronometro = setInterval(function(){
    tempo --;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html';
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, criaMoscaTempo);

function posicaoRandomica(){
    var posicaoY = Math.floor(Math.random() * altura);
    var posicaoX = Math.floor(Math.random() * largura);

    posicaoX = posicaoX <= 60 ? 0 : posicaoX;
    posicaoY = posicaoY <= 60 ? 0 : posicaoY;

    // console.log(posicaoY, posicaoX);

    //remover o mosquito caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vidas <= 3){
            document.getElementById('v'+ vidas).src = 'img/coracao_vazio.png';
            vidas ++;
        }else{
            window.location.href = 'fim_jogo.html';
        }
    }

    // html
    var mosquito = document.createElement('img');
        mosquito.src = 'img/mosca.png';
        mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio();
        mosquito.id = 'mosquito';
        mosquito.style.position = 'absolute';
        mosquito.style.left = posicaoX + 'px';
        mosquito.style.top = posicaoY + 'px';
        mosquito.onclick = function(){
            this.remove();
        }
    document.body.appendChild(mosquito);

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'mosca1';
        case 1:
            return 'mosca2';
        case 2:
            return 'mosca3';
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}