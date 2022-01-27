const empezar = document.querySelector(".comenzar")
const frenar = document.querySelector(".frenar")
const resetear = document.querySelector(".resetear")

let segundos = 0
let minutos = 0
let interval
let tiempo 

const minutosDisplay = document.querySelector(".minutos")
const segundosDisplay = document.querySelector(".segundos")

document.addEventListener("DOMContentLoaded", pedirTiempo)

function pedirTiempo(){
    
    tiempo = prompt("¿cuantos minutos contamos?")
    if(isNaN(tiempo) || tiempo.length > 2 || tiempo === ""){
        alert("debe ser un numero de 2 cifras como maximo")
        location.reload()
    }else{
        
        minutosDisplay.textContent = tiempo
    }
  

}

empezar.addEventListener("click", correrTemporizador)
frenar.addEventListener("click", frenarTemporizador)
resetear.addEventListener("click", ()=>{
    location.reload()
})


function correrTemporizador(){
    minutos = parseInt(minutosDisplay.textContent)
    segundos = segundosDisplay.textContent
    estaCorriendo = true
    empezar.classList.add("disabled")
    frenar.classList.remove("disabled")
   

    
    interval = setInterval( ()=>{
    minutosDisplay.textContent = minutos
    
    segundosDisplay.textContent = segundos

    if(segundosDisplay.textContent == 0){
        segundos = 60
        minutos--
    }
    if(segundos < 10){
        segundosDisplay.textContent = `0${segundos}`
    }
    segundos--
    if(minutos < 10){
        minutosDisplay.textContent = `0${minutos}`
    }

   }, 1000)
   
}


function frenarTemporizador(){
    
    empezar.textContent= "restart"
    clearInterval(interval)
    segundos = segundosDisplay.textContent
    minutos = minutosDisplay.textContent
    empezar.classList.remove("disabled")
    frenar.classList.add("disabled")
}