var perros = [];

function perro(n, r, p){
    this.nombre = n;
    this.raza = r;
    this.peso = p;
}

perros.push(new perro('Spot', 'normal', 27));
perros.push(new perro('Perla', 'normal', 29));
perros.push(new perro('Masha', 'pequeñin', 32));
perros.push(new perro('Choco', 'cachuchin', 34));
perros.push(new perro('Roky', 'raro', 40));
perros.push(new perro('Oso', 'lobillo', 33));
perros.push(new perro('Foren', 'normal', 30));

console.table(perros);

// const pesoEnGramos = (perro) => ({
//     ...perro,
//     peso: perro.peso * 1000
// })

// var perroGramos = perros.map(pesoEnGramos);

// console.table(perroGramos);

const sumarPeso = (a, {peso}) => a + peso;

var pesoTotal =  perros.reduce(sumarPeso, 0);

console.log(`El peso total de los cachorros es de ${pesoTotal}Kg.`);