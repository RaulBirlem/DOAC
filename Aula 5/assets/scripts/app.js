
const data = [
    {nome: "Pedro", idade:24},
    {nome: "João", idade:22},
    {nome: "Gabriel", idade:23}
]

function init() {
    const minhaLista = document.getElementById("minhaLista")
    minhaLista.innerHTML = list(data)
}



function list(data){
    return data.map(item => {
        return (
            `
            <li>${item.nome} - ${item.idade}</li>
            `
        )
    }).join("")
}


