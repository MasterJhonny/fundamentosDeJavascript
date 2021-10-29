var estudiantes = [];

function Alummno(n, e, c, h){
    this.nombre = n;
    this.edad = e;
    this.curso = c;
    this.altura = h;
}

Alummno.prototype.saludar = function() {
    var date = new Date();
    if(date.getHours()<12){
        console.log(`Good morning, my name is ${this.nombre}.`);
    } else if(date.getHours()<=18){
        console.log(`Good afternoon, my name is ${this.nombre}.`);
    } else {
        console.log(`Good niegt, my name is ${this.nombre}.`);
    }
}

Alummno.prototype.decirCurso = function(){
    console.log(`I am ${this.curso}`);
}

estudiantes.push(new Alummno('Daniel', 12, '1ro. de sec.', 1.4));
estudiantes.push(new Alummno('Juan', 13, '1ro. de sec.', 1.5));
estudiantes.push(new Alummno('Felipe', 14, '2ro. de sec.', 1.46));
estudiantes.push(new Alummno('Lucas', 15, '2ro. de sec.', 1.55));
estudiantes.push(new Alummno('Hafid', 12, '1ro. de sec.', 1.57));

console.table(estudiantes);

for(demo of estudiantes){
    demo.saludar();
    demo.decirCurso();
}
