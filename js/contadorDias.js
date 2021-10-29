var actividades = [];

function actividad(n, p, t, ti, tf){
    this.nombre = n;
    this.prede = p;
    this.tiempo = t;
}

actividades.push(new actividad('A', '', 19));
actividades.push(new actividad('B', 'A', 6));
actividades.push(new actividad('C', 'A,B', 10));
actividades.push(new actividad('D', 'A,B,C', 3));
actividades.push(new actividad('E', 'A,B,C,D', 2));
actividades.push(new actividad('F', 'A,B,C,D,E', 3));
actividades.push(new actividad('G', 'A,B,C,D,E,F', 4));
actividades.push(new actividad('H', 'A,B,C,D,E,F,G', 5));
actividades.push(new actividad('I', 'A,B,C,D,E,F,G,H', 6));
actividades.push(new actividad('J', 'A,B,C,D,E,F,G,H,I', 7));


var weeks;
var diasferiados = [];

function feriado(fecha) {
    this.fecha = fecha;
}

diasferiados.push(new feriado('2021,04,07'));
diasferiados.push(new feriado('2021,04,15'));
diasferiados.push(new feriado('2021,04,23'));
diasferiados.push(new feriado('2021,05,03'));
function darSema(){
    weeks = (document.getElementById('sema')).value;
    weeks = weeks.replace(/-/g, ',');
    //console.log(`Fecha inicial ${weeks}`);
    // se itera la duracion de las actividades.
    for(let i=0; i<actividades.length; i++){
        if(i == 0){
            var demo = fechaFinalActividad(weeks, actividades[i].tiempo);
            console.log(`Fecha final ${demo}`);
        } else {
            var demo = fechaFinalActividad(demo, actividades[i].tiempo);
            console.log(`Fecha final ${demo}`);
        }
    }
}


// var boll = true;
// var darDia = (date) => {
//     if(boll){
//         date.setDate(date.getDate() + 1);
//         boll = false;
//     }
//     console.log(`${date.getFullYear()},${(date.getMonth() + 1)<10?`0${(date.getMonth() + 1)}`:(date.getMonth() + 1)},${date.getDate()<10?`0${date.getDate()}`:date.getDate()}`);
//     var nohabil = date.getDay();
//     console.log(nohabil);
//     return nohabil > 0 && nohabil < 6;
// }

// var fechaFinalActividad = (fechaI,duracion) => {
//     var tiempo = duracion - 1;
//     var date = new Date(fechaI);
//     var contador = 0;
//     while(tiempo != contador){
//         //var fech = `${date.getFullYear()},${(date.getMonth() + 1)<10?`0${(date.getMonth() + 1)}`:(date.getMonth() + 1)},${date.getDate()<10?`0${date.getDate()}`:date.getDate()}`;
//         //console.log(fech);
//         if(darDia(date)){
//             if(!contador-1){
//                 date.setDate(date.getDate() + 1);
//             }
//             contador++;
//         } else {
//             date.setDate(date.getDate() + 3);
//             contador++;
//         }
//     }
//     return `${date.getFullYear()},${(date.getMonth() + 1)<10?`0${(date.getMonth() + 1)}`:(date.getMonth() + 1)},${date.getDate()<10?`0${date.getDate()}`:date.getDate()}`;
// }

// funcion para feriados y domingos.
var darDia = (date) => {
    var dias = date.getDay();
    return dias != 0;

}

var darFeriado = (date) => {
    var dia = `${date.getFullYear()},${(date.getMonth() + 1)<10?`0${(date.getMonth() + 1)}`:(date.getMonth() + 1)},${date.getDate()<10?`0${date.getDate()}`:date.getDate()}`;
    console.log(dia);
    for(let i = 0; i < diasferiados.length; i++) {
        if(dia === diasferiados[i].fecha){
            diasferiados[i].valor = 1;
        } else {
            diasferiados[i].valor = 0;
        }
    } 
    let validacion = diasferiados.filter(function(feriado){
        return feriado.valor != 0;
    }); 
    return validacion.length == 0;
}

var fechaFinalActividad = (fechaI,duracion) => {
    var tiempo = duracion - 1;
    var date = new Date(fechaI);
    var contador = 0;
    do{
        date.setDate(date.getDate() + 1);
        if(darDia(date) && darFeriado(date)){
            contador++;
        }
    }while(tiempo != contador);
    return `${date.getFullYear()},${(date.getMonth() + 1)<10?`0${(date.getMonth() + 1)}`:(date.getMonth() + 1)},${date.getDate()<10?`0${date.getDate()}`:date.getDate()}`;
}