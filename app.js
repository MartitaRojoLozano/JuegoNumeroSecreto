let numeroSecreto = 0 ;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

reiniciarJuego() ;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto ;
    return;
}

function verificarIntento(numeroUser) {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario === numeroSecreto) 
    {
        asignarTextoElemento('p',`Acertaste el Numero Secreto en ${intentos} ${(intentos===1)? 'intento' :'intentos'}`) ;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El Numero Secreto es Menor') ; }
            else 
            {
            asignarTextoElemento('p','El Numero Secreto es Mayor') ;
            }
        intentos++;
        limpiarCaja();
        }    
        return;
    }

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if( listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles') ; 
        return;
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
           return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado ;
        }
    }
}

function limpiarCaja()
{
    // OJO con el uso del #
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
    document.querySelector('#valorUsuario').value ='';
    return;
}

function condicionesIniciales()
{
    asignarTextoElemento('h1','Juego de Número Secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    intentos=1;
    return;
}

function reiniciarJuego()
{
    // Limpiar Caja
    
    condicionesIniciales() ;
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}