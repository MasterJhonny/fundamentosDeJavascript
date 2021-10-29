var juan = {
    name: 'Juan',
    lastName: 'Quispe',
    age: 34
}

function esMayorDeEdad(persona){
    let mensaje
    const MAYORIA_EDAD = 18
    MAYORIA_EDAD++
    if(persona.age >= MAYORIA_EDAD){
        mensaje = 'es mayor de edad.' 
    } else {
        mensaje = 'es menor de edad.'
    }
    console.log(mensaje)
    // var { name, lastName, age } = persona
    // console.log(`${name} is ${age>=18?'mayor':'menor'} de edad.`)
}

// esMayorDeEdad(juan)

for(let i = 0; i < 10; i++) {
    console.log(i)
}

console.log(`Termino el ciclo el valor de i es ${i}`)