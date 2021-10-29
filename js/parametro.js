var actividades = [];
var actividades1 = [];

function actividad(n, p, t){
    this.nombre = n;
    this.prede = p;
    this.tiempo = t;
}

actividades.push(new actividad('A', '', 8));
actividades.push(new actividad('B', 'A', 7));
actividades.push(new actividad('C', 'A,B', 5));
actividades.push(new actividad('D', 'A,B,C', 4));
actividades.push(new actividad('E', 'A,B,C,D', 2));
actividades.push(new actividad('E', 'A,B,C,D,C', 1));
actividades.push(new actividad('E', 'A,B,C,D,C,E', 12));
actividades.push(new actividad('E', 'A,B,C,D,C,E,F', 10));
actividades.push(new actividad('E', 'A,B,C,D,C,E,F,G', 3));
actividades.push(new actividad('E', 'A,B,C,D,C,E,F,G,H', 9));



console.log(actividades);


var nueva = actividades[5].prede.split(',');

console.log(nueva);

var Jhonny = {
    nombre: "Jhonny",
    curso: "Desarrollo Web",
    apellido: "Callisaya",
    edad: 27 
}

function cumple(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}
// var demo = cumple(Jhonny);
// console.log(demo);

function anadir(actividad){
    return {
        ...actividad,
        tiempo: actividad.tiempo + 1
    }
}

for(let i=0; i<actividades.length;i++){
   actividades1.push(anadir(actividades[i]));
}