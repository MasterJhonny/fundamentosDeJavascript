function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24; 
    let diferencia = Math.abs(fecha1 - fecha2);
    console.log(diferencia)
    console.log(unDia)
    return Math.floor(diferencia/unDia)
}
// un dia tiene 86400000 milisegundos
const today = new Date()
const ayer = new Date(2021, 5, 2)

// recursividad.....

function divisionEntera(dividendo, divisor) {
    if(dividendo < divisor){
        return 0
    }
    return 1 + divisionEntera(dividendo - divisor, divisor)
}