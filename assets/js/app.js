window.addEventListener("load", cargar);

var boton = document.getElementById('boton');
var textArea = document.getElementById("txt");
var contador = document.getElementById("contador");
var caracteres = contador.innerHTML = 140;

//Evento para activar el botón

function cargar() {
    boton.addEventListener("click", enviar);
    textArea.addEventListener("keyup", validar);
    textArea.addEventListener("keydown", crecer);
}
    
function enviar(send) {
    send.preventDefault();
    var texto = textArea.value;
    agregarMensaje(texto);
    textArea.value = "";
    contador.innerHTML = 140;
    contador.classList.remove("colorUno");
    contador.classList.remove("colorDos");
    resize();
    boton.disabled = true;
}

function validar() {
    boton.disabled = false;
    var longitud = textArea.value.trim().length;
    contarCaracteres(longitud);
    cambioColor(longitud);
}

function agregarMensaje(texto) {
    var tweet = document.createElement("div");
    tweet.innerText = texto;
    var contenedor = document.getElementById("contenedor");
    contenedor.insertBefore(tweet, contenedor.childNodes[1]).classList.add("box");
}

//Función contador de caracteres
function contarCaracteres(longitud) {
    if(longitud <= caracteres) {
        contador.innerHTML = caracteres - longitud;
    } else {
        contador.innerHTML = caracteres - longitud;
    }
    if(longitud == 0) {
        document.getElementById("boton").disabled = true;
    }
    if(longitud > caracteres) {
       document.getElementById("boton").disabled = true;
    }
}

//Función cambio de color
function cambioColor(longitud) {
    if(longitud > 100) {
        contador.classList.add("alertColor");
    }

    if(longitud > 120) {
        contador.classList.add("warning");
        contador.classList.remove("alertColor");
    }

    if(longitud < 100) {
        contador.classList.remove("alertColor");
    }

    if(longitud < 120) {
        contador.classList.remove("warning");
    }
}

function crecer() {
    textArea.style.cssText = "height: auto";
    textArea.style.cssText = "height: " + textArea.scrollHeight + "px";
}

function resize() {
    textArea.style.cssText = "height: auto";
}