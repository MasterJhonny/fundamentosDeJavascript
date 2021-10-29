const URL_API = 'https://swapi.dev/api/';
const URL_PEOPLE = 'people/:id/';
const opt = { crossDomain: true };

function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        
        const url = `${URL_API}${URL_PEOPLE.replace(':id', id)}`;
        $
            .get(url, opt, (data) => {
                resolve(data); 
            })

            .fail(() => reject(()=>console.log(`Sucedio un error en el personaje #${id}`)));
    })
} 

obtenerPersonaje(1)
    .then((data) => {
        console.log(`My name is ${data.name}`)
        return obtenerPersonaje(2)
    })
    .then((data) => {
        console.log(`My name is ${data.name}`)
        return obtenerPersonaje(3)
    })
    .then((data) => {
        console.log(`My name is ${data.name}`)
        return obtenerPersonaje(4)
    })
    .then((data) => {
        console.log(`My name is ${data.name}`)
        return obtenerPersonaje(5)
    })
    .then((data) => {
        console.log(`My name is ${data.name}`)
        return obtenerPersonaje(6)
    })
    .then((data) => {
        console.log(`My name is ${data.name}`)
        return obtenerPersonaje(7)
    })
    .then((data) => {
        console.log(`My name is ${data.name}`)
        return obtenerPersonaje(8)
    })
    .then((data) => {
        console.log(`My name is ${data.name}`)
        return obtenerPersonaje(9)
    })
    .then((data) => {
        console.log(`My name is ${data.name}`)
        return obtenerPersonaje(10)
    })

    .catch(function(err){
        err()
    })






/*obtenerPersonaje(11, () => {
    obtenerPersonaje(12, () => {
        obtenerPersonaje(13, () => {
            obtenerPersonaje(14, () => {
                obtenerPersonaje(15, () => {
                    obtenerPersonaje(16, () => {
                        obtenerPersonaje(17, () => {
                            obtenerPersonaje(18, () => {
                                obtenerPersonaje(19, ()=> {
                                    obtenerPersonaje(20)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


obtenerPersonaje(21)
obtenerPersonaje(22)
obtenerPersonaje(23)
obtenerPersonaje(24)
obtenerPersonaje(25)
obtenerPersonaje(26)
obtenerPersonaje(27)
obtenerPersonaje(28)*/
