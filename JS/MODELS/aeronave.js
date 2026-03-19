/**
 * Classe que representa as características do avião.
 * Ela guarda as informações do avião.
 */
class Aeronave {
    
    /**
     * O método construtor é chamado quando um novo passageiro chega ao aeroporto.
     * @param {string} cor - A cor do avião.
     * @param {string} marca -A marca do avião.
     * @param {string} pista - A pista onde o avião está localizado.
     */
    constructor(cor, marca, pista) {
        // Atributos de identificação
        this.cor = cor;
        this.marca = marca;
        this.pista = pista;
        
        // Atributo de estado: O avião está pousado
        this.estaNoEmbarque = false; 
    }

    /**
     * Ação: o avião está decolando
     */
    realizarCheckInSeguranca() {
        this.estaNoEmbarque = true;
        console.log(`O avião decolou, bom voo.`);
    }

}

// Exporta a classe para ser usada em outros arquivos (Modularização)
export default Aeronave;
