// 1ª questão:

// import { SourceMap } from "module";

// const Prompt = require("prompt-sync")();

function sum(num1:number,num2:number) {
    let n1 = Number(num1)
    let Soma = 0 -n1;
    if(num1 < 0){
        console.log('Os numeros não podem ser negativos, tente novamente !')
    }else if(num2 < 0){
        console.log('os numeros não podem ser negativos tente novamente')
    }else{
        for (let i = n1; i< num2; i++){
            Soma += i
        }
        console.log(Soma);
    }
}
sum(5, 10);







// 2ª questão:
// class pessoas{
//     idade: number;
//     nome: string;

//     constructor(idade:number,nome:string){
//         this.idade = idade
//         this.nome = nome
//     }
// idade_meses(){
//     return this.idade * 12
//     }

// } 

// let t1 = new pessoas(55, "matheus");
// console.log('a idade:  ',t1.idade);
// console.log('nome: ', t1.nome);
// console.log('idade em meses: ', t1.idade_meses());