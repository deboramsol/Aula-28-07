/*
crie uma função que altere o elemento com id chamado atv, mudando o seu conteudo html para a seguinte frase : Fiz sozinho

modifique tb o estilo do elemento alterando sua cor de fundo para yellow e a cor do texto para orange

a função deve ser chamada por onclick em algum elemento html de sua escolha*/

function alteracoes(){
    elemento = document.getElementById('atv');
    elemento.innerHTML = 'Fiz essa sozinha!';
    elemento.style.background ='yellow';
    elemento.style.color = 'orange';
}


function mudaCorFundo(){

    /*
    troca a cor de fundo do elemento body, acessando seu style e cor de fundo, para um novo valor =red */
    document.body.style.background = 'red';
}

/*funçao getElementaryById - ela recupera as informações do elemento que contem o id especfico */

function mudaH1(){
    //acessa no documento html o id conteudo mudando seu conteúdo
    document.getElementById('conteudo').innerHTML = "Opa, o valor foi mudado!"
    document.getElementById('conteudo').style.color = 'blue';
}
function clicou(){
    alert('Eu fui clicado, tá vendo?');
}

function mouseEmCima(){
    console.log('O mouse está em cima');
}

function mouseFora(){
    console.log('O mouse está fora');
}
function soma(){
    document.write('A soma é ' + (1 + 2)) ;
}

/*
 crie uma função que imprima na body seu nome completo, ao colocar o mouse em cima de um paragrafo criado no html
 */

 function nomeCompleto(){
    document.write('Débora Sol');
 }