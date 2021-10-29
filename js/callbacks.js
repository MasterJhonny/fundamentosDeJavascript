const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const opts = { crossDomain: true };



function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        const onError = () => console.log(`Error del pesonaje ${id}`)
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(onError))
    })
}



obtenerPersonaje(1)
    .then((persona) => {
        console.log(`El personaje 1 es ${persona.name}`)
        return obtenerPersonaje(2)
    })
    .then((persona) => {
        console.log(`El personaje 2 es ${persona.name}`)
        return obtenerPersonaje(3)
    })
    .then((persona) => {
        console.log(`El personaje 3 es ${persona.name}`)
        return obtenerPersonaje(4)
    })
    .then((persona) => {
        console.log(`El personaje 4 es ${persona.name}`)
        return obtenerPersonaje(5)
    })
    .then((persona) => {
        console.log(`El personaje 5 es ${persona.name}`)
        return obtenerPersonaje(6)
    })
    .then((persona) => {
        console.log(`El personaje 6 es ${persona.name}`)
        return obtenerPersonaje(7)
    })
    .then((persona) => {
        console.log(`El personaje 7 es ${persona.name}`)
    })
    .catch(function(err){
        err()
    })

