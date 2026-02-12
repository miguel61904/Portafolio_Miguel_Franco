let perfil = document.getElementById("perfil")
let proyectos = document.getElementById("proyectos")
let experiencia = document.getElementById("experiencia")
let habilidades = document.getElementById("habilidades")
let contacto = document.getElementById("contacto")
// botones
let btnCerrar = document.getElementById("btn_cerrar")
let cerrraEx = document.getElementById("cerrar_ex")
let cerrarPro = document.getElementById("cerrar_pro")
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
const textoPerfil = "Tecnólogo en desarrollo de software y aplicaciones móviles, cuenta conconocimientos y experiencia certificada en áreas de soporte técnico brindando manteamiento correctivo y preventivo, programación y desarrollo de aplicaciones web, manejo de herramientas ofimáticas, reparación y mantenimiento ";
const textoHabilidad = "Cuenta con conocimientos en las tecnologias HTML5, CSS3, JavaScript, Angular... ";
let indexText = 0
let velocidad = 25;
let isActive = false;
let cancelWalk = true;

function TextoInicial(){
    if (indexText < textInicial.length) {
        text_inicial.style.display = "inline"
        document.getElementById("text_inicial").textContent += textInicial.charAt(indexText);
        indexText++;
        setTimeout(TextoInicial, velocidad);
    }else{
        indexText = 0
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
    else{
        indexText = 0
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
    else{
        indexText = 0
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
    cancelWalk = false 
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
 // funciuones para caminar
caminar();
function caminar(){
    
        const number = 1 + Math.floor(Math.random() * 5);
        if (cancelWalk == false){
            number = 6;
        }
        console.log(number)
        switch(number){
            case 1:
                moveDerecha();
                break;
            case 2:
                moveIzquierda();
                break;
            case 3:
                moveAbajo();
                break;
            case 4:
                moveArriba();
                break;
            case 5:
                quieto();
                break;
            case 6:
                
                break;
        }
    
}

let positionX = 0;
let positionY = 0;

function moveDerecha(){
    playerPeque.style.display = "flex";
    let imagenes = ["../assets/img/Pj pequeno.png","../assets/img/move.png"]
    let index = 0;
    let maxPosition = 100;
    const intevalo = setInterval(() => {
        index = 1 - index;
        imagenPeque.src = imagenes[index]
        positionX +=5;
        positionY +=0;
         playerPeque.style.left = `${positionX}px`;
    },200)
    setTimeout(() =>{
        if(positionX <= maxPosition){
            clearInterval(intevalo)
            caminar();
        }
    },900)
}

function moveIzquierda(){
    playerPeque.style.display = "flex";
    let imagenes = ["../assets/img/Pj pequenoL.png","../assets/img/moveL.png"]
    let index = 0;
    let maxPosition = 100;
    const intevalo = setInterval(() => {
        index = 1 - index;
        imagenPeque.src = imagenes[index]
        positionX -=5;
        positionY +=0;
         playerPeque.style.left = `${positionX}px`;
    },200)
    setTimeout(() =>{
        if(positionX <= maxPosition){
            clearInterval(intevalo)
            caminar();
        }
    },900)
    
}

function moveArriba(){
    playerPeque.style.display = "flex";
    let imagenes = ["../assets/img/Pj pequeno.png","../assets/img/move.png"]
    let index = 0;
    let maxPosition = 100;
    const intevalo = setInterval(() => {
        index = 1 - index;
        imagenPeque.src = imagenes[index]
        positionX +=0;
        positionY +=5;
         playerPeque.style.top = `${positionY}px`;
    },200)
    setTimeout(() =>{
        if(positionY <= maxPosition){
            clearInterval(intevalo)
            caminar();
        }
    },900)
}

function moveAbajo(){
    playerPeque.style.display = "flex";
    let imagenes = ["../assets/img/Pj pequenoL.png","../assets/img/moveL.png"]
    let index = 0;
    let maxPosition = 100;
    const intevalo = setInterval(() => {
        index = 1 - index;
        imagenPeque.src = imagenes[index]
        positionX +=0;
        positionY -=5;
         playerPeque.style.top = `${positionY}px`;
    },200)
    setTimeout(() =>{
        if(positionY <= maxPosition){
            clearInterval(intevalo)
            caminar();
        }
    },900)
}

function quieto(){
    playerPeque.style.display = "flex";
    let imagenes = ["../assets/img/Pj pequeno.png","../assets/img/Pj pequenoL.png"]
    let index = 0;
    const intevalo = setInterval(() => {
        index = 1 - index;
        imagenPeque.src = imagenes[index]
    },200)
    setTimeout(() =>{
        clearInterval(intevalo)
        caminar()
    },700)
}

function quieto2(){

}

// Descargar CV

function descargarCV (){
    location.href = "https://drive.google.com/file/d/1PYCrq0L_bOgtcNEIafVNhWjH5TOdIggb/view?usp=sharing"
}

//Open proyects
let modalProyect = document.getElementById("modal_proyects");
let p1 = document.getElementById("proyecto1");
let p2 = document.getElementById("proyecto2");
let p3 = document.getElementById("proyecto3");

proyectos.addEventListener( "click", ()=>{
    modalProyect.style.display = "flex";
    modalProyect.showModal();
})

cerrarPro.addEventListener("click", ()=>{
    modalProyect.close();
})

p1.addEventListener("click", ()=>{
    window.location.href = "https://giga-d.vercel.app/"
})

p2.addEventListener("click", ()=>{
    window.location.href = "https://inobell.vercel.app/"
})

p3.addEventListener("click", ()=>{
    window.location.href = "https://github.com/miguel61904/Proyecto_Auto"
})