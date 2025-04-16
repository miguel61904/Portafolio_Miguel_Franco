let perfil = document.getElementById("perfil")
let proyectos = document.getElementById("proyectos")
let experiencia = document.getElementById("experiencia")
let habilidades = document.getElementById("habilidades")
let contacto = document.getElementById("contacto")
// botones
let btnCerrar = document.getElementById("btn_cerrar")
let cerrraEx = document.getElementById("cerrar_ex")
// contenido animado
let flecha = document.getElementById("flecha");
let playerTalk = document.getElementById("player_talk");
let imagen = document.getElementById("img");
let imagenPeque = document.getElementById("imgPeque");
let contInfo = document.getElementById("contenedor_info");
let playerPeque = document.getElementById("player");
// modales
let modal = document.getElementById("modal_contacto");
let modalExperiencia = document.getElementById("modal_experiencia")
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
    text_inicial.style.display = "none"
    if (indexText < textoPerfil.length) {
        contText.style.display = "inline"
        document.getElementById("text_perfil").textContent += textoPerfil.charAt(indexText);
        indexText++;
        setTimeout(escribirTexto, velocidad);
    }
}

function escribirHabilidad(){
    contText.style.display = "none"
    text_inicial.style.display = "none"
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

perfil.addEventListener("click", function perfil(){
    
    /// personaje habla
    let imagenes = ["../assets/img/Midibujo.png","../assets/img/hablando.png"]
    let index = 0
    const intevalo = setInterval(() => {
        index = 1 - index;
        imagen.src = imagenes[index]
    },200)
    setTimeout(() =>{
        clearInterval(intevalo)
    },10000)
    /// texto inferior
    if(isActive == false){
        escribirTexto();
        isActive = true
    }else{ 
        contText.style.display = "none"
        escribirTexto();
        isActive = false
    }
})

experiencia.addEventListener("click", ()=>{
    modalExperiencia.showModal();
})

habilidades.addEventListener("click", ()=>{
    let imagenes = ["../assets/img/Midibujo.png","../assets/img/hablando.png"]
    let index = 0
    const intevalo = setInterval(() => {
        index = 1 - index;
        imagen.src = imagenes[index]
    },200)
    setTimeout(() =>{
        clearInterval(intevalo)
    },2000)
    if(isActive == false){
        indexText = 0
        escribirHabilidad();
    }else{
        indexText = 0
        contText.style.display = "none"
        escribirHabilidad();
    }
    
})

contacto.addEventListener("click", ()=>{
    modal.showModal();
})

btnCerrar.addEventListener("click", () =>{
    modal.close();
})

cerrraEx.addEventListener("click", () =>{
    modalExperiencia.close();
})

window.addEventListener("load", () =>{ 
    playerPeque.style.display = "flex";
    let imagenes = ["../assets/img/Pj pequeno.png","../assets/img/move.png"]
    let index = 0;
    let positionX = 0;
    let positionY = 0;
    let maxPosition = 100;
    const intevalo = setInterval(() => {
        index = 1 - index;
        imagenPeque.src = imagenes[index]
        positionX +=5;
        positionY +=0;
         playerPeque.style.left = `${positionX}px`;
    },200)
    setTimeout(() =>{
        if(positionX >= maxPosition){
            clearInterval(intevalo)
        }
    },10000)

})