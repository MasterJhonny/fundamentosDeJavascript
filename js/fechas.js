function diasCumplidos(fecha1, fecha2){
    let unDia = 1000 * 60 * 60 *24;
    let diferencia = Math.abs(fecha1 - fecha2)
    return Math.floor(diferencia/unDia)
}

let hoy = new Date()
let nacimiento = new Date(1993,11,22)
