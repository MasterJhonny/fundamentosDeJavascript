function crearSaludo(fraseFinal){
    return function(nombre){
        console.log(`hi ${nombre} ${fraseFinal}`)
    }
}


const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('buey')
const saludoBoliviano = crearSaludo('bro')

saludoArgentino('Jhonny')
saludoMexicano('Jhonny')
saludoBoliviano('Jhonny')