function pegaDados(){
    //recupera as informações do campo com id nome, neste caso o value(valor)

    let nome = document.getElementById('nome').value;
    //<input type id name value>   
    let sobrenome = document.getElementById('sobrenome').value;

    alert(`Olá ${nome} ${sobrenome}, você é o cliente 1000000. Parabéns!`);
    //console.log(nome);
    //console.log(sobrenome);
}

function somar(){
    //via receber os dados dos inputs com ids, valor1, valor2
    let valor1 = parseInt(document.getElementById('valor1'));
    let valor2 = parseInt(document.getElementById('valor2'));

    let mostra = document.getElementById('mostra');
    //alterar o conteúdo html do h2 com id mostra

    mostra.innerHTML = valor1 + valor2;
}

function caixaAltaNome(){
    let nome = document.getElementById('nome');
    nome.value = nome.value.toUpperCase();
}

function caixaAltaSobrenome(){
    let sobrenome= document.getElementById('sobrenome');
    sobrenome.value = sobrenome.value.toUpperCase();
}

//função de caixa alta para input
function onBlurInput(event){
    //toUpperCase() - caixa alta
    //toLowerCase() - caixa baixa
    event.value = event.value.toLowerCase();
}
