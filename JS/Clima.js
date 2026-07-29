//meu arquivo clima.js
// 
const urlSatelite = "https://api.open-meteo.com/v1/forecast?latitude=-24.41&longitude=-53.52&current_weather=true"

async function climaAtual() {
    try {
        console.log("Conectando aos satélites")
        let resposta = await fetch(urlSatelite)
        let dadosJson = (await resposta.json())
        
        let temperaturaAtual = dadosJson.current_weather.temperature

        document.getElementById("painelClima").innerText = `Temperatura Local: ${temperaturaAtual}°C 🌡️`;
        document.getElementById("painelClima").style.color = "cyan";

    }
    catch(erro){
        console.error("Falha na comunicação com o satélite:", erro);
        document.getElementById("painelClima").innerText = "Satélite Offline ❌";
        document.getElementById("painelClima").style.color = "red";

    }

}
climaAtual()
