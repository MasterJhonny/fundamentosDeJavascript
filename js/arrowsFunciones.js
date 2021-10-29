var Jhonny = {
    nombre: 'Jhonny',
    apellidos: 'Callisaya',
    edad: 27,
    administracion: true,
    programacion: true,
    dj:false,
    cantante:false
}

var Juan = {
    nombre: 'Juan',
    edad: 13
}

const MAYORIA_EDAD = 18;

// primera forma de declarar un funcion
// function validarEdad(persona) {
//     return persona.edad >= MAYORIA_EDAD;
// }

// segunda forma de declarar una funcion.
// var validarEdad = function(persona) {
//     return persona.edad >= MAYORIA_EDAD;
// }

// tercera manera de declarar una function.
// var validarEdad = (persona) => {
//     return persona.edad >= MAYORIA_EDAD;
// }
// cuarta manera declarar un funcion.
// var validarEdad = persona => {
//     return persona.edad >= MAYORIA_EDAD;
// }

// quinta manera de declarar una funcion
// var validarEdad = persona => persona.edad >= MAYORIA_EDAD;

// sexta forma declarar la function validar edad.
var validarEdad = ({edad}) => edad >= MAYORIA_EDAD;

function mayorEdad(persona) {
    if(validarEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad.`);
    } else {
        console.log(`${persona.nombre} es menor de edad.`);
    }
}
// hacer una function de permitir acceso a las personar de mayoresade edad.
// function permitirAcceso(persona) {
//     if(!validarEdad(persona)){
//         console.log(`Acceso denegado`);
//     } else {
//         console.log(`Adelante`);
//     }
// }

// otra forma de hacer la funcion.
// const permitirAcceso = ({edad}) => {
//     if(!validarEdad({edad})){
//         console.log('ACCESO DENEGADO');
//     } else {
//         console.log('ADELANTE');
//     }
// }

// otra forma de hacer la function, si la funcion solo retornara un valor entonces se puede escribir asi.
const permitirAcceso = ({edad}) => !validarEdad({edad})?console.log('ACCESO DENEGADO'):console.log('ADELANTE');