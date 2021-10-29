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
function profecionesVer(persona){
    console.log(`${persona.nombre} realiza lo siguiente:`);
    if(persona.administracion){
        console.log(`Estudia la carrera de administracion de empresas`);
    }
    if(persona.programacion){
        console.log(`Aprende apacionadamente programacion`);
    }
    if(persona.dj){
        console.log(`Es ingeniero de sonido`);
    }
    if(persona.cantante){
        console.log(`Su voz es increible canta de manera asonbrosa`)
    }
}




function imprimirProfeciones(persona) {
    console.log(`${persona.nombre} es:`);
    if(persona.Administracion){
        console.log(`Estudia la carrera de administracion de Empresas`);
    } else {
        console.log(`No es administrador`)
    }
    if(persona.programacion){
        console.log(`Aprende Programacion en Platzi`);
    }
    if(persona.dj){
        console.log(`Es dj`);
    }
    if(persona.cantante){
        console.log(`Es cantante`);
    }
}



// desafio, Imprimir un a funcion si es mayor de edad.
// pimera forma de funcion.
function mayorEdad(persona){
    if(persona.edad >= 18){
        var fana = `${persona.nombre} es mayor de edad`
    } else {
        var fana = `${persona.nombre} es menor de edad`
    }
    return console.log(fana);
}

// segunda forma.
function edadMayor(persona) {
    console.log(`${persona.nombre} es ${persona.edad>=18?'mayor':'menor'} de edad.`);
}

// otras foormas de realizar la funcion.

const MAYORIA_DE_EDAD = 18;


// funcion para validar edad.
function validarEdad (persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

// otra manerea de escribir la funcion validar eded.
// validarMayorEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }
// otra manerea de escribir la funcion validar edad con arrow function.

// const validarMayorEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD;
// }

// evolucionde de la forma de escribir la funcion validar edad.


// const validarMayorEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

// otra forma podria ser.

const validarMayorEdad = ({edad}) => edad >= MAYORIA_DE_EDAD; // recomendable practicar.

function mayorEdad(persona) {
    if(validarMayorEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad.`);
    } else {
        console.log(`${persona.nombre} es menor de edad.`);
    }
}

// funcion permitir acceso.
function permitirAcceso(persona){
    if(!validarMayorEdad(persona)) {
        console.log('ACCESO DENEGADO');
    }
}


// escribirlo de forma arrows function.
