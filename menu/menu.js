let corazon1 = document.getElementById("corazon1");
let corazon2 = document.getElementById("corazon2");
let corazon3 = document.getElementById("corazon3");
// clases li click
let op1 = document.getElementById("op1");

keyDownCount = 0
keyUpCount = 0

document.addEventListener("keydown", (event) =>{
    console.log(`Tecla presionada: ${event.key}, Código: ${event.code}, KeyCode: ${event.keyCode}`)

    if(event.keyCode == 40 && keyDownCount == 0){
        corazon2.style.display = "inline"
        corazon1.style.display = "none"
        keyDownCount += 1
    }else if (event.keyCode == 40 && keyDownCount == 1){
        corazon3.style.display = "inline"
        corazon2.style.display = "none"
        keyDownCount += 1
    }else if (event.keyCode == 40 && keyDownCount == 2){
        corazon1.style.display = "inline"
        corazon3.style.display = "none"
        keyDownCount = 0
    }
    // teclas Up
    if(event.keyCode == 38 && keyDownCount == 0){
        corazon3.style.display = "inline"
        corazon1.style.display = "none"
        keyUpCount += 1
        keyDownCount = 2
    }else if(event.keyCode == 38 && keyDownCount == 2){
        corazon2.style.display = "inline"
        corazon3.style.display = "none"
        keyUpCount += 1
        keyDownCount = 1
    }else if(event.keyCode == 38 && keyDownCount == 1){
        corazon1.style.display = "inline"
        corazon2.style.display = "none"
        keyUpCount += 1
        keyDownCount = 0
    }
})

op1.addEventListener("click", () =>{
    window.location.href = "../aboutme/about_index.html"
})