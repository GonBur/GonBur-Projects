/* Modo Nocturno */
let botonClaro = document.getElementById("botonClaro");
let body = document.querySelector("body");

function cambiarModo(){


    if(body.classList.contains("modoDark")){
        body.classList.remove("modoDark")
        botonClaro.innerHTML = '<span class="material-symbols-outlined" id="botonClaro" style="font-weight: bold;"> light_modeModo Claro</span>' 
    }
    else{
        body.classList.add("modoDark")
        botonClaro.innerHTML = '<span class="material-symbols-outlined" id="botonClaro" style="font-weight: bold;"> dark_modeModo Oscuro</span>' 
    }
}
botonClaro.addEventListener("click", cambiarModo)