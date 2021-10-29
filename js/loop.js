var Jhonny = {
    nombre: 'Jhonny',
    edad: 27,
    peso: 75
}

var Juan = {
    nombre: 'Juan',
    edad: 13,
    peso:40
}

const DIAS_ANIO = 365;
const INCREMENTO = 0.2;

var aumentarPeso = (persona) => persona.peso += INCREMENTO;
var adelgazar = (persona) => persona.peso -= INCREMENTO;

console.log(`El peso de ${Jhonny.nombre} es de ${Jhonny.peso}kg.`);

for(var i = 1; i < DIAS_ANIO; i++) {
    var valor  = Math.random();
    //console.log(valor);
    if(valor < 0.25){
        aumentarPeso(Jhonny);
    } else if(valor < 0.5){
        adelgazar(Jhonny);
    }
}


console.log(`Al final del año el peso de ${Jhonny.nombre} es de ${Jhonny.peso.toFixed(1)}kg.`);