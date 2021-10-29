const juan = {
    nombre: 'Juan',
    apellidos: 'Quispe',
    edad: 34
}

const yesika = {
    nombre: 'Yesika',
    apellidos: 'cortes',
    edad: 32
}

// let nombre = 'Maria'

function saludar(frase = 'Hola', ciudad = 'La paz'){
    // let nombre = 'pepe'
    console.log(`${frase}, my nombre es ${this.nombre}, soy de ${ciudad}`)
}
// debugger

// let saludarjuan = saludar.bind(juan, 'hola buey')
// let saludarYesika = saludar.bind(yesika)
// let saludarMaria = saludar.bind(nombre)
// saludarjuan()

// setTimeout(saludar.bind(yesika, 'hola che'), 3000)
// saludar.call(juan, 'hola como estan')

// saludar.apply(juan, ['holi como estan', 'El Alto'])

// let valor = find('live')
// console.log(valor)

const pokemon = {
    container: document.getElementById('salida'),
    renderName: function(name, age) {
        this.container.innerText += `El nombre esncontrado es ${name} and age is ${age}\n`
    },
    renderType: function(tipo){
        this.container.innerText += `El tipo es de ${tipo}\n`
    }
}
 

// pokemon.renderName('pedro')
// pokemon.renderType('persona')
// const renderName = pokemon.renderName.bind(pokemon, juan.nombre)
// renderName()
const renderName = pokemon.renderName
renderName.apply(pokemon, ['juan', 34])
const renderType = pokemon.renderType('persona')