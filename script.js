class Voo {
  constructor(codigo, origem, destino) {
    this.codigo = codigo;
    this.origem = origem;
    this.destino = destino;
    this.altitude = 0;
    this.status = "No Pátio";
  }

  decolar() {
    if (this.altitude === 0) {
      this.altitude = 10000;
      this.status = "Em Voo";
    }
  }

  pousar() {
    this.altitude = 0;
    this.status = "Pousado";
  }
}

class JatoExecutivo extends Voo {
  constructor(codigo, origem, destino) {
    super(codigo, origem, destino);
    this.modoSupersonico = false;
  }

  ativarSupersonico() {
    if (this.status === "Em Voo") {
      this.modoSupersonico = true;
      this.altitude = 50000;
      this.status = "Voo Supersônico";
    }
  }

  desativarSupersonico() {
    if (this.modoSupersonico) {
      this.modoSupersonico = false;
      this.altitude = 10000;
      this.status = "Em Voo";
    }
  }
}

class VooCarga extends Voo {
  constructor(codigo, origem, destino, capacidade) {
    super(codigo, origem, destino);
    this.capacidadeMaxima = capacidade;
    this.cargaAtual = 0;
  }

  embarcarCarga(peso) {
    if (this.status === "No Pátio" || this.status === "Pousado") {
      if (this.cargaAtual + peso <= this.capacidadeMaxima) {
        this.cargaAtual += peso;
        return true;
      } else {
        alert("Capacidade máxima excedida!");
        return false;
      }
    } else {
      alert("Não é possível carregar em pleno voo!");
      return false;
    }
  }
}

// --- CONTROLE DA INTERFACE (DOM) ---

let voos = [];
let tipoAtual = 'jato';

// Funções globais para o HTML
window.setTipo = (tipo) => {
  tipoAtual = tipo;
  document.getElementById('tab-jato').classList.toggle('active', tipo === 'jato');
  document.getElementById('tab-carga').classList.toggle('active', tipo === 'carga');
  document.getElementById('campo-carga').style.display = tipo === 'carga' ? 'block' : 'none';
};

window.adicionarVoo = () => {
  const codigo = document.getElementById('codigo').value;
  const origem = document.getElementById('origem').value;
  const destino = document.getElementById('destino').value;

  if (!codigo || !origem || !destino) {
    alert("Preencha todos os campos!");
    return;
  }

  let novoVoo;
  if (tipoAtual === 'jato') {
    novoVoo = new JatoExecutivo(codigo, origem, destino);
  } else {
    const capacidade = parseInt(document.getElementById('capacidade').value);
    novoVoo = new VooCarga(codigo, origem, destino, capacidade);
  }

  voos.push(novoVoo);
  renderizarVoos();
  
  // Limpar campos
  document.getElementById('codigo').value = '';
  document.getElementById('origem').value = '';
  document.getElementById('destino').value = '';
};

window.executarAcao = (index, acao) => {
  const voo = voos[index];
  
  if (acao === 'decolar') voo.decolar();
  if (acao === 'pousar') voo.pousar();
  if (acao === 'supersonico') {
    if (voo.modoSupersonico) voo.desativarSupersonico();
    else voo.ativarSupersonico();
  }
  if (acao === 'embarcar') {
    const peso = parseInt(prompt("Quanto peso (kg) deseja embarcar?"));
    if (!isNaN(peso)) voo.embarcarCarga(peso);
  }

  renderizarVoos();
};

function renderizarVoos() {
  const lista = document.getElementById('lista-voos');
  
  if (voos.length === 0) {
    lista.innerHTML = '<p class="empty-msg">Nenhum voo registrado.</p>';
    return;
  }

  lista.innerHTML = voos.map((voo, index) => {
    const isJato = voo instanceof JatoExecutivo;
    
    return `
      <div class="voo-card ${isJato ? 'jato' : 'carga'}">
        <span class="badge">${isJato ? 'Jato Executivo' : 'Cargueiro'}</span>
        <div class="voo-header">
          <div class="voo-info">
            <h3>${voo.codigo}</h3>
            <p>${voo.origem} ➔ ${voo.destino}</p>
          </div>
          <div class="voo-stats">
            <div class="stat-item">
              <span class="stat-label">Status</span>
              <span class="stat-value" style="color: ${voo.status.includes('Supersônico') ? '#ff9800' : '#1a73e8'}">
                ${voo.status}
              </span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Altitude</span>
              <span class="stat-value">${voo.altitude.toLocaleString()} ft</span>
            </div>
            ${!isJato ? `
              <div class="stat-item">
                <span class="stat-label">Carga</span>
                <span class="stat-value">${voo.cargaAtual} / ${voo.capacidadeMaxima} kg</span>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="voo-actions">
          <button class="btn-sm" onclick="executarAcao(${index}, 'decolar')" ${voo.altitude > 0 ? 'disabled' : ''}>🛫 Decolar</button>
          <button class="btn-sm" onclick="executarAcao(${index}, 'pousar')" ${voo.altitude === 0 ? 'disabled' : ''}>🛬 Pousar</button>
          
          ${isJato ? `
            <button class="btn-sm accent" onclick="executarAcao(${index}, 'supersonico')" ${voo.status === 'No Pátio' || voo.status === 'Pousado' ? 'disabled' : ''}>
              ${voo.modoSupersonico ? '🛑 Modo Normal' : '⚡ Supersônico'}
            </button>
          ` : `
            <button class="btn-sm success" onclick="executarAcao(${index}, 'embarcar')" ${voo.altitude > 0 ? 'disabled' : ''}>📦 Embarcar Carga</button>
          `}
        </div>
      </div>
    `;
  }).join('');
}
