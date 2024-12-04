import { registrarSignoVital } from "../services/serviciosSignoVital.js"

let nombreSignoVital = document.getElementById("nombreSignoVital")
let valorSignoVital = document.getElementById("valorSignoVital")
let fechaMedidaSignoVital = document.getElementById("fechaMedidaSignoVital")

let botonRegistroSignoVita = document.getElementById("botonRegistroSignoVital")

botonRegistroSignoVita.addEventListener("click", function(evento) {
    evento.preventDefault()

    let datosFormularioSignoVital = {
        nombre: nombreSignoVital.value,
        valor: valorSignoVital.value,
        fechaMedida: fechaMedidaSignoVital.value
    }

    console.log(datosFormularioSignoVital)
    registrarSignoVital(datosFormularioSignoVital)
    .then(function(respuestaBack){
        console.log(respuestaBack)
        Swal.fire({
            title: "Registro exitoso",
            text: "Ya eres parte de nuestra gran familia",
            icon: "success"
        })
    });
})