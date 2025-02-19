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

// Excercio 3
// Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.
class Carro {
    private marca: string;
    private modelo: string;
    private ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    apresentar(): string {
        return `Marca: ${this.marca} - Modelo ${this.modelo} - Ano ${this.ano}`
    } 
}

let carro: Carro = new Carro('Honda', 'Civic', 2018)

console.log(carro.apresentar());
