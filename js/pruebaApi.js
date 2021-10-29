salida = document.getElementById('salida');
const API_URL = 'https://api.unsplash.com/photos/?client_id=_dwTopKY1Mlh4rESiALKuCLcAE8jmzpBbzj5fFCBVtg'
const opt = { crossDomain: true }


$.get(API_URL, opt, function(data){
    console.log(data)
    data.forEach(element => {
        var { links, urls } = element 
        //console.log(links.self)
        salida.innerHTML += links.self
    })
})
