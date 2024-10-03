


function ready(){
    home()

    document.getElementById("home").addEventListener("click",home)
    document.getElementById("sobre").addEventListener("click",sobre)
    document.getElementById("contato").addEventListener("click",contato)

}


function home() {
    const section = document.getElementById("sessao")
    section.innerHTML = `
        <h1>Página home</h1>
    `
}


function sobre() {
    const section = document.getElementById("sessao")
    section.innerHTML = `
        <h1>Página sobre</h1>
    `
}



function contato() {
    const section = document.getElementById("sessao")
    section.innerHTML = `
       <form>
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" required><br><br>
        <label for="email">Email:</label>
        <input type="tel" id="email" name="email"><br><br>
        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone"><br><br>
        <button type="button" id="submitButton">Enviar</button>
       </form>
    `

    const button = document.getElementById("submitButton").addEventListener("click", submitForms)
}



function submitForms() {
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const telefone = document.getElementById("telefone")

    const contato = {nome: nome.value, email:email.value, telefone:telefone.value}
    console.log(contato)

    const section = document.getElementById("sessao")
    section.innerHTML = `
       <table>
        <tr>
            <th>Nome</th>
            <td>${contato.nome}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>${contato.email}</td>
        </tr>
        <tr>
            <th>Telefone</th>
            <td>${contato.telefone}</td>
        </tr>
       </table>
    `
}