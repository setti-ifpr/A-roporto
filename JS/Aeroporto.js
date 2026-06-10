import Voo from './Voo.js';

export default class Aeroporto {
    constructor(nomeDaBase) {
        this.nome = nomeDaBase;
        this.listaDeVoos = [];
    }

    adicionarVooNoRadar(novoVoo) {
        const listaDeVoos = []
        listaDeVoos.push("")

        console.log(`Voo ${novoVoo.codigo} adicionado ao radar do aeroporto ${this.nome}.`);
        const found = listaDeVoos.find
    }

    buscarVoo(codigoProcurado) {
        
    }
}
