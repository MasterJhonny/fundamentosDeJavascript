const API_URL = 'https://swapi.dev/api/'
const PLEOPLET_URL = 'people/:id/'
const opt = { crossDomain: true }


function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PLEOPLET_URL.replace(':id', id)}`
        $
            .get(url, opt, data => resolve(data))
            .fail(() => reject(id))
    })
}


async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7,8]
    
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var data = await Promise.all(promesas)
        data.forEach((element, id) => {
            let { name, height, skin_color } = element;
            console.log(`Personaje #${id+1}: ${name}
    altura: ${height}
    color: ${skin_color}`)
        })
    } catch (id) {
        console.log(`Fallo es personaje ${id}`)
    }   
}

obtenerPersonajes()






// obtenerPersonaje(1)
//     .then(data => {
//         console.log(`Personaje #1 ${data.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(data => {
//         console.log(`Personaje #2 ${data.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(data => {
//         console.log(`Personaje #3 ${data.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(data => {
//         console.log(`Personaje #4 ${data.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(data => {
//         console.log(`Personaje #5 ${data.name}`)
//         return obtenerPersonaje(6)
//     })
//     .then(data => {
//         console.log(`Personaje #6 ${data.name}`)
//         return obtenerPersonaje(7)
//     })
//     .then(data => {
//         console.log(`Personaje #7 ${data.name}`)
//         return obtenerPersonaje(8)
//     })
//     .then(data => {
//         console.log(`Personaje #8 ${data.name}`)
//     })
//     .catch(id => console.error(`Fallo el personaje #${id}`))