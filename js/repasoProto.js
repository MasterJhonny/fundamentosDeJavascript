var personas = [];

function Herencia(hijo, padre){
    var fn = function(){}
    fn.prototype = padre.prototype;
    hijo.prototype = new fn;
    hijo.prototype.constructor = hijo;
}

function Persona(n, a, h){
    this.nombre = n;
    this.apellido = a;
    this.altura = h;
}

Persona.prototype.saludar = function(){
    console.log(`Hi, my name is ${this.nombre} ${this.apellido}.`);
}

Persona.prototype.esAlto = function() {
    return this.altura >= 1.8;
}
 
function Desarrollador(n, a, h, e){
    // this.nombre = n;
    // this.apellido = a;
    Persona.call(this, n, a, h);
    this.heramienta = e;
}

Herencia(Desarrollador, Persona);

Desarrollador.prototype.saludar = function(){
    console.log(`hello, my name is ${this.nombre} ${this.apellido} I am deveopers.`);
}

Desarrollador.prototype.herra = function(){
    console.log(`La herramienta que utiliso es: ${this.heramienta}`);
}

// personas.push(new Persona('Pedro', 'Quispe', 1.8));
// personas.push(new Persona('Pablo', 'Tarso', 1.89));
// personas.push(new Persona('Ricardo', 'Samano', 1.67));
// personas.push(new Persona('Dario', 'Lopez', 1.74));
// personas.push(new Persona('Rodrigo', 'Enriques', 1.7));
// personas.push(new Persona('Marcos', 'Esteban', 1.83));

personas.push(new Persona('Pedro', 'Quispe', 1.8));
personas.push(new Desarrollador('Pablo', 'Tarso', 1.89, 'Python'));

console.table(personas);

