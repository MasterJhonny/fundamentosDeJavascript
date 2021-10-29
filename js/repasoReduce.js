var frutas = [];
function fruti(n, c, p){
    this.nombre = n;
    this.color = c;
    this.peso = p;
}

frutas.push(new fruti('PERA', 'verde', 80));
frutas.push(new fruti('NARANJA', 'naranja', 100));
frutas.push(new fruti('MANZANA', 'roja', 110));
frutas.push(new fruti('SANDIA', 'verde', 400));
frutas.push(new fruti('PLATANO', 'amarrillo', 70));
frutas.push(new fruti('DURASNO', 'naranja', 40));
frutas.push(new fruti('UVA', 'amarrillo', 10));
frutas.push(new fruti('LIMON', 'verde', 30));

console.table(frutas);

const sumarPeso = (a, {peso}) => a + peso;

var pesoFrutas = frutas.reduce(sumarPeso, 0);

console.log(`El peso total de las frutas es de ${pesoFrutas} gramos.`);