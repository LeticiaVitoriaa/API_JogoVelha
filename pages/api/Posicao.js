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


