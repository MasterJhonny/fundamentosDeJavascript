var personas = [];

function Herencia1 (hijo, padre) {
    var fn = function(){}
    fn.prototype = padre.prototype;
    hijo.prototype = new fn;
    hijo.prototype.constructor = hijo;
}

function Herencia2 (hijo, padre){
    var fn = function (){}
    fn.prototype = padre.prototype;
    hijo.prototype = new fn;
    hijo.prototype.constructor = hijo;
}

function Persona(n, a, h){
    this.nombre = n;
    this.apellido = a;
    this.altura = h;
}

Persona.prototype.saludar = function () {
    console.log(`Hi my name is ${this.nombre} ${this.apellido}.`);
}

Persona.prototype.esAlto = function (){
    return console.log(`${this.altura >= 1.8}`);
}

function Desarrollador (n, a, h, e){
    this.nombre = n;
    this.apellido = a;
    this.altura = h;
    this.herramienta = e;
}

Herencia1(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hello my name is ${this.nombre} ${this.apellido} I am developers.`);
}

Desarrollador.prototype.herra = function () {
    console.log(`La heramienata que utilizo es: ${this.herramienta}`);
}

function Frontend (n, a, h, e){
    this.nombre = n;
    this.apellido = a;
    this.altura = h;
    this.herramienta = e;
}

Herencia2(Frontend, Desarrollador);

Frontend.prototype.saludar = function (){
    console.log(`Hi, my mname is ${this.nombre} ${this.apellido} I am Frontend.`);
}


personas.push(new Persona('Pedro', 'Quispe', 1.8));
personas.push(new Desarrollador('Pablo', 'Tarso', 1.89, 'Python'));
personas.push(new Frontend('Ricardo', 'Samano', 1.67, 'HTML'));