var entrada = () => prompt("Selecciona una opcion:\n(1)piedra.\n(2)papel.\n(3)tijera.");
var user;
function validar(){
    user = entrada();
    if(user > 0 && user < 4){
        user = parseInt(user) - 1;
    } else {
        validar();
    }
}

validar();
console.log(user);
var machine = (Math.floor(Math.random()*3)).toString();
console.log(machine);

var opciones = user + machine;

console.log(opciones);

switch(opciones){
    case "00":
    case "11":
    case "22":
        console.log("son empates");
    break;
    case "01":
    case "12":
    case "20":
        console.log("gano machine");
    break;    
    case "10":
    case "21":
    case "02":
        console.log("ganaste tú");
    break;
    default:
    break;
}


