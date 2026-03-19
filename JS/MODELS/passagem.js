/**
 * Classe que representa uma Passagem de um cliente dentro do aeroporto.
 * Ela guarda as informações da passagem.
 */
class Passagem {
    
    /**
     * O método construtor é chamado quando uma nova passagem chega ao aeroporto.
     * @param {string} codigoLocalizador - Sequência de 6 letras/num usada para gerenciar a reserva da companhia aérea feita no site.
     * @param {string} conexao - Tempo e aeroportos da conexão.
     * @param {string} detalhesDoVoo - Data, horário, aeroporto de origem e destino.
     */
    constructor(codigoLocalizador, conexao, detalhesDoVoo) {
        // Atributos de identificação
        this.codigoLocalizador = codigoLocalizador;
        this.conexao = conexao;
        this.detalhesDoVoo = detalhesDoVoo;
        
        // Atributo de estado: Toda passagem
        this.estaNoEmbarque = false; 
    }

    /**
     * Ação: confirma a passagem do cliente e permite a entrada dele na aeronave.
     */
    realizarCheckInSeguranca() {
        this.estaNoEmbarque = true;
        console.log(`Está tudo certo com sua passagem, pode continuar.`);
    }
}

// Exporta a classe para ser usada em outros arquivos (Modularização)
export default Passagem;
