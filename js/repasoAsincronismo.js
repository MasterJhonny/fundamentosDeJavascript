const API_URL = 'https://swapi.dev/api/';
const API_PEOPLE = 'people/:id/';
const opt = { crossDomain: true };


function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${API_PEOPLE.replace(':id', id)}`;
    $
        .get(url, opt, callback)
        .fail(() => console.log(`Fallo la conexcion. no se obtubo el personaje ${id}`))
}

obtenerPersonaje(1, function(persona){
    console.log(`hi my name is ${persona.name}`);

    obtenerPersonaje(2, function(persona){
        console.log(`hi my name is ${persona.name}`);

        obtenerPersonaje(3, function(persona){
            console.log(`hi my name is ${persona.name}`);

            obtenerPersonaje(4, function(persona){
                console.log(`hi my name is ${persona.name}`);

                obtenerPersonaje(5, function(persona){
                    console.log(`hi my name is ${persona.name}`);

                    obtenerPersonaje(6, function(persona){
                        console.log(`hi my name is ${persona.name}`);

                        obtenerPersonaje(7, function(persona){
                            console.log(`hi my name is ${persona.name}`);
                        });
                    })
                })
            })
        })
    })
})


