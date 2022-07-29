/*function nomeDaFuncao(){
    console.log("Exiba alguma coisa");
}
function nomeDaFuncao(){
    return("Exiba alguma coisa");
}*/

/*
função anonima - é uma função sem nome

function(){
    realiza alguma ação
}
*/

let exibir = function(){
    console.log("Estou exibindo alguma mensagem");
}
//a variável vai funcionar como um nome
exibir();

//ápos 5 segundos a página será carregada, a função anônima vai ser executada
setTimeout(function(){
    console.log('Executei depois de 5 segundos');
} ,5000); // 5000 é milisegundos (o segundo parâmetros é milisegundos)
//executa uma ação de um determinado tempo


///executar função anônima de forma imediata
(
    function(){
        console.log("Estou sendo executada imediatamente");
    }
)();//fução anônima();


/*
Arrow function

*/
function antiga(){
    console.log('Estou fazendo algo');
    console.log('Este é um exemplo');
}

/* convertida na arrow function
a palavra reservada function não existe mais, é excluída
entre o nome da função e () tem uma atribuição
entre o fim dos parametrso () e a abertura de chave{, vem um sea => */

antiga = (/*parametros da função */) => {
    console.log('Estou fazendo algo');
    console.log('Este é um exemplo');
}

/* 
function antiga(){
    console.log('Estou fazendo algo');
*/
antiga = () => console.log('Estou fazendo algo');

//tradicional
function comParametro(nome, sob){
    console.log('Resultado');
    console.log(`${nome} ${sob}`);
}

//arrow
comParametro = (nome, sob) => {
    console.log('Resultado');
    console.log(`${nome} ${sob}`);
}
//chamadas das funções não muda
comParametro('Débora, Sol');

//tradicional
function umParametro(valor){
    console.log(valor);
}

//arrow
umParametro = (valor) => {console.log(valor);}
umParametro = (valor) => console.log(valor);
umParametro = valor => consol.log(valor);

//tradiconal
function media(a, b, c){
    return(a+bc) /3;
}

//arrow
media = (a, b, c) => { return(a+bc) /3; }
media = (a, b, c) => (a+bc) /3;

let result = media(1,2,3)
    console.log(result);

    console.log(media(a,b,c));

//tradicional
function temMaisCoisas(a,b,c){
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    return (a + b + c)/ 3;
}

//arrow
let temMaisCoisas = (a,b,c) =>{
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

   (a + b + c)/ 3;
}

//tradicional
setTimeout(
    function(){
    console.log('Executei depois de 5 segundos');
} 
,5000);

/*funções anônimas como a de cima
() =>{

} */
//arrow
setTimeout(
    () => {
    console.log('Executei depois de 5 segundos');
} 
,5000);

//tradicional
function fabioGasolina(valor){
    var Litros = (valor / 6.29).toFixed();
    var Km = (Litros * 26).toFixed();
    
    console.log(Litros + 'Litros');
    console.log(Km +'Km');
}

//arrow
fabioGasolina = (valor) => {
    var Litros = (valor / 6.29).toFixed();
    var Km = (Litros * 26).toFixed();
    
    console.log(Litros + 'Litros');
    console.log(Km +'Km');
}

fabioGasolina(100);

//tradicional
function sarahCalc(num1, num2, cod){
    var somar=num1+num2;
    var multiplicar=num1*num2;
    var dividir=num1/num2;
    
    if(cod == 1){
        console.log('Soma: '+somar);
    }else if(cod ==2){
        console.log('Multiplicação: '+multiplicar);
    }else{
        console.log('Divisão: '+dividir)
    }
}



//arrow
sarahCalc = (num1, num2, cod) =>{
    var somar=num1+num2;
    var multiplicar=num1*num2;
    var dividir=num1/num2;
    
    if(cod == 1){
        console.log('Soma: '+somar);
    }else if(cod ==2){
        console.log('Multiplicação: '+multiplicar);
    }else{
        console.log('Divisão: '+dividir)
    }
}

sarahCalc(5, 8, 1);