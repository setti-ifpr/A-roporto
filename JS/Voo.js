class Voo {
    constructor(codigo, origem, destino) {
        // Validação de Dados (Encontro 11)
        if (origem === destino) {
            // Isso gera um ERRO VERMELHO e paralisa a criação do objeto!
            throw new Error(`Operação Negada: O voo ${codigo} não pode ter a origem igual ao destino!`);
        }
        if (codigo === "") {
            throw new Error("Erro de Segurança: Todo voo precisa de um código.");
        }

        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
    }
}
export default Voo;

