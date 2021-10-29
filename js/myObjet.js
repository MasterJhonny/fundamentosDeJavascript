function Persona(n, a, e, h){
    this.nombre = n;
    this.apellido = a;
    this.edad = e;
    this.altura = h;
}

Persona.prototype.saludar = () => {
    console.log(`Hi my name is ${this.nombre} ${this.apellido}.`);
}

Persona.prototype.saberAltura = () => this.altura >= 1.8 ? console.log('I am tall.'):console.log('I am short.');


var sasha = new Persona('Sasha', 'Lifszyc', 29, 1.8);
var pedro = new Persona('Pedro', 'Quispe', 30, 1.82);
var maria = new Persona('Maria', 'Lanza', 30, 1.63);
var dario = new Persona('Dario', 'Lopez', 30, 1.65);

sasha.saludar();  
sasha.saberAltura();
pedro.saberAltura();


