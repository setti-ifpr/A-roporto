class Voo {
    constructor(codigo, companhia) {
        this.codigo = codigo;
        this.companhia = companhia;
    }
}

class Portao {
    constructor(numero) {
        this.numero = numero;
        this.vooAcoplado = null;
        this.isOcupado = false;
    }

    acoplarVoo(aviao) {
        if (this.isOcupado == true) {
            console.error("O voo está ocupado, it's over");
        }
        this.acoplarVoo = aviao;
        this.isOcupado = false;
        console.log(`✅ Sucesso: O voo ${aviao.codigo} acoplou no Portão ${this.numero}.`);
    }

    libertarPortao(){
        console.log(`Liberando o Portão ${this.numero} (O voo ${this.vooAcoplado.codigo} partiu)...`);

        this.acoplarVoo = null;
        this.isOcupado = false;
    }
}
const terminalDePortoes = [
    new Portao("01"),
    new Portao("02"),
    new Portao("03")
];

let vooLatam = new Voo("LA-111", "Latam");
let vooGol = new Voo("G3-222", "Gol");
let vooAzul = new Voo("AD-333", "Azul");

try {
    console.log("--- INICIANDO OPERAÇÃO NO PÁTIO ---");
    terminalDePortoes[0].acoplarVoo(vooLatam);
    terminalDePortoes[0].acoplarVoo(vooAzul);
    terminalDePortoes[1].acoplarVoo(vooGol);

} catch (erro) {
    console.error("🚨 ALERTA NA TORRE DE CONTROLE:", erro.message);
}
