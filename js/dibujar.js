function crearCanvas(SELECTOR, width = 800, height = 400, border = "1px dashed black", backgroundColor = "white") {
    //Crear el canvas
    let section = document.getElementsByClassName(SELECTOR)[0];
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.border = border;
    canvas.style.background = backgroundColor;
    section.appendChild(canvas);
  
    //Creamos el contexto como propiedad del canvas
    canvas.ctx = canvas.getContext("2d");
  
    return canvas;
}


let canvas = crearCanvas('resul');
let ctx = canvas.getContext('2d');
var dw = ['L', 'M', 'M', 'J', 'V', 'S', 'D','L', 'M', 'M', 'J', 'V', 'S', 'D','L', 'M', 'M', 'J', 'V', 'S', 'D','L', 'M', 'M', 'J', 'V', 'S', 'D','L', 'M', 'M', 'J', 'V', 'S', 'D','L', 'M', 'M', 'J', 'V', 'S', 'D','L', 'M', 'M', 'J', 'V', 'S', 'D','L'];



var ancho = canvas.width;
console.log(ancho);
var unidad = ancho/50;
console.log(unidad);

var date = new Date('2021,03,12');
var time = date.getTime();
console.log(time);


var weeks;

function darSema(){
    weeks = (document.getElementById('sema')).value;
    weeks = weeks.replace(/-/g, ',');
    console.log(weeks);
    dibujarFechado(weeks);
}


function dibujar(){
    ctx.fillStyle = "#ffaec0";
    ctx.fillRect(0,20,canvas.width,20);
}

function columnas(){
    var semana = ancho/7;
    console.log(semana);
    for(let i=0; i < 50; i++){
        ctx.beginPath();
        if(i == 7 || i == 14 || i == 21 || i == 28 || i == 35 || i == 42 || i == 49){
            ctx.moveTo(i*unidad, 0);
            ctx.lineTo(i*unidad, canvas.height);
        } else {
            ctx.moveTo(i*unidad, 20);
            ctx.lineTo(i*unidad, canvas.height);
        }
        ctx.stroke();
        ctx.closePath();
    }

}

function dias(){
    
    var valor = unidad/2;
    console.log(dw)
    console.log(ancho);
    for(let i = 0; i < 50; i++){
        ctx.fillStyle = "#151515";
        ctx.font = '10px serif';
        ctx.fillText(`${dw[i]}`, i*unidad+4, 34);
    }
}

function dibujarActiviad(color, x, y, dias){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,unidad*dias,20);
}

function dibujarFechado(fecha){
    var fechaInicio = new Date(fecha);
    var fechado = fecha;
    fechado = fechado.replace(/,/g, '/');
    console.log(fechado);
    
    for(let i = 0; i < 50/7; i++){
        ctx.fillStyle = "#301b3f";
        ctx.font = '12px serif';
        if(i == 0){
            ctx.fillText(`${fechado}`, unidad, 16);
        }
        fechaInicio.setDate(fechaInicio.getDate() + 7);
        // if(fechaInicio.getDate() < 10){
        //     ctx.fillText(`${fechaInicio.getFullYear()}/${(fechaInicio.getMonth() + 1)}/0${fechaInicio.getDate()}`, unidad+=112, 16);
        // } else {
        //     ctx.fillText(`${fechaInicio.getFullYear()}/${(fechaInicio.getMonth() + 1)}/${fechaInicio.getDate()}`, unidad+=112, 16);
        // }
        ctx.fillText(`${fechaInicio.getFullYear()}/${(fechaInicio.getMonth() + 1)<10?`0${(fechaInicio.getMonth() + 1)}`:(fechaInicio.getMonth() + 1)}/${fechaInicio.getDate()< 10?`0${fechaInicio.getDate()}`:fechaInicio.getDate()}`, unidad+=112, 16);
    }
}

// var fechaInicio = new Date('2017-12-20');
// var fechaFin    = new Date('2017-12-28');

// while(fechaFin.getTime() >= fechaInicio.getTime()){
//     fechaInicio.setDate(fechaInicio.getDate() + 1);

//     console.log(fechaInicio.getFullYear() + '/' + (fechaInicio.getMonth() + 1) + '/' + fechaInicio.getDate());
// }

dibujar();
columnas();
dias();




// dibujarActiviad("#be0000", 0, 20,  5);
// dibujarActiviad("#9c3d54", 16*5, 40, 7);
// dibujarActiviad("#9ede73", 16*12, 60, 6);
// dibujarActiviad("#f7ea00", 16*12, 80,  6);
// dibujarActiviad("#c0e218", 16*12, 100, 13);
// dibujarActiviad("#440a67", 16*18, 120, 7);
// dibujarActiviad("#26001b", 16*25, 140,  4);
// dibujarActiviad("#bd2000", 16*29, 160, 9);
// dibujarActiviad("#295939", 16*38, 180, 12);















































// var dd = new Date(2020);
// console.log(dd);


// console.log(`hoy es ${days[day]} ${dia} ${meses[mes]} de ${anio}`);


// function fechaPorDia(año, dia) {
//     var date = new Date(año, 0);
//     return new Date(date.setDate(dia));
// }

// var fecha = fechaPorDia(2021, 1);

// console.log(fecha);

// var feche = date.getUTCDate();
// console.log(feche);






// Date.prototype.getWeekNumber = function () {
//     var d = new Date(+this);  //Creamos un nuevo Date con la fecha de "this".
//     d.setHours(0, 0, 0, 0);   //Nos aseguramos de limpiar la hora.
//     d.setDate(d.getDate() + 4 - (d.getDay() || 7)); // Recorremos los días para asegurarnos de estar "dentro de la semana"
//     //Finalmente, calculamos redondeando y ajustando por la naturaleza de los números en JS:
//     return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
// };

// var ff = new Date(2021, 3, 27).getWeekNumber(); // Resultado: 9

// console.log(ff);