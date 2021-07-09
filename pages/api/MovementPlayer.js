function PosicaoJogador() {
    const posicoes = document.getElementsByTagName('input');
    const player, x, y;

    for (let i = 0; i < 9; i++) {
        if (e.target.value == ' ') {
            posicoes[i].addEventListener(click, (e) => {
                x = this.x;
                y = this.y;
            });
        }
    }

    NovoTab = Array.from(Array(9).keys()); const posX = [0, 1, 2], posY = [0, 1, 2];
    for(let i = 0; i <= 9; i--) {

    }
}

function Posicao() {
    const x, y;
    this.x
}
function TurnoErrado() {
    let alerta = document.createElement("p");
    alerta.setAttribute("role", "alert");
    let alertaTurnoErrado = document.createTextNode("Não é turno do jogador!");
    alerta.appendChild(alertaTurnoErrado);
    document.body.appendChild(alertaTurnoErrado);
}

function PartidaInesistente() {
    let alerta = document.createElement("p");
    alerta.setAttribute("role", "alert");
    let alertaPartidaInex = document.createTextNode("Partida não encontrada");
    alerta.appendChild(alertaPartidaInex);
    document.body.appendChild(alertaPartidaInex);
}

function PartidaFinalizada() {
    let alerta = document.createElement("p");
    alerta.setAttribute("role", "alert");
    let alertaPartidaFinal = document.createTextNode("Partida finalizada");
    alerta.appendChild(alertaPartidaFinal);
    document.body.appendChild(alertaPartidaFinal);
}

