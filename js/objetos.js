var personas = [];

function persona(n, e){
    this.nombre = n;
    this.edad = e;    
}


// funcion de convertir el nombre a mayusculas.
function nombreMayus(persona) {
    console.log(persona.nombre.toUpperCase());
}

// for(let i = 0; i < 2; i++){
//     var n = prompt(`Ingrese en nombre de la persona #${i+1}`);
//     var e = prompt(`Ingrese la edad de ${n}`);
//     personas.push(new persona(n, e));
// }

for(let i = 0; i < personas.length; i++){
    nombreMa(personas[i]);
}

// otra forma de declarar esta funcion es de esta forma.

function nombreMa({nombre}) {
    console.log(nombre.toUpperCase());
}

// Objetos.
// Daclarando Objetos.

var Jhonny = {
    nombre: "Jhonny",
    curso: "Desarrollo Web",
    apellido: "Callisaya",
    edad: 27 
}

nombreMa(Jhonny); // JHONNY


// Destructurar Objetos.
// hacer un funcion que imprima.
// Hola me llamo nombre y tengo edad años.

function saludar(persona){
    var {nombre, edad}  = persona;
    console.log(`Hola mi nombre es ${nombre} y mi edad es ${edad}`);
}

saludito(Jhonny);

// otra forma de hacer la funcion.

function saludito(persona){
    var {nombre: a, edad: b} = persona;
    console.log(`Hola mi nombre es ${a} y mi edad es ${b}`);
}

function saludito(persona){
    persona = {nombre: a, edad: b} = persona;
    console.log(`Hola mi nombre es ${a} y mi edad es ${b}`);
}

// Clases de Parametros.
// Parametros Como referencia o como valor.

function cumpleaños(persona){
    persona.edad += 1;
}

function cumple(persona){
    return {
        ...persona,
        edad: persona.edad + 1;
    }
}
