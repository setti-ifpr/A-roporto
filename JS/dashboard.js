const frotaDoDia = [
    { codigo: "G3-11", status: "Confirmado", passageiros: 120 },
    { codigo: "LA-22", status: "Atrasado", passageiros: 200 },
    { codigo: "AZ-33", status: "Emergência", passageiros: 90 },
    { codigo: "AF-44", status: "Atrasado", passageiros: 300 }
];

console.log("=== PAINEL GERENCIAL DA DIRETORIA ===");

let totalPassageiros = frotaDoDia.reduce((soma, voo) => soma + voo.passageiros, 0);
console.log(`📊 TOTAL: Temos ${totalPassageiros} passageiros operando hoje.`);

let qtdAtrasados = (frotaDoDia.filter((voo) => voo.status === "Atrasado")).length;
console.log(`⚠️ ALERTA: Temos ${qtdAtrasados} voos atrasados no momento!`);

function verificarEmergencia(listaDeVoos) {
    let temEmergencia = listaDeVoos.find(voo => voo.status === "Emergência");


    if (temEmergencia) {
        let sirene = new Audio("./JS/alerta-de-mamaco.mp3");
        sirene.play();
        console.error(`🚨 EMERGÊNCIA DECLARADA NO VOO ${temEmergencia.codigo}! 🚨`);
    }
    else {
        console.log(`Senm Emergências, YAAAYYYYY!!!`);
    }
}

const botao = document.getElementById("botaoAlerta")
    botao.addEventListener('click', () => {
        verificarEmergencia(frotaDoDia)
})

