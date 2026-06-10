import Voo from './Voo.js';

export default class Aeroporto {
    constructor(nomeDaBase) {
        this.nome = nomeDaBase;
        this.listaDeVoos = [];
    }

    adicionarVooNoRadar(novoVoo) {
        
        console.log(`Voo ${novoVoo.codigo} adicionado ao radar do aeroporto ${this.nome}.`);
    }

    buscarVoo(codigoProcurado) {
        
    }
}
