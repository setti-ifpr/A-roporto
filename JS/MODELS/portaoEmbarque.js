/**
 * Representa o portão de embarque / verificação de passageiros.
 * É o ponto de encontro final entre o passageiro e o avião.
 */
class PortaoEmbarque {
    
    /**
     * O método construtor é chamado quando um novo avião chega ao aeroporto.
     * @param {string} numeroPessoas - Representa quantas pessoas passaram por ele.
     * @param {string} pessoasRestantes - Representa o numero de passagens compradas - o numero de pessoas embarcadas.
     * @param {string} ID - O número de identificação da PortaoEmbarque.
     */
    constructor(numeroPessoas, pessoasRestantes, ID) {
        // Atributos de identificação
        this.numeroPessoas = numeroPessoas;
        this.pessoasRestantes = pessoasRestantes;
        this.ID = ID;
        
        // Atributo de estado: Todo portão de embarque, conta quantas pessoas passaram por ele, isto começa falando que ainda faltam passageiros
        this.todosPassaram = false; 
    }

    /**
     * Método responsável por simular o portão de embarque.
     * Ação: Muda o status do portão de embarque, para "todos os passageiros abordo".
     */
    realizarVerificacaoPessoas() {
        this.todosPassaram = true;
        console.log(`numero de pessoas foi completamente preenchido. Todos a bordo`);
    }

    /**
     * Método para verificar se o ID está correto.
     * @param {string} novoID - ID corrigido.
     */
    corrigirID(novoID) {
        this.ID = novoID;
        console.log(`ID corrigido: ${this.ID}`);
    }
}

// Exporta a pessoasRestantes para ser usada em outros arquivos (Modularização)
export default PortaoEmbarque;