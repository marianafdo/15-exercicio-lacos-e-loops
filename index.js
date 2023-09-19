// MARIANA FERNANDES DE OLIVEIRA
// Exercícios de interpretação de código
// 1.
// enquanto i for menor que 5, a variável 'valor' deverá somar ela com i;
// resultado impresso no console será 10;

// 2. 
// a) 19, 21, 23, 25, 27, 30;
// b) 

// 3. 
// *
// **
// ***
// ****

// Exercícios de escrita de código

// 1.

let quantidade = Number(prompt("Quantos bichos de estimação você tem?"));
let nomePets = [];

function temPets(numero) {
    if (quantidade === 0) {
        console.log('Que pena Você pode adotar um pet!');
    } else {
        let i = 0;
        while (i < quantidade)  {
            let nomeDoPet = prompt("Digite o nome do seu pet");
            nomePets.push(nomeDoPet);
            i++
                    }
    }
}

temPets(quantidade);
console.log(nomePets);

// 2.

let arrayOriginal = [10,20,30,40,50,60,77,99,100];

// a)
function imprimirValores(arr) {
    let i = 0;
    while (i < arr.length) {
    console.log(arr[i])
    i++
}
}

imprimirValores(arrayOriginal);


// b)
function dividirValores(arr) {
    let i = 0;
    while (i < arr.length) {
    let divisao = arr[i] / 10;
    console.log(divisao);
    i++
    }
}

dividirValores(arrayOriginal);

// c)

function definirNumerosPares(arr) {
    let i = 0;
    let arrayPares = [];
    while (i < arr.length) {
        if (Boolean(arr[i] % 2 === 0)){
            arrayPares.push(arr[i]);
        }
    i++
    }
    console.log(arrayPares);
}
definirNumerosPares(arrayOriginal)

// d)

function criarFrases(arr) {
    let i = 0;
    let arrayFrases = [];
    while (i < arr.length) {
        let frase = `O elemento do index ${i} é: ${arr[i]}`
        arrayFrases[i] = frase;
    i++
    }
    console.log(arrayFrases)
}

criarFrases(arrayOriginal);

// e)

function definirMaiorEMenor(arr) {
    let valorMaximo = 0;
    let valorMinimo = 999;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > valorMaximo) {
            valorMaximo = arr[i];
        } if  (arr[i] < valorMinimo) {
            valorMinimo = arr[i];
        }
        i++  
    }
    console.log(`O maior valor é ${valorMaximo} e o menor é ${valorMinimo}`);
    }

definirMaiorEMenor(arrayOriginal);

// Desafios
// 1.

let numeroPrimeiroJogador = Number(prompt("Primeiro jogador, insira um número"));

function imprimirPlay (){
  console.log('Vamos jogar')
}

let chuteUsuario = Number(prompt('Segundo jogador, chute um número'));
let contador = 0;

function descobrirNumero (num){
    while (chuteUsuario !== numeroPrimeiroJogador){
    if (chuteUsuario < numeroPrimeiroJogador){
      console.log(`O número chutado foi ${chuteUsuario}`);
      console.log('Errou, o número é maior');
      chuteUsuario = Number(prompt('Segundo jogador, chute outro número'));
      contador += 1;

    } if (chuteUsuario > numeroPrimeiroJogador){
      console.log(`O número chutado foi ${chuteUsuario}`);
      console.log('Errou, o número é menor');
      chuteUsuario = Number(prompt('Segundo jogador, chute outro número'));
      contador += 1;

    } if (chuteUsuario === numeroPrimeiroJogador){
      console.log(`O número chutado foi ${chuteUsuario}`);
      console.log('Acertou!');
      contador += 1;
      console.log(`Número de tentativas ${contador}`);
    }
  }
}
imprimirPlay();
descobrirNumero(numeroPrimeiroJogador);
