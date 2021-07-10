let x, y;
class EncontraPosicao {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    EncontraPosicao() {

    }

    get getX() {
        return this.x;
    }

    get getY() {
        return this.y;
    }

    /**
     * @param {any} x
     */
    set setX(x) {
        this.x = x;
    }

    /**
     * @param {any} y
     */
    set setY(y) {
        this.y = y;
    }
}
export default EncontraPosicao;

function PosicaoNaMatriz() {
    const posicao = new EncontraPosicao();
    if (posicao.getX() == 0 && posicao.getY() == 0) {
        return new posicao(2, 0);
    }

    if (posicao.getX() == 0 && posicao.getY() == 1) {
        return new posicao(1, 0);
    }

    if (posicao.getX() == 0 && posicao.getY() == 2) {
        return new posicao(0, 0);
    }

    if (posicao.getX() == 1 && posicao.getY() == 0) {
        return new posicao(2, 1);
    }

    if (posicao.getX() == 1 && posicao.getY() == 1) {
        return new posicao(1, 1);
    }

    if (posicao.getX() == 1 && posicao.getY() == 2) {
        return new posicao(0, 1);
    }

    if (posicao.getX() == 2 && posicao.getY() == 0) {
        return new posicao(2, 2);
    }

    if (posicao.getX() == 2 && posicao.getY() == 1) {
        return new posicao(1, 2);
    }

    if (posicao.getX() == 2 && posicao.getY() == 2) {
        return new posicao(0, 2);
    }

    else {
        return new posicao(posicao.getX(), posicao.getY());
    }
}

