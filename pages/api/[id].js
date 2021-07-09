export default function NovaPartida(request, reponse) {
    console.log(request.query.id);
    reponse.json({id:request.query.id});
}