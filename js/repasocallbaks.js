const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const opt = { crossDomain: true }



function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opt, (data) => resolve(data))

            .fail(() => reject(() => console.log(`Sucedio un error en el personaje: #${id}`)))
    })
}

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// var promesas = ids.map(function(id){
//     return obtenerPersonaje(id);
// })
var promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(data => {
        data.forEach((personaje, id) => console.log(`I am character #${id+1}, my name is ${personaje.name}`))
    })
    .catch(e => e())


/*obtenerPersonaje(1)
.then(data => {
    console.log(`My name is ${data.name} I am character #1`)
    return obtenerPersonaje(2)
})
.then(data => {
    console.log(`My name is ${data.name} I am character #2`)
    return obtenerPersonaje(3)
})
.then(data => {
    console.log(`My name is ${data.name} I am character #3`)
    return obtenerPersonaje(4)
})
.then(data => {
    console.log(`My name is ${data.name} I am character #4`)
    return obtenerPersonaje(5)
})
.then(data => {
    console.log(`My name is ${data.name} I am character #5`)
    return obtenerPersonaje(6)
})
.then(data => {
    console.log(`My name is ${data.name} I am character #6`)
    return obtenerPersonaje(7)
})
.then(data => {
    console.log(`My name is ${data.name} I am character #7`)
    return obtenerPersonaje(8)
})
.then(data => {
    console.log(`My name is ${data.name} I am character #8`)
    return obtenerPersonaje(9)
})
.then(data => {
    console.log(`My name is ${data.name} I am character #9`)
})

.catch(e => e())*/










