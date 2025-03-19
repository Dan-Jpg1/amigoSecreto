// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    return;
}

function sortearAmigo() {
    if (amigos == ''){
        alert("Favor de añadir nombres a la lista.")
        limpiarCaja();
    } else {
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        asignarTextoElemento('ul1', amigoSecreto);
        asignarTextoElemento('ul', "");
        limpiarCaja();
        amigos = [];

    }
}

function agregarAmigo() {
    let nombreAñadido = String(document.getElementById('amigo').value);
    if (nombreAñadido == ''){
        alert("Favor de añadir un nombre valido.")
        limpiarCaja();
    } else {
        amigos.push(nombreAñadido);
        console.log(amigos);
        limpiarCaja();
        addTexto1();
        return nombreAñadido;
    }
}

function condicionesIniciales(){
    limpiarCaja();
}

function addTexto1(){
    asignarTextoElemento('ul', amigos);
}
