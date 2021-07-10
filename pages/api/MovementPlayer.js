import EncontraPosicao from "./Posicao";
import NovaPartida from "./[id]";

const vencedor = new Boolean;
// vez do jogador pode receber true ou false
class SuaVez {
    constructor(vez) {
        this.vez = vez;
    }

    SuaVez() {

    }

    get getVez() {
        return this.vez;
    }

    /**
     * @param {any} vez
     */
    set setVez(vez) {
        const vez = new Boolean();
        this.vez = vez;
    }
}

function ChanceJogador() {
    const vez = new Boolean(), jogador;
    const jogador1 = new Boolean(); const jogador2 = new Boolean();

    const v = new SuaVez();

    if (jogador1.v.getVez(true)) {
        jogador1(true) = jogador;
        jogador2(false);
        return jogador;
    }
    else {
        jogador1(false);
        jogador2(true);
        return jogador2;
    }
}

function MovimentoJogador() {
    const pos = new EncontraPosicao(), jogador;
    const v = new SuaVez();
    const quadrados = document.getElementsByTagName('input');

    for (let i = 0; i < 9; i++) {
        quadrados[i].addEventListener('click', (e) => {
            if (quadrados != ' ') {
                QuadradoPreenchido();
            }
            else if (jogador.v.getVez(false)) {
                alert("Não é turno do jogador!");
                throw new MensagemErro("Não é turno do jogador!");
            }
            else if (NovaPartida() == null) {
                alert("Partida não encontrada");
                throw new MensagemErro("Partida não encontrada");
            }
            else if (VerificaVencedor() == true) {
                alert("Partida finalizada.");
                throw new MensagemErro("Partida finalizada.");
            }
            else if (VerificaVencedor() == false) {
                alert("Partida finalizada.");
                throw new MensagemErro("Partida finalizada.");
            }
        });
    }
    return pos.getX, pos.getY;
}

function VerificaVencedor(vencedor) {
    const linha0 = Array.from(Array(9).keys());
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (linha0[i][0] && linha0[i][1] && linha0[i][2]) {
                return vencedor = true;
            }
            else if (linha0[0][j] && linha0[1][j] && linha0[2][j]) {
                return vencedor = true;
            }
            else if (linha0[0][0] && linha0[1][1] && linha0[2][2] || linha0[0][2] && linha0[1][1] && linha0[2][0]) {
                return vencedor = true;
            }
            else if (vencedor == false) {
                return draw;
            }
            else return false;
        }
    }
}
class MensagemErro {
    constructor(messagem) {
        this.mensagem = mensagem;
        this.name = "MensagemErro";
    }
}

function QuadradoPreenchido() {
    let alerta = document.createElement("p");
    alerta.setAttribute("role", "alert");
    let alertaQuadPreen = document.createTextNode("Posição Ocupada");
    alerta.appendChild(alertaQuadPreen);
    document.body.appendChild(alertaQuadPreen);

    return alertaQuadPreen;
}
