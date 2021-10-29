// var contador = 0;

// const llueve = () => Math.random() < 0.5;

// do{
//     contador++;
// }while(!llueve());

// console.log(`Fui a ver si llovia ${contador} ${contador>1?'veces':'vez'}`);

var contador = 0;

const siLlueve = () => Math.random() > 0.5;

do {
    contador++;
}while(siLlueve());

console.log(`Fui a ver si llovia ${contador} ${contador>1?'veces':'vez'}.`);

