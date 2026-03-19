/**
 * Classe que representa a companhia aerea.
 * Ela guarda as informações da companhia.
 */
class CompanhiaAerea {
    
    /**
     * O método construtor é chamado quando um novo CompanhiaAerea chega ao aeroporto.
     * @param {string} nome - O nome completo da companhia aerea.
     * @param {string} avaliacao - Avaliação formal da companhia.
     * @param {string} localCriacao - Onde a companhia foi criada.
     */
    constructor(nome, avaliacao, localCriacao) {
        // Atributos de identificação
        this.nome = nome;
        this.avaliacao = avaliacao;
        this.localCriacao = localCriacao;
        
        // Atributo de estado: Toda companhia começa fora de filiação com o aeroporto
        this.filiacao = false; 
    }

    /**
     * Método responsável por simular se a companhia está, ou não filiada com o aeroporto.
     * Ação: Muda o status da companhia para filiação.
     */
    realizarCheckInFiliacao() {
        this.filiacao = true;
        console.log(`A companhia aerea ${this.nome} está filiada ao aeroporto.`);
    }

    /**
     * Método para atualizar os dados da CompanhiaAerea caso haja erro de digitação.
     * @param {string} novoNome - O nome corrigido.
     */
    corrigirNome(novoNome) {
        this.nome = novoNome;
        console.log(`Nome atualizado para: ${this.nome}`);
    }
}

// Exporta a classe para ser usada em outros arquivos (Modularização)
export default CompanhiaAerea;
