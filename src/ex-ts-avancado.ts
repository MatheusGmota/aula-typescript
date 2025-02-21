// Exercício 1
// Crie uma interface chamada Carro, que contenha as seguintes propriedades:

interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

let meuCarro: Carro = {
    marca: "Honda", 
    modelo: "HRV", 
    ano: 2020, 
    motor: "v8", 
}

console.log("Marca:", meuCarro.marca, "- Modelo:", meuCarro.modelo, "- Ano:", meuCarro.ano, "- Motor:", meuCarro.motor);

// Exercício 2
// Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
// Depois, implemente essa função e teste com diferentes valores.

interface Multiplicacao {
    (a: number, b: number): number;
}

const produto: Multiplicacao = (x, y) => x * y

let exemplos: number[] = [produto(2,2), produto(54,2), produto(23,3), produto(7, 5)]

exemplos.forEach((n, i) => console.log(`Ex-${i+1}:`, n))

// Exercício 3
// Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
// Teste a função com um array de números e um array de strings.

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();  
}

const lista1 = [1,2,3,4,5,6]
const lista2 = ['a','b','c','d','e','f']

console.log("Array invertido", inverterArray(lista1));
console.log("Array invertido",inverterArray(lista2));