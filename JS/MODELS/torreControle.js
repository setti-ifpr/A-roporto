/**
 * Classe que representa um Passageiro físico dentro do aeroporto.
 * Ela guarda as informações pessoais e o status do cliente.
 */
class TorreControle {
    
    /**
     * O método construtor é chamado quando um novo passageiro chega ao aeroporto.
     *@param {string} nome - O nome completo da companhia aerea.
     * @param {string} avaliacao - Avaliação formal da companhia.
     * @param {string} localCriacao - Onde a companhia foi criada.
     */
    constructor(nome, avaliacao, localCriacao) {
        // Atributos de identificação
        this.nome = nome;
        this.avaliacao = avaliacao;
        this.localCriacao = localCriacao;
        
        // Atributo de estado: Todo passageiro começa fora da área de embarque
        this.estaNoEmbarque = false; 
    }

    /**
     * Método responsável por simular a passagem do cliente pela catraca de segurança.
     * Ação: Muda o status do passageiro para indicar que ele está pronto para voar.
     */
    realizarCheckInSeguranca() {
        this.estaNoEmbarque = true;
        console.log(`A companhia aérea ${this.nome} está afiliada.`);
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
export default TorreControle;
