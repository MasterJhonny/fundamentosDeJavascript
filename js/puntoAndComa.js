// primer caso donde usar punto y coma
console.log('hola mi nombre es sacha')
;[1,2,3,4,5].forEach(e => console.log(e * 3))

// segundo caso donde usar punto y coma
let nombre = "juan"
console.log('hola mundo')
;`${nombre} es un desarrollador`

// caso especial donde hacer un enter es como un punto y coma.

function calcularDoble(numero){
    return {
        original: numero,
        doble: numero * 2
    }
}