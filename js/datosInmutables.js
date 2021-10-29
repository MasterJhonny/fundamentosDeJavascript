let juan = {
    nombre: 'Juan',
    apellido: 'Quispe',
    edad: 34
}

// const cumpleanios = persona => persona.edad++

const cumpleInmutable = persona => ({
        ...persona,
        edad: persona.edad + 1
})