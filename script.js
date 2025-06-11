let button = document.getElementById("boton");

button.addEventListener("click", ()=>{
    
    if(screen.width < 650){
        window.location.href = "./aboutme/about_index.html"
    }else{
        window.location.href= './aboutme copy/about_index.html'
    }
})

