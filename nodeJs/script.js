// Pegando os objetos da tela
const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById('p_nivel')
const p_press = document.getElementById('p_press')
const btn_texto = document.getElementById('btn_texto')

// Criando uma função para obter os dados
const obterDados = () => {
    const endpoint = "https://69334016-ae61-4a59-aa22-6d0b487cd479-00-11km50llv55ph.spock.replit.dev/808033"
    fetch(endpoint)

        .then(res => res.json())
        .then(dados => {
            console.log(dados)
            p_temp.innerHTML = "Temperatura: " + dados.temperatura
            p_nivel.innerHTML = "Nivel: " + dados.nivel
            p_press.innerHTML = "Pressão: " + dados.pressao
        })
}

// Criando um intervalo de 3 segundos para mostrar os dados
// let intervalo =setInterval(obterDados, 3000)

let dados = {
    nome:"Jonas",
    Canal:"CFBCursos",
    curso:"JavaScript"
}

let cabecalho = {
    method: "POST",
    body:JSON.stringify(dados)
}

// Função para gravar os dados 
const gravarDados=()=>{
    const endpoint = "https://69334016-ae61-4a59-aa22-6d0b487cd479-00-11km50llv55ph.spock.replit.dev/808033"
    fetch(endpoint, cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

// Criado uma evento de click para chamar a função gravar dados
btn_texto.addEventListener("click", (evt)=>{
    gravarDados()
})