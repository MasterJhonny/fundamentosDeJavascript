var actividades = [];

function actividad(n, p, t, ti, tf){
    this.nombre = n;
    this.prede = p;
    this.tiempo = t;
    this.tini = ti;
    this.tfin = tf;
}

actividades.push(new actividad('A', '', '19', 0, 19));
actividades.push(new actividad('B', 'A', '7', 19, 26));
actividades.push(new actividad('C', 'B', '10'));
actividades.push(new actividad('D', 'A', '3'));
actividades.push(new actividad('E', 'C', '2'));
actividades.push(new actividad('F', 'E', '1'));
actividades.push(new actividad('G', 'D', '12'));
actividades.push(new actividad('H', 'A', '10'));
actividades.push(new actividad('I', 'F', '3'));
actividades.push(new actividad('J', 'I', '2'));



console.log(actividades);

console.log(actividades[2]);

var pre = actividades.filter(function(act) {
    return act.nombre < actividades[2].nombre;
});

for (let j = 0; j < pre.length; j++){
    if(actividades[2].prede === pre[j].nombre){
        actividades[2].tini = pre[j].tfin;
        console.log(pre[j].tfin);
        actividades[2].tfin = actividades[2].tini + parseInt(actividades[2].tiempo);
    }
}

console.log(actividades[2]);
