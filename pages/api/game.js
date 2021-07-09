import { useRouter } from 'next/router';

//Cria nova partida, retornando id da partida
function NovaPartida() {
    const route = useRouter();
    const id = route.query.id;
    const quadrados;
    NovoTab = Array.from(Array(9).keys());

    return <div> Id da nova partida: {id}</div>
}
export default NovaPartida;

//Sorteia o Jogador que inicia a partida
function SorteiaJogador() {
    let firstPlayer;
    firstPlayer = Math.random("X", "O");

    return firstPlayer;
}

export default SorteiaJogador;
