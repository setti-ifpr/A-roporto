
/**
 * Classe Voo - Representa um voo no sistema de Aeroporto Inteligente
 * Foco em Programação Orientada a Objetos (POO)
 */
class Voo {
    // O construtor é o método chamado quando criamos um novo objeto (instância)
    constructor(codigo, origem, destino, horario) {
        // Usamos 'this' para referenciar os atributos do objeto que está sendo criado
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.horario = horario;
        this.status = "Em Solo"; // Status inicial padrão
    }

    // Método para atualizar o status do voo e refletir na tela (DOM)
    atualizarStatus(novoStatus) {
        this.status = novoStatus;
        
        // Selecionamos o elemento na tela e atualizamos seu texto
        const displayStatus = document.getElementById('display-status');
        displayStatus.innerText = this.status;

        // Lógica visual simples para mudar a cor do status
        displayStatus.className = 'status-badge'; // Reseta classes
        if (this.status === "Voando") {
            displayStatus.classList.add('status-voando');
            document.getElementById('aviao-img').style.transform = 'translateY(-20px) rotate(-10deg)';
        } else if (this.status === "Em Solo") {
            displayStatus.classList.add('status-em-solo');
            document.getElementById('aviao-img').style.transform = 'translateY(0) rotate(0)';
        } else if (this.status === "Atrasado") {
            displayStatus.classList.add('status-atrasado');
        }
    }

    // Método para decolar o voo
    decolar() {
        if (this.status !== "Voando") {
            console.log(`Voo ${this.codigo} decolando de ${this.origem}...`);
            this.atualizarStatus("Voando");
        } else {
            alert("O voo já está no ar!");
        }
    }

    // Método para pousar o voo
    pousar() {
        if (this.status === "Voando") {
            console.log(`Voo ${this.codigo} pousando em ${this.destino}...`);
            this.atualizarStatus("Em Solo");
        } else {
            alert("O voo já está em solo!");
        }
    }

    // Método para exibir as informações iniciais no painel
    exibirPainel() {
        document.getElementById('display-codigo').innerText = this.codigo;
        document.getElementById('display-origem').innerText = this.origem;
        document.getElementById('display-destino').innerText = this.destino;
        document.getElementById('display-horario').innerText = this.horario;
        this.atualizarStatus(this.status);
    }
}

// --- INSTANCIAÇÃO E INTERAÇÃO ---

// 1. Criamos um novo objeto da classe Voo
const meuVoo = new Voo("G3-1502", "São Paulo (GRU)", "Rio de Janeiro (GIG)", "14:30");

// 2. Exibimos os dados iniciais na tela
meuVoo.exibirPainel();

// 3. Adicionamos "escutadores de eventos" (event listeners) aos botões do HTML
document.getElementById('btn-decolar').addEventListener('click', () => {
    meuVoo.decolar();
});

document.getElementById('btn-pousar').addEventListener('click', () => {
    meuVoo.pousar();
});

document.getElementById('btn-atrasar').addEventListener('click', () => {
    meuVoo.atualizarStatus("Atrasado");
});
Manus