/**
 * Classe que representa uma bagagem dentro do aeroporto.
 * Ela guarda as informações da bagagem do cliente.
 */
class Bagagem {
    
    /**
     * O método construtor é chamado quando um novo passageiro chega ao aeroporto.
     * @param {string} cor - O cor da bagagem.
     * @param {string} peso - O peso da bagagem.
     * @param {string} dono - O dono da bagagem.
     */
    constructor(cor, peso, dono) {
        // Atributos de identificação
        this.cor = cor;
        this.peso = peso;
        this.dono = dono;
        
        // Atributo de estado: Toda bagagem começa fora do embarque
        this.estaNoEmbarque = false; 
    }

    /**
     * Ação: confirma o embarque da sua bagagem, yipeeee
     */
    realizarCheckInSeguranca() {
        this.estaNoEmbarque = true;
        console.log(`Sua bagagem foi embarcada`);
    }
}

// Exporta a classe para ser usada em outros arquivos (Modularização)
export default Bagagem;
