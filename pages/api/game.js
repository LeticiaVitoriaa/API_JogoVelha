import { useRouter } from 'next/router';

//Cria nova partida, retornando id da partida
function NovaPartida(id) {
    const route = useRouter(), NovoTab;
    const id = route.query.id;
    NovoTab = Array.from(Array(9).keys());
    for (let i = 0; i < 3; i++) {
        for (let j = 0; i < 3; i++) {
            NovoTab[i][j] = " ";
        }
    }

    return <div> Id da nova partida: {id}</div>
}
export default NovaPartida;

//Sorteia o Jogador que inicia a partida
function SorteiaJogador() {
    let firstPlayer;
    firstPlayer = Math.random("X", "O");

    return firstPlayer;
}

