

function ChanceJogador() {
    const vez = new Boolean();
    const jogador1 = new Boolean(); const jogador2 = new Boolean();

    const v = new SuaVez();

    if (jogador1.v.getVez(true)) {
        jogador1(true);
        jogador2(false);
    }
    else {
        jogador1(false);
        jogador2(true);
    }
}

function MovimentoJogador() {
    const v = new Object();
}

class SuaVez {
    constructor(vez) {
        this.vez = vez;
    }

    SuaVez() {

    }

    get getVez() {
        return this.vez;
    }

    set setVez(vez) {
        const vez = new Boolean();
        this.vez = vez;
    }

}

/*
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
*/
