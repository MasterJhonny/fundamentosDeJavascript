var animales = [];

class Animal {

    constructor(n, c, m){
        this.nombre = n;
        this.color = c;
        this.movilidad = m;
    }

    mover(){
        console.log('coriendo...');
    }
}

class Perro extends Animal {
    constructor(n, c, m, a){
        super(n, c, m);
        this.apodo = a;
    }

    ladrar(fr){
        console.log('gua gua...');
        if(fr){
            //console.log(`${this.apodo}, deja de ladrar...`);
            fr(this.apodo);
        }
    }
}

function resLadrido(apodo){
    console.log(`${apodo} deja de ladrar.`);
}

animales.push(new Animal('trigre', 'amarrillo', 'tierra'));
animales.push(new Perro('perro', 'cafe', 'tierra', 'Spot'));

animales[1].ladrar(resLadrido)