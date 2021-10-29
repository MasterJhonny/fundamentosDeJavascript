let juan = {
    nombre: 'Juan',
    edad: 34
}

// const cumple = persona => persona.edad++

const inmutable = persona => {
    return {
        ...persona,
        edad: persona.edad + 1
    }
} 