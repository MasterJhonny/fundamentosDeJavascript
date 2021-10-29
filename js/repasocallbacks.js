const URL_API = 'https://swapi.dev/api/';
const URL_PEOPLE = 'people/:id/';
const opt = { crossDomain: true };





function obtenerPerosnaje(id) {

    return new Promise((resolve, reject) => {

        const url = `${URL_API}${URL_PEOPLE.replace(':id', id)}`;

        $
            .get(url, opt , data =>{
                resolve(data)
            })
            .fail(() => reject(()=> console.log(`Error, se cayo es sistema, no se obtubo el personaje #${id}`)))

    })
}

var ides = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

var promesas = ides.map(id => obtenerPerosnaje(id))
Promise
    .all(promesas)
    .then(data => {
        data.forEach(e=>console.log(`I am ${e.name}`))
    })
    .catch(e=>e())







// obtenerPerosnaje(1)
// .then(data => {
//     console.log(`El personaje #1 ${data.name}`)
//     return obtenerPerosnaje(2)
// })
// .then(data => {
//     console.log(`El personaje #2 ${data.name}`)
//     return obtenerPerosnaje(3)
// })
// .then(data => {
//     console.log(`El personaje #3 ${data.name}`)
//     return obtenerPerosnaje(4)
// })
// .then(data => {
//     console.log(`El personaje #4 ${data.name}`)
//     return obtenerPerosnaje(5)
// })
// .then(data => {
//     console.log(`El personaje #5 ${data.name}`)
//     return obtenerPerosnaje(6)
// })
// .then(data => {
//     console.log(`El personaje #6 ${data.name}`)
//     return obtenerPerosnaje(7)
// })
// .then(data => {
//     console.log(`El personaje #7 ${data.name}`)
//     return obtenerPerosnaje(8)
// })
// .then(data => {
//     console.log(`El personaje #8 ${data.name}`)
//     return obtenerPerosnaje(9)
// })
// .then(data => {
//     console.log(`El personaje #9 ${data.name}`)
// })
// .catch(e=>e())




