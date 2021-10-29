var personas = [];

function persona(n, a, h, c){
    this.nombre = n;
    this.apellido = a;
    this.altura = h;
    this.cantidadLibros = c;
}

personas.push(new persona('Anival', 'CArvajal', 1.7, 10));
personas.push(new persona('Juan', 'Anival', 1.8, 34));
personas.push(new persona('Aracely', 'Chambi', 1.68, 14));
personas.push(new persona('Victor', 'Lopez', 1.59, 23));
personas.push(new persona('Marcos', 'Montes', 1.72, 20));
personas.push(new persona('Pedro', 'Quispe', 1.69, 30));
personas.push(new persona('Dario', 'Beltran', 1.83, 15));
personas.push(new persona('Rodrigo', 'Quispe', 1.85, 22));


const esAlta = ({altura}) => altura >= 1.8;
const esBaja = ({altura}) => !esAlta({altura});
var personasAltas = personas.filter(esAlta);
var perosnasBajas = personas.filter(esBaja);

// tambnien se puede escribier asi:
// var personasAltas = personas.filter(function(persona){
//     return persona.altura >= 1.8;
// })
const alturaEnCms = persona => ({
    ...persona,
    altura: persona.altura * 100
})
var personasCms = personas.map(alturaEnCms);

console.table(personas);

// var totalLibros = 0;

// for(let i = 0; i < personas.length; i++) {
//     totalLibros = totalLibros + personas[i].cantidadLibros;
// }

// otra  forma mas  prolija de llegar a la misma solucion.

const reducir = (acum, {cantidadLibros}) => acum + cantidadLibros;

var totalLibros = personas.reduce(reducir, 0);

console.log(`Se tiene un total de ${totalLibros} libros.`);