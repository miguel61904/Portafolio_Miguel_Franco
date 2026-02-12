let perfil = document.getElementById("perfil")
let proyectos = document.getElementById("proyectos")
let experiencia = document.getElementById("experiencia")
let habilidades = document.getElementById("habilidades")
let contacto = document.getElementById("contacto")
let imagen = document.getElementById("img")
// btn entorno 
let btnVolver = document.getElementById("volver")
let btnCerrar = document.getElementById("btn_cerrar")
let cerrarEx = document.getElementById("cerrar_ex")
// modales
let modal = document.getElementById("modal_contacto");
let modalExperiencia = document.getElementById("modal_experiencia")
let modalPro = document.getElementById("modal_pro");
/// espacios de texto
let contText = document.getElementById("espacio_text_perfil")
let text_habilidades = document.getElementById("espacio_text_habilidades")
const textoPerfil = "Tecnico en desarrollo de software aplicaciones en la nube, proximo a graduarse en Tecnología en desarrollo de software y aplicaciones móviles, cuenta con conocimientos en diferentes lenguajes de programación vistos en las instituciones, respaldado con un año de experiencia en el área, manejo de herramientas ofimáticas y tiene buenas competencias para la maquetación. "
const textoHabilidad = "Cuenta con conocimientos en las tecnologias HTML5, CSS3, JavaScript, Angular... "
let indexText = 0
let velocidad = 25;
let isActive = false;
// elementos proyectos
let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let level2 = document.getElementById("lavel2");
let level1 = document.getElementById("lavel1");

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


// Ventana modal /////////////////////////////////////////////////////

let perfilR = document.getElementById("perfilR")
let proyectosR = document.getElementById("proyectosR")
let experienciaR = document.getElementById("experienciaR")
let habilidadesR = document.getElementById("habilidadesR")
let contactoR = document.getElementById("contactoR")
let imagenR = document.getElementById("img")

let nube = document.getElementById("nube");
let modal_about = document.getElementById("modal_responsive")

nube.addEventListener("click", () =>{
    modal_about.showModal();
    nube.style.display = "none";
})

perfilR.addEventListener("click", ()=>{
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


habilidadesR.addEventListener("click", ()=>{
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

experienciaR.addEventListener("click", ()=>{
    modalExperiencia.showModal();
})

cerrarEx.addEventListener("click", ()=>{
    modalExperiencia.close();
})

proyectosR.addEventListener("click", ()=>{
    modalPro.showModal();
})
// movimientos proyecto
level2.addEventListener("click", () => {
  select1.style.display = "none";
  select2.style.display = "flex";
});

level1.addEventListener("click", () => {
  select1.style.display = "flex";
  select2.style.display = "none";
});

contactoR.addEventListener("click", ()=>{
    modal.showModal();
})




