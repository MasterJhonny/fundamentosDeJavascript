var Jhonny = {
    nombre: 'Jhonny',
    edad: 27,
    peso: 75
}

const DIAS_ANIO = 365;
const INCREMENTO = 0.2;
// const META = Jhonny.peso -3;

var aumentarPeso = (persona) => persona.peso += INCREMENTO;
var adelgazar = (persona) => persona.peso -= INCREMENTO;

// var comeMucho = () => Math.random() < 0.3;
// var haceDeporte = () => Math.random() < 0.4;




// while(Jhonny.peso > META){
//     if(comeMucho()){
//         aumentarPeso(Jhonny);
//     }
//     if(haceDeporte()){
//         adelgazar(Jhonny);
//     }
//     dias++;
//     //console.log(dias);
// }

const comeMucho = () => Math.random() < 0.3;
const haceDeporte = () => Math.random() < 0.4;

var dias = 0;

const META = Jhonny.peso - 3;

console.log(`El peso de ${Jhonny.nombre} es de ${Jhonny.peso}kg.`);
console.log(`La meta es de llegar a pesar ${META}kg.`);

while(Jhonny.peso > META){
    if(comeMucho()){
        aumentarPeso(Jhonny);
    }
    if(haceDeporte()){
        adelgazar(Jhonny);
    }
    dias++;
}
console.log(`Despues de la ${dias} días ${Jhonny.nombre} pesa ${Jhonny.peso.toFixed(1)}kg.`);

console.log('los numrro son:');
var num = 2
while(num < 129){
    console.log(num);
    num *=2
}


