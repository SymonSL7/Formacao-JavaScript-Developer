const lista = [
    {
        nome: "Symon"
    },
    {
        nome: "Luan"
    },
    {
        nome: "Vitoria"
    },
    {
        nome: "Sabrina"
    }

];

console.log(
    lista
        .map(e => e.nome)
        .filter((e) => e.startsWith('S'))
        .join('; ')
)