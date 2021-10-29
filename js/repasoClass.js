var personas = [];
 
class Persona {

    constructor(n, a, e){
        this.nombre = n;
        this.apellido = a;
        this.edad = e;
    }

    saludar(fr){
        var { nombre, apellido } = this;
        console.log(`Hi, my name is ${nombre} ${apellido}.`);
        if(fr){
            fr(nombre, apellido);
        }
    }

    validarEdad(){
        console.log(`${this.nombre} es ${this.edad >= 18 ? 'mayor' : 'menor'} de edad.`);
    }
}


class Desarrollador extends Persona {

    constructor(n, a, e, h){
        super(n, a, e);
        this.herrramienta = h;
    }

    saludar(fr){
        var { nombre, apellido } = this;
        console.log(`Hello, my name is ${nombre} ${apellido} I am developers.`);
        if(fr){
            fr(nombre, apellido, true, false);
        }
    }

    herra(){
        console.log(`La herramiente que utilizo es ${this.herrramienta}.`);
    }
}

class Frontend extends Desarrollador {

    constructor(n, a, e, h, g){
        super(n, a, e, h);
        this.navegador = g;
    }

    saludar(fr){
        var { nombre, apellido } = this;
        console.log(`Hi, my name is ${nombre} ${apellido} I am Frontend.`);
        if(fr){
            fr(nombre, apellido, false ,true);
        }
    }

    navegadorPreferido(){
        console.log(`Mi navegador preferido es ${this.navegador}.`)
    }
}

function reSaludo(nombre, apellido, esDev, esFron){
    var dato = new Date();
    if(dato.getHours() < 12){
        console.log(`good morning ${nombre} ${apellido}.`);
    } else if(dato.getHours() < 18){
        console.log(`good afternoon ${nombre} ${apellido}.`);
    } else {
        console.log(`good nigt ${nombre} ${apellido}.`);
    }
    if(esDev){
        console.log(`ah, mira no sabia que eras desarrollador, que bien.`)
    }
    if(esFron){
        console.log(`ah, mira no sabia que eras desarrollador frontend, que bien.`)
    }

}

personas.push(new Persona('Pedro', 'Quispe', 34));
personas.push(new Desarrollador('Pablo', 'Tarso', 23, 'Python'));
personas.push(new Frontend('Dario', 'Lopez', 17, 'HTML', 'google chromme'));

personas[0].saludar(reSaludo);
personas[1].saludar(reSaludo);
personas[2].saludar(reSaludo);