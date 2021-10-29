var personas = [];

class Persona {

    constructor(n, a, h){
        this.nombre = n;
        this.apellido = a;
        this.altura = h;
    }

    saludar(frs){
        var { nombre, apellido } = this;
        console.log(`Hi my name is ${nombre} ${apellido}.`);
        if(frs){
            frs(nombre, apellido, false);
        }
    }

    esAlto(){
        return console.log(`${this.altura >= 1.8}`);
    }

}

class Desarrollador extends Persona {
    constructor (u, a, h, e){
        super(u, a, h);
        this.herramienta = e;
    }
    saludar(frs){
        var { nombre, apellido } = this;
        console.log(`Hello my name is ${nombre} ${apellido} I am developers.`);
        if(frs){
            frs(nombre, apellido, true);
        }
    }

    herra(fH){
        console.log(`La herramienta que utilizo es: ${this.herramienta}.`);
        if(fH){
            fH(this.herramienta);
        }
    }

}

function responderSaludo(nombre, apellido, esDev){
    console.log(`buen dia ${nombre} ${apellido}.`);
    if(esDev){
        console.log(`Ah, mira no sabia que eras desarrollador.`);
    }
}

function responderHerra(herramienta){
    console.log(`ah si, yo tambien utilizo ${herramienta} chocales.`)
}

personas.push(new Persona('Pedro', 'Quispe', 1.9));
personas.push(new Desarrollador('Pablo', 'Tarso', 1.89, 'Python'));

personas[0].saludar(responderSaludo);
personas[1].saludar(responderSaludo);
personas[1].herra(responderHerra);