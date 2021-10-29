// function deno(){
//     console.log('a');

//     setTimeout(()=>console.log('b'), 0);

//     console.log('c');
// }
// deno();

// console.log('#');

// setTimeout(()=>console.log('ya..'), 2000);

// for(var i=0; i < 1000000000; i++){
 
// }
var numfilas = new Array(3);
var  letras = new Array();

for(var i=0; i < 3; i++){
    letras.push(numfilas);
}

for(var i=0; i < 3; i++){
    for(var j=0; j < 3; j++){
        letras[i][j] = 1;
    }
}

console.log(letras)
// demo.push(2)
// demo.push(3)
// demo.push(5)
// demo.push(4)