//const prompt = require("prompt-sync")();

// import { performance } from "perf_hooks";

//let x = prompt("Informe um número: ");
//let y = prompt("Informe um número: ");
//let num1 = Number(x);
//let num2 = Number(y);

//let soma = num1+num2;
//console.log("Soma: s ${soma}");

//let somatotal = 0
//for (let i = 1; i < 11; i++) {
//    let x = prompt(`Informe ${i} número: `);
//    somatotal=somatotal+Number(x);
//}
//console.log(`soma total: ${somatotal}`);
//if (somatotal > 0){
//    console.log(`valor positivo`); 
//}else if(somatotal < 0){
//    console.log(`valor negativo`);
//}else{
//    console.log(`valor neutro`);
//}

//let numero = prompt("digite um numero: ");

//while(numero !=0){
//    
//    let quadrado = numero **2
//    console.log(`o numero : ${quadrado}`)
//    numero(prompt('digite um numero:'))
//}


//     let numero;
//     let nquadra;

// do {
//     numero = prompt("digite um numero: ")
//     nquadra = numero * numero
//     console.log(`O numero quadrado é: ${nquadra}`)     

// } while (numero !=0);
// let nome = prompt("informe um numero: ")

// switch (nome) {
//     case '1':
//         console.log("aluno")

//     break;
//         case '2':
//         console.log("professor")
//     break;
//         case '3': 
//         console.log("cood")
//     break;
//         case '4':
//         console.log("fucao")
//     break;
// }

// let fruits1: string[] = ['apple','orange','banana'];
//     console.log(fruits1)
// let fruits2: Array<string> = ['apple','orange','banana'];
//     console.log(fruits2)
// let arr = [1,3,'apple','orange','banana',true,false];
//     console.log(arr)

// let fruit: string[] =[]; //['apple','orange','banana'];

//     for(let i = 0; i < 6; i++){
//         fruit[i] = prompt("informe as frutas: ");

//         //console.log(fruit[i]);
//     }
//     console.log("as frutas são: ",fruit)



// for(let i=0 ; i < fruit.length ;i++){
//     if (i==0){
//     console.log("a fruta primaria é: ", fruit[i])
//     }else if(i==2){
//         console.log("a fruta secundaria é: ", fruit[i])

//     }else{
//         console.log("a fruta terciaria é: ", fruit[i])
//    }


//}
class pessoas{
    idade: number;
    nome: string;

    constructor(idade:number,nome:string){
        this.idade = idade
        this.nome = nome
    }
idade_meses(){
    return this.idade * 12
    }

} 

let t1 = new pessoas(55, "matheus");
console.log('a idade:  ',t1.idade);
console.log('nome: ', t1.nome);
console.log('idade em meses: ', t1.idade_meses());


function newFunction() {
    const Prompt = require("prompt-sync")();

    let num1 = 0;
    let num2 = 0;
    let soma = 0;

    do {
        num1 = parseInt(Prompt('digite um numero 1: '));
        num2 = parseInt(Prompt('digite um numero 2: '));
    } while (num1 < 0 && num2 < 0);




    for (let i = num1; i < num2; i++) {
        soma = soma + i;
    }

    console.log(soma);
}