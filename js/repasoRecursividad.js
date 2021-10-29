// recurisvidad 
function divicionEntera(dividendo, divisor){
    if(dividendo < divisor){
        return 0
    }

    return 1 + divicionEntera(dividendo - divisor, divisor)
}