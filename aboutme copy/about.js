let flecha = document.getElementById("flecha");
let playerTalk = document.getElementById("player_talk");
let imagen = document.getElementById("img");
let contInfo = document.getElementById("contenedor_info");
/// espacios de texto
let contText = document.getElementById("espacio_text_perfil");
let text_inicial = document.getElementById("espacio_text_inicial");
let text_habilidades = document.getElementById("espacio_text_habilidades");
let textInicial = "Hola Soy Miguel Franco, Desarrollador de software Front-End. Que te gustaría conocer sobre mi?";
const textoPerfil = "Tecnico en desarrollo de software aplicaciones en la nube, proximo a graduarse en Tecnología en desarrollo de software y aplicaciones móviles, cuenta con conocimientos en diferentes lenguajes de programación vistos en las instituciones, respaldado con un año de experiencia en el área, manejo de herramientas ofimáticas y tiene buenas competencias para la maquetación. ";
const textoHabilidad = "Cuenta con conocimientos en las tecnologias HTML5, CSS3, JavaScript, Angular... ";
let indexText = 0
let velocidad = 25;
let isActive = false;

function TextoInicial(){
    text_habilidades.style.display = "none"
    contText.style.display = "none"
    if (indexText < textInicial.length) {
        text_inicial.style.display = "inline"
        document.getElementById("text_inicial").textContent += textInicial.charAt(indexText);
        indexText++;
        setTimeout(TextoInicial, velocidad);
    }
}

function escribirTexto(){
    text_habilidades.style.display = "none"
    if (indexText < textoPerfil.length) {
        contText.style.display = "inline"
        document.getElementById("text_perfil").textContent += textoPerfil.charAt(indexText);
        indexText++;
        setTimeout(escribirTexto, velocidad);
    }
}

function escribirHabilidad(){
    contText.style.display = "none"
    if (indexText < textoHabilidad.length) {
        text_habilidades.style.display = "inline"
        document.getElementById("text_habilidades").textContent += textoHabilidad.charAt(indexText);
        indexText++;
        setTimeout(escribirHabilidad, velocidad);
    }
}

flecha.addEventListener("click", ()=>{
    playerTalk.style.display = "flex"
    let imagenes = ["../assets/img/Midibujo.png","../assets/img/hablando.png"]
    let index = 0
    const intevalo = setInterval(() => {
        index = 1 - index;
        imagen.src = imagenes[index]
    },200)
    setTimeout(() =>{
        clearInterval(intevalo)
        contInfo.style.display = "flex"
    },2000)
    /// texto inferior
    if(isActive == false){
        TextoInicial();
        isActive = true
    }else{ 
        contText.style.display = "none"
        TextoInicial();
        isActive = false
    }
})

