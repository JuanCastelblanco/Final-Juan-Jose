import { buscarMedicos } from "../../services/serviciosMedico.js"

buscarMedicos()
.then(function(respuestaBack){
    console.log(respuestaBack)
    let fila = document.getElementById("fila")

    respuestaBack.forEach(function(medico){
    console.log(medico)
    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    let nombre = document.createElement("h2")
    nombre.textContent = medico.nombre
    let telefono = document.createElement("h2")
    telefono.textContent = medico.telefono
    let correo = document.createElement("h2")
    correo.textContent = medico.correo

    tarjeta.appendChild(nombre)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
})