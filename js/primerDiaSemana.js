var weeks;
var demo;
var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
function darSema(){
    weeks = (document.getElementById('sema')).value;
    weeks = weeks.replace(/-/g, ',');
    // demo = primerDiaSemana(weeks);
    demo = primerD(weeks);
    console.log(demo);
}

function diasEnUnMes(mes, año) {
	return new Date(año, mes, 0).getDate();
}

function primerDiaSemana(fecha) {
    var date = new Date(fecha);
    var anio = date.getFullYear();
    var mes = date.getMonth();
    var dia = date.getDate();
    var numDia = date.getDay();
    if(numDia > 0){
        var primerDia = dia - (numDia-1);
        if(primerDia < 0){
            var antes = diasEnUnMes(mes,anio);
            if(mes == 0){
                var an = `${anio-1},${12},${antes}`;
                var nuevo = new Date(an);
                var numDi = nuevo.getDay();  
                var priDia = antes - (numDi-1);
                return `${priDia}-${12}-${anio-1}`;
            } else {
                var an = `${anio},${mes-1},${antes}`;
                var nuevo = new Date(an);
                var numDi = nuevo.getDay();  
                var priDia = antes - (numDi-1);
                return `${priDia}-${mes+1}-${anio}`;
            }
            
        } if(primerDia == 0) {
            return `${1}-${mes+1}-${anio}`;
        } else {
            if(primerDia > 0) {  
                return `${primerDia}-${mes+1}-${anio}`;
            }
        }
    } else {
        var primerDia = dia - 6;
        if(primerDia < 0) {
            var antes = diasEnUnMes(mes,anio);
            if(mes == 0 && numDia == 0) {
                var an = `${anio-1},${12},${antes}`;
                var nuevo = new Date(an);
                var numDi = nuevo.getDay(); 
                var primeDia = antes - (numDi-1);
                return `${primeDia}-${12}-${anio-1}`;
            } else {
                var an = `${anio},${mes-1},${antes}`;
                var nuevo = new Date(an);
                var numDi = nuevo.getDay(); 
                var primeDia = antes - (numDi-1);
                return `${primeDia}-${mes+1}-${anio}`
            }
        } else {
            return `${primerDia}-${mes+1}-${anio}`;
        }
    }
}

function primerDay(fecha) {
    var inicio = new Date(fecha);
    var numDia = inicio.getDay();
    if(numDia != 0) {
        inicio.setDate(inicio.getDate()-(numDia-1));
        if(inicio.getDate() < 10){
            return `${inicio.getFullYear()},${(inicio.getMonth() + 1)},0${inicio.getDate()}`;
        } else {
            return `${inicio.getFullYear()},${(inicio.getMonth() + 1)},${inicio.getDate()}`;
        }
    } else {
        inicio.setDate(inicio.getDate()-6);
        if(inicio.getDate() < 10){
            return `${inicio.getFullYear()},${(inicio.getMonth() + 1)},0${inicio.getDate()}`;
        } else {
            return `${inicio.getFullYear()},${(inicio.getMonth() + 1)},${inicio.getDate()}`;
        }
    }
}


function primerD(fecha) {
    var inicio = new Date(fecha);
    var numDia = inicio.getDay();
    if(numDia != 0) {
        inicio.setDate(inicio.getDate()-(numDia-1));
        return `${inicio.getFullYear()},${(inicio.getMonth() + 1)<10?`0${(inicio.getMonth() + 1)}`:(inicio.getMonth() + 1)},${inicio.getDate()<10?`0${inicio.getDate()}`:inicio.getDate()}`;
    } else {
        inicio.setDate(inicio.getDate()-6);
        return `${inicio.getFullYear()},${(inicio.getMonth() + 1)<10?`0${(inicio.getMonth() + 1)}`:(inicio.getMonth() + 1)},${inicio.getDate()<10?`0${inicio.getDate()}`:inicio.getDate()}`;
    }
}

