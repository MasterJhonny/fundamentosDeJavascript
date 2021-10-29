var personas = [];

function persona (nombre, apellidos, altura) {
    this.nombre = nombre;
    this.apellido =apellidos;
    this.altura = altura;
}

personas.push(new persona('Jhonny', 'Callisaya', 1.7));
personas.push(new persona('Carlos', 'Munos', 1.72));
personas.push(new persona('Mario', 'Montes', 1.6));
personas.push(new persona('Aracely', 'Chambi', 1.68));
personas.push(new persona('Vania', 'Lopez', 1.58));

// console.time('test');
// for(let i = 0; i < personas.length; i++){
//     console.log(`La altura de ${personas[i].nombre} es de ${personas[i].altura}m.`);
// }
// console.timeEnd('test');
// // otra forma de imprimir la altura de las presonas.
// console.log("Otra forma.");
// console.time('test');
// for(let i = 0, longitud = personas.length; i < longitud; i++){
//     var pers = personas[i];
//     console.log(`La altura de ${pers.nombre} es de ${pers.altura}mts.`);
// }
// console.timeEnd('test');

var gatos = [];

function gato(n, c, p){
    this.nombre = n;
    this.color = c;
    this.peso = p;
}

gatos.push(new gato('Felino', 'Blanco', 3.5));
gatos.push(new gato('Gatino', 'Negro', 3.6));
gatos.push(new gato('Manchita', 'Marron', 4));
gatos.push(new gato('Gatuno', 'Cafe', 4.2));
gatos.push(new gato('Tiguesito', 'Nieve', 4.5));
gatos.push(new gato('Gatuno', 'Beis', 4.6));
gatos.push(new gato('Veloz', 'Amarrillo', 4.1));
gatos.push(new gato('Chavela', 'Plomo', 5));


const esGordo = ({peso}) => peso > 4
const esFlaco = ({peso}) => peso <= 4
var gatosGordos = gatos.filter(esGordo)
var gatosFlacos = gatos.filter(esFlaco)

const pesoEnGramos = (gato) => ({
    ...gato,
    peso: gato.peso * 100
})

var gatosEnGramos = gatos.map(pesoEnGramos);

//console.table(gatosEnGramos);

console.table('Ahora sumaremos el peso de los gatos.');
console.table(gatos);

const sumarPesoGatos = (a, {peso}) => a + peso;

var pesoTotal = gatos.reduce(sumarPesoGatos, 0);

console.log(`El peso tolal de los gatos es de ${pesoTotal} kg.`)

// const esAltas = ({altura}) => altura > 1.68;

// console.time('test');
// for(let i = 0; i < gatos.length; i++){
//     console.log(`El gato ${gatos[i].nombre} pesa ${gatos[i].peso}kg.`);
// }
// console.timeEnd('test');
// console.log('personas altas');
// var personasAltas = personas.filter(esAltas);


// console.log('otra forma:');
// console.time('test');
// for(let i = 0, log = gatos.length; i < log; i++){
//     var g = gatos[i];
//     console.log(`El gato ${g.nombre} pesa ${g.peso}kilogramos.`);
// }
// console.timeEnd('test');

// var fun = [];

// var demo1 = () => console.log('Hola');
// var demo2= () => console.log('Mundo');
// var demo3 = () => console.log('!');

// fun = [demo1, demo2, demo3];

// for(let i = 0, log = fun.length; i < log; i++) {
//     fun[i]();
// }