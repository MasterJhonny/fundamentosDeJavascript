var weeks;
function finalDiaSemana(fechaini, totalDiasTrans) {
    

    var date = new Date(fechaini);
    date.setDate(date.getDate()+(totalDiasTrans-1));
    var salida = `${date.getFullYear()},${(date.getMonth() + 1)<10?`0${(date.getMonth() + 1)}`:(date.getMonth() + 1)},${date.getDate()<10?`0${date.getDate()}`:date.getDate()}`;
    var diapimer = primerDia(salida);
    var findate = new Date(diapimer);
    findate.setDate(findate.getDate() + 6);
    return `${findate.getFullYear()},${(findate.getMonth() + 1)<10?`0${(findate.getMonth() + 1)}`:(findate.getMonth() + 1)},${findate.getDate()<10?`0${findate.getDate()}`:findate.getDate()}`;
}

function darSema(){
    weeks = (document.getElementById('sema')).value;
    weeks = weeks.replace(/-/g, ',');
    demo = finalDiaSemana(weeks, 10);
    console.log(demo);
}

 

function primerDia(fecha) {
    var inicio = new Date(fecha);
    var numDia = inicio.getDay();
    if(numDia != 0){
        inicio.setDate(inicio.getDate()-(numDia-1));
        return `${inicio.getFullYear()},${(inicio.getMonth() + 1)<10?`0${(inicio.getMonth() + 1)}`:(inicio.getMonth() + 1)},${inicio.getDate()<10?`0${inicio.getDate()}`:inicio.getDate()}`;
    } else {
        inicio.setDate(inicio.getDate()-6);
        return `${inicio.getFullYear()},${(inicio.getMonth() + 1)<10?`0${(inicio.getMonth() + 1)}`:(inicio.getMonth() + 1)},${inicio.getDate()<10?`0${inicio.getDate()}`:inicio.getDate()}`;
    }
}

// para despues.
// var calcularOtrosDatos = () => {
            
// }