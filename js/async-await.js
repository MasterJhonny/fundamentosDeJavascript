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
    var ads = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    var promesas = ads.map(id => obtenerPersonaje(id))

    try {

        var data =  await Promise.all(promesas)
        // console.log(data)
        data.forEach((element, index) =>console.log(`#${index} ${element.name}`))

    } catch (id) {
        console.log(`Se produjo un error en el personaje #${id}`) 
    }
}

obtenerPersonajes()