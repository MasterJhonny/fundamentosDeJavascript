var salida = document.getElementById('salida');
var titulo = document.getElementById('titulo');
var versos = document.getElementById('versos');
const API_URL = 'https://www.abibliadigital.com.br/api/'
const BOOK_URL = 'verses/rvr/sl/id'
const opt = {crossDomain: true}

console.warn('Alerta este sitio esta en situacio de prueba')
console.info('Alerta')
console.error('Ocurrio un error')
console.log("%cAdvertencia esta area es solo para desarrolladores %cDetente", "font-size: 40px;color: #f55c47;font-family:sans-serif", "color: orange", "No copies ni pegue ningun codigo, podrias ser victikma de algun atacante maligno")

function obtenerCapitulo(cap) {

    return new Promise((resolve, reject) => {

        const url = `${API_URL}${BOOK_URL.replace('id', cap)}`

        $
            .get(url, opt, data => {
                resolve(data)
            })
            .fail(()=>reject(cap))
    })
}

async function obtenerVersiculos(){
    var ides = [1,2,3,4,5,6,7]
    
    var promis = ides.map(id=>obtenerCapitulo(id))
    try {
        var salmos = await Promise.all(promis)
        console.log(salmos)
        salmos.forEach(element=>{
            // console.log(`Capitulo: #${element.chapter.number}`)
            let { chapter, verses } = element;
            titulo.innerText = `Capitulo: #${chapter.number}`
            versos.innerText = `contiene ${versos} versos.`
            element.verses.forEach(e => {
                salida.innerText += `${e.number}. ${e.text}`
                var { number, text } = e;
                console.log(`${number} ${text}`)
            })
            
        })
    } catch (cap) {
        console.error(`Error en el capitulo #${cap}`)
    }
}

obtenerVersiculos()

   


// obtenerCapitulo(1)
// .then(data=>{
//     var texto = data.verses;
//     console.log(`Capitulo #1`)
//     texto.forEach((objeto) => console.log(`${objeto.number}. ${objeto.text}`))
//     return obtenerCapitulo(2)
// })
// .then(data=>{
//     var texto = data.verses;
//     console.log(`Capitulo #2`)
//     texto.forEach((objeto) => console.log(`${objeto.number}. ${objeto.text}`))
//     return obtenerCapitulo(3)
// })
// .then(data=>{
//     var texto = data.verses;
//     console.log(`Capitulo #3`)
//     texto.forEach((objeto) => console.log(`${objeto.number}. ${objeto.text}`))
//     return obtenerCapitulo(4)
// })
// .then(data=>{
//     var texto = data.verses;
//     console.log(`Capitulo #4`)
//     texto.forEach((objeto) => console.log(`${objeto.number}. ${objeto.text}`))
// })
// .catch(err=>err())



