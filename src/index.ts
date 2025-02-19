let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

// Excercio 1
// Crie um array de números e imprima a soma dos valores.
let lista: number[] = [10 , 2, 8];

let soma: number = lista.reduce((valor, valorAtual) => valor + valorAtual, 0)

console.log(soma);

// Excercio 2
// Crie uma função que recebe um nome e retorna uma mensagem personalizada.
function mensagemPersonalizada(nome: string): string {
    return `Olá ${nome}, seja bem vindo(a).`
}

console.log(mensagemPersonalizada("Matheus"));
