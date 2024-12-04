import { buscarPacientes } from "../../services/serviciosPaciente.js"

//Objetivo: Recibir datos del back y hacerles render(render=PINTARLOS)
//PASO 1. Llamr al API

buscarPacientes()
.then(function(respuestaBack){
    console.log(respuestaBack)
    //PASO 2. Crear una referencia a una etiqueta de html donde vamos a renderizar
    let fila = document.getElementById("fila")

    //PASO 3. Se recorren los datos para obtenerlos de forma separada
    respuestaBack.forEach(function(paciente){
    console.log(paciente)
    //PASO 4. Se crean columnas
    let columna = document.createElement("div")
    columna.classList.add("col")

    //PASO 5.Se crea tarjetas
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    //PASO 6. Se crea una etiqueta para poner el nombre
    let nombre = document.createElement("h2")
    nombre.textContent = paciente.nombre
    let telefono = document.createElement("h2")
    telefono.textContent = paciente.telefono
    let correo = document.createElement("h2")
    correo.textContent = paciente.correo

    //PASO FINAL. (ORDENANDO LAS CARTAS)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(correo)

    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
})