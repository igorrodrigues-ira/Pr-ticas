let numeroOpcoes = prompt('Escolha as opções;\n 0 - primeiro teste');

if (numeroOpcoes == 0){    
    function inicio() {
    console.log ('Testes de nome!');
    console.log ('Olá mundo');
    }
    inicio();

   let nome = prompt('Qual seu nome?');
    function nomePessoa(){
       console.log (`Olá, ${nome}`);
    }
nomePessoa();
}

// function dobro(a){
//     return a * 2;
// }
// let resultadoDoDobro = dobro(6);
// console.log (resultadoDoDobro);

// function media(a,b,c){
//     return (a+b+c) /3;
// }
// let resultadoDaMedia = media(3,6,8);
// console.log (resultadoDaMedia);

// function maiorNumero(a,b) {
//     return a > b ? a : b
// }
// let resultadoDoMaiorNumero = maiorNumero(8,6);
// console.log (resultadoDoMaiorNumero);

// function somaNumero (num) {
//     return num+num;
// }
// let resultadoSomaNumero = somaNumero(3);
// console.log (resultadoSomaNumero);


// function verificarConsole() {
//     console.log ('O botão foi clicado');
// }

// function verificarAlerta() {
//     console.log ('Eu amo JS');
// }

// function testeFuncao() {
//     let cidade = prompt('Me fale uma cidade do Brasil');
//     alert(`Estive em ${cidade} e lembrei de você`);
// }

// function verificarCalculo(){
//     let num1 = parseInt(prompt('Me fale um numero inteiro'));
//     let num2 = parseInt(prompt('Me fale o segundo numero inteiro'));
//     let soma =  (num1+num2) ;
//     alert(`O valor da soma dos números é = ${soma}`);
// }

// let texto = 'Converter o dolar em real!';

// function exibirTextoNaTela(tag,texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }


// function textoInicial(){
//     exibirTextoNaTela('h1',texto);
// }
// textoInicial();

// function verificarConsole() {
//     let valorDinheiro = prompt ('Coloque o valor que quer converter');

//     let dolar = parseFloat(valorDinheiro.toFixed(2).replace('.',','));
//     let n = dolar;
    
//     let valorReal = n* 4.80;
//     let valorFinal = valorReal.toFixed(2).replace('.',',');
//     exibirTextoNaTela ('h1',`O valor convertido deu R$${valorFinal}.`);
// }

// function verificarConsole() {
//      let input = prompt('coloque o número para Fatoração');
//      let n = parseInt(input);
//      let resultado = 1;

//      if(n === 0 || n === 1 ){
//         resultado = 1;
//      } else{
//          for (let i = n; i > 1 ; i--) {
//              resultado *= i;
//          }
//      }
//      exibirTextoNaTela ('h1', `O fatorial de ${n} é ${resultado}`);
//  }

// function verificarConsole(){
//     let alturaInput = prompt('Coloque sua altura');
//     let pesoInput = prompt ('Coloque seu peso atual');

//     let altura = parseFloat(alturaInput.replace(',','.'));
//     let peso = parseFloat(pesoInput.replace(',','.'));

//     let resultadoIMC = peso / (altura * altura) ;
//     let imcFormatado = resultadoIMC.toFixed(2);

//     exibirTextoNaTela('h1',`Seu IMC deu: ${imcFormatado}`);
// }

// let peso = 70;
// let altura = 1.75;  

// function calcularIMC(peso,altura) {
//     let imc = peso / (altura * altura);
//     return imc;
// }

// let resultadoFinal = calcularIMC(peso,altura).toFixed(2);
// console.log(`o imc calculado foi = ${resultadoFinal}`);

// function calcularFatorial(numero){
//     if (numero === 0 || numero === 1){
//         return 1;
//     }

//     let fatorial = 1
//     for(let i=2; i<=numero; i++){
//         fatorial*= i ;
//     }

//     return fatorial;
// }

// let numero = 15;
// let resultado = calcularFatorial(numero);
// console.log(`a fatorial de ${numero} é = ${resultado}`);

// function conversaoDeDolar(dolar) {
//     let cotacaoDolar = 4.80;
//     let valorEmReal = dolar * cotacaoDolar;
//     return valorEmReal.toFixed(2);
// }

// let dolar = 50;
// let conversaoFinal = conversaoDeDolar(dolar);
// console.log(`O valor de ${dolar} dolares equivale a R$${conversaoFinal}`);

// function calcularAreaPerimentroDaSalaRetangular(altura, largura){
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);

//     console.log(`A área da Sala é ${area} metros quadrados`)
//     console.log(`O perimetro da sala é ${perimetro} metros`);
// }
// let altura = 3;
// let largura = 5;
// calcularAreaPerimentroDaSalaRetangular(altura,largura);

// function calcularAreaPerimetroSalaOval(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
    
//     console.log(`A área da casa é ${area.toFixed(2)} metros ao quadrado.`);
//     console.log(`O Perimetro é ${perimetro.toFixed(2)} metros.`);    
// }
// let raio = 4;
// calcularAreaPerimetroSalaOval(raio);

// function tabuada(numero){
//     for(let i = 1; i <= 10; i++){
//         let resultado = numero * i;
//         console.log(`${numero} * ${i} = ${resultado}`);
//     }
// }
// let numero = 15;
// tabuada(numero);

// let listaGenerica = [];
// let linguagemDeProgramacao = [];
// linguagemDeProgramacao.push('javascript','c','c++','kotlin','python');
// linguagemDeProgramacao.push('java','ruby','golang');
// console.log (`${linguagemDeProgramacao[linguagemDeProgramacao.length - 1]}`);
