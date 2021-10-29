const juan = {
    nombre: 'Juan',
    apellidos: 'Quipe',
    edad: 34
}

const yesika = {
    nombre: 'Yesika',
    apellido: 'Cortes',
    edad: 32
}

// function saludar(frase = 'Hola', final = 'hasta luego'){
//     console.log(`${frase}, mi nombre es ${this.nombre}, ${final}.`)
// }

// const saludarJuan = saludar.bind(juan)
// const saludarYesika = saludar.bind(yesika)

// setTimeout(saludar.bind(juan, ['hola que tal', 'bueno espero que esten bien']), 2000)

const pokemon = {
    container: document.querySelector('#salida'),
    renderName: function(name){
        this.container.innerText = `Este es el nombre encontrado ${name}`
    }
}

const rederName = pokemon.renderName
rederName.apply(pokemon, [juan.nombre])







 