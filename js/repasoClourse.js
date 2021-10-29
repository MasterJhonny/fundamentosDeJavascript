function crearSaludos(finalFrase){
    return function(nombre){
        console.log(`hola ${nombre} ${finalFrase}`)
    }
}

const saludoArgentino = crearSaludos('che')
const saludoColombiano = crearSaludos('parse')
const saludoMexicano = crearSaludos('buey')

// saludoArgentino('juan')
// saludoColombiano('juan')
// saludoMexicano('Juan')

// clausulas..

const saludar = function(nombre){
    return `Hola ${nombre}`
}

const a = 'hey!'
function global(){
    const b = 'que '
    function local(){
        const c = 'tal?'
        return a + b + c
    }
    return local
}


const miContador = function() {
    let _contador = 0
    function incrementar(){
        return ++_contador
    }
    function decrementar(){
        return --_contador
    }
    function valor(){
        return _contador
    }
    return {
        incrementar,
        decrementar,
        valor
    }
}();

miContador.valor() // 0
miContador.incrementar() // 1
miContador.incrementar() // 2
miContador.incrementar() // 3
miContador.decrementar() // 2
miContador.valor() // 2 
