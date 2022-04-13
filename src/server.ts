// 1ª questão:

const Prompt = require("prompt-sync")();

    let num1 = 1;
    let num2 = 4;
    let soma = 0;


    for (let i = num1; i < num2; i++) {
        soma = soma + i;
    }

    console.log(soma);




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