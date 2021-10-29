const URL_API = 'https://swapi.dev/api/';
const URL_PEOPLE = 'people/:id/';
const opt = { crossDomain: true };





function obtenerPersonaje(id) {
    
    return new Promise((resolve, reject) => {

        const url = `${URL_API}${URL_PEOPLE.replace(':id', id)}`;

        $
            .get(url, opt, data =>{
                resolve(data)
            })
            .fail(() => reject(id))

    })
}

 async function obtenerPersonajes(){

    var ads = [1,2,3,4,5,6,7,8,9]
    
    var promesas = ads.map(id => obtenerPersonaje(id))
    
    try {
        var personajes = await Promise.all(promesas)
        personajes.forEach((element, id)=> console.log(`I am ${element.name} #${id+1}\n`))
    } catch (id) {
        console.log(`Se produjo un error en el personaje #${id}`)
    }
}

obtenerPersonajes()


// obtenerPerosnaje(1)
// .then(data=>{
//     console.log(`I am ${data.name} personaje #1`)
//     return obtenerPerosnaje(2)
// })
// .then(data=>{
//     console.log(`I am ${data.name} personaje #2`)
//     return obtenerPerosnaje(3)
// })
// .then(data=>{
//     console.log(`I am ${data.name} personaje #3`)
//     return obtenerPerosnaje(4)
// })
// .then(data=>{
//     console.log(`I am ${data.name} personaje #4`)
//     return obtenerPerosnaje(5)
// })
// .then(data=>{
//     console.log(`I am ${data.name} personaje #5`)
//     return obtenerPerosnaje(6)
// })
// .then(data=>{
//     console.log(`I am ${data.name} personaje #6`)
//     return obtenerPerosnaje(7)
// })
// .then(data=>{
//     console.log(`I am ${data.name} personaje #7`)
// })
// .catch(e=>e())
