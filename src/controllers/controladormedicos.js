//importaciones

import {capturarDatos} from '../formularios/Formulariomedico.js'


// Etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetaBoton=document.getElementById("botonenvio")
let etiquetadocumento=document.getElementById("documento")

//Detectar el evento del clic
etiquetaBoton.addEventListener("click",function(evento){

    evento.preventDefault()
    capturarDatos(etiquetaNombre,etiquetadocumento)
    
  
    

})