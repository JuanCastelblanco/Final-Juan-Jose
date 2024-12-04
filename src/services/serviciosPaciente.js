//Paso para consumir API con JS
export async function buscarPacientes() {
    //1. Se configura la url del servicio
    //que se desea consumir (PA ONDE VAS MIJO)
    const URL = "http://localhost:8080/api/paciente"

    //2. Se configura la peticion del servicio a consumir
    //(A QUE VAS PA ALLA OME)
    let peticion = {
        method: "GET"
    }

    //3. Consumir el API(ARRANQUE PUES MIJO)
    let respuestaServidor = await fetch(URL,peticion)
    let pacientes = await respuestaServidor.json()
    console.log(pacientes)
    return pacientes
}

export async function registrarPaciente(datosPaciente) {
    const URL = "http://localhost:8080/api/paciente"
    let peticion = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(datosPaciente)
    }
    let respuestaInicial = await fetch(URL, peticion)
    let respuestaFinal = await respuestaInicial.json()
}