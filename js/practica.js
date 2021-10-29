var actividades = [];

function actividad(n, p, t, ti, tf){
    this.nombre = n;
    this.prede = p;
    this.tiempo = t;
}

actividades.push(new actividad('A', '', 19));
actividades.push(new actividad('B', 'A', 6));
actividades.push(new actividad('C', 'A,B', 10));
actividades.push(new actividad('D', 'A,B,C', 3));
actividades.push(new actividad('E', 'A,B,C,D', 2));
actividades.push(new actividad('F', 'A,B,C,D,E', 3));
actividades.push(new actividad('G', 'A,B,C,D,E,F', 4));
actividades.push(new actividad('H', 'A,B,C,D,E,F,G', 5));
actividades.push(new actividad('I', 'A,B,C,D,E,F,G,H', 6));
actividades.push(new actividad('J', 'A,B,C,D,E,F,G,H,I', 7));



console.log(actividades);

// var demo = actividades.filter(function(fana){    

//     return for(let i = 0; i < nueva.length; i++){   fana.nombre == nueva[i];}
// });

// var fana = actividades.map(function(actividad){
//     return actividad.nombre;
// });

var predes = actividades[2].prede.split(',');

console.log(predes);

//------------------------------------------------------------------------------------------------------------

function sacarMayor(antecesores, act) {
    var nuevapres = [];

    function nuevapre(n, v, t, ti, tf){
        this.nombre = n;
        this.valor = v;
        this.tiempo = t;
        this.tini = ti;
        this.tfin = tf;
    }

    for(let i = 0; i < antecesores.length; i++){
        act.forEach(function(actividad){
            nuevapres.push(new nuevapre(actividad.nombre, actividad.nombre == antecesores[i], actividad.tiempo, actividad.tini, actividad.tfin));
        }); 
    }
    console.log(nuevapres);

    var definido = nuevapres.filter(function(actividad){
        return actividad.valor == true;
    });

    console.log(definido);

    var final = definido.map(function(actividad){
        return actividad.tfin;
    });

    console.log(final);

    var numero = [];
    
    do{
        var nuevo = [];
        function girar(lista){
            for(let i = 0; i < lista.length; i++) {
                if(i < lista.length-1){
                    if(lista[i] >= lista[i+1]){
                        nuevo.push(lista[i]);
                    } 
                } else {
                    if(lista[i] >= lista[0]){
                        nuevo.push(lista[i]);
                    }
                }
            }
        
            if(nuevo.length == 2){
                for(let i = 0; i < nuevo.length; i++) {
                    if(i == 0){
                        if(nuevo[i] == nuevo[i+1]){
                            nuevo.pop();
                        }
                    }
                }
            }
            return nuevo;
        }

        if(numero.length > 1){
            numero = girar(numero);
        } else {
            numero = girar(final);
        }

    }while(numero.length != 1);
    return numero;
}

var res = sacarMayor(predes, actividades);

//-----------------------------------------------------------------------------------------------------------------

// var numeroMayor = [];

// for(let i = 0; i < numero.length; i++) {
//     if(i < numero.length-1){
//         if(numero[i] > numero[i+1]){
//             console.log(numero[i+1]);
//             numeroMayor.push(numero[i+1]);
//         } 
//     } else {
//         if(numero[i] > numero[0]){
//             console.log(numero[0]);
//             numeroMayor.push(numero[0]);
//         }
//     }
// }

// console.log(numeroMayor);

// 

// for(let i = 0; i < numero.length; i++) {
//     if(i < numero.length-1){
//         if(numero[i] == numero[i+1]){
//             console.log(numero[i]);
//             numeroMayor.push(numero[i]);
//         } 
//     } else {
//         if(numero[i] == numero[0]){
//             console.log(numero[i]);
//             numeroMayor.push(numero[i]);
//         }
//     }
// }

// console.log(numeroMayor);

// var num = [];

// for(let i = 0; i < numeroMayor.length; i++) {
//     if(i < numeroMayor.length-1){
//         if(numeroMayor[i] > numeroMayor[i+1]){
//             console.log(numeroMayor[i]);
//             num.push(numeroMayor[i]);
//         } else {
//             console.log(numeroMayor[i+1]);
//             num.push(numeroMayor[i+1]);
//         }
//     } else {
//         if(numeroMayor[i] > numeroMayor[0]){
//             console.log(numeroMayor[i]);
//             num.push(numeroMayor[i]);
//         } else {
//             console.log(numeroMayor[0]);
//             num.push(numeroMayor[0]);
//         }
//     }
// }

// console.log(num);

// var numfin = [];

// for(let i = 0; i < num.length; i++) {
//     if(i < num.length-1){
//         if(num[i] == num[i+1]){
//             console.log(num[i]);
//             numfin.push(num[i]);
//         } 
//     } else {
//         if(num[i] == num[0]){
//             console.log(num[i]);
//             numfin.push(num[i]);
//         }
//     }
// }

// console.log(numfin);








