const API_URL = 'https://swapi.dev/api/'
const PLEOPLE_URL = 'people/:id/'
const opt = { CrossDomain: true }

function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {

        const url = `${API_URL}${PLEOPLE_URL.replace(':id', id)}`

        $
            .get(url, opt, (data) => {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

var ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  
var promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(data => {
        data.forEach((element, id) => console.log(`El perosnaje #${id+1} es ${element.name}`))
    })
    .catch(id => console.log(`se produjo un error en el personaje #${id}`))







// obtenerPersonaje(1)
// .then(data => {
//     console.log(`El personaje #1 es ${data.name}`)
//     return obtenerPersonaje(2)
// })
// .then(data => {
//     console.log(`El personaje #2 es ${data.name}`)
//     return obtenerPersonaje(3)
// })
// .then(data => {
//     console.log(`El personaje #3 es ${data.name}`)
//     return obtenerPersonaje(4)
// })
// .then(data => {
//     console.log(`El personaje #4 es ${data.name}`)
//     return obtenerPersonaje(5)
// })
// .then(data => {
//     console.log(`El personaje #5 es ${data.name}`)
//     return obtenerPersonaje(6)
// })
// .then(data => {
//     console.log(`El personaje #6 es ${data.name}`)
//     return obtenerPersonaje(7)
// })
// .then(data => {
//     console.log(`El personaje #7 es ${data.name}`)
// })
// .catch(id => console.log(`se produjo un error en el personaje #${id}`))

