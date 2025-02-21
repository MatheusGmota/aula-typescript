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
