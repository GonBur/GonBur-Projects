/* Modo Nocturno */
let botonClaro = document.getElementById("botonClaro");
let body = document.querySelector("body");

function cambiarModo(){


    if(body.classList.contains("modoDark")){
        body.classList.remove("modoDark")
        botonClaro.innerHTML = '<span class="material-symbols-outlined"style="font-weight: bold;"> light_modeModo Claro</span>' 
    }
    else{
        body.classList.add("modoDark")
        botonClaro.innerHTML = '<span class="material-symbols-outlined"style="font-weight: bold;"> dark_modeModo Oscuro</span>' 
    }
}
botonClaro.addEventListener("click", cambiarModo);



/* Musica */
let audio = document.getElementById("audio");
let botonAudio = document.getElementById("botonAudio");

function activarAudio(){
   
    if (audio.paused){
        audio.play();
        botonAudio.innerHTML = '<span class="material-icons-outlined">headset</span>' 
    }
    else{
        audio.pause();
        botonAudio.innerHTML = '<span class="material-icons-outlined">headset_off</span>' 
    }
}
botonAudio.addEventListener("click", activarAudio)