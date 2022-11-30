import{validarformulario} from './Validacionformulariomedico.js'


// Etiquetas que controlo:
let etiquetaNombre=document.getElementById("nombres")
let etiquetadocumento=document.getElementById("documento")

//Creamos una funcion que nos permita recibir los datos del formulario

 export function capturarDatos(etiquetaNombre, etiquetadocumento,etiquetaEspecialidad,etiquetaRegistro,etiquetaCorreo,etiquetaSede,etiquetaHorario){

let etiquetaNombre=document.getElementById("nombres")
let etiquetadocumento=document.getElementById("documento")
let especialidadMedico=etiquetaEspecialidad.value
let registroMedico=etiquetaRegistro.value
let correoMedico=etiquetaCorreo.value
let SedeMedico=etiquetaSede.value
let HorarioMedico=etiqueHorario.value
let descripcionMedico=etiquetaDescripcion.value
let fotoMedico=etiquetaFoto.value

//Debemos almacenar todos los valores del formulario en una sola variable
// objeto es una variable que permite almacenar una variable en un espacio de memoria

let datosFormularioMedico={
nombre: nombreMedico
documento: etiquetadocumento
especialidad: let especialidadMedico
correo: correoMedico
sedes: SedeMedico
Horario:HorarioMedico
descripcion: descripcionMedico
foto: fotoMedico


nombre:
documento:
especialidad:
correo: 
sedes:
horario: 
descripcion: 
foto:


}