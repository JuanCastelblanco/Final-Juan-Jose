export async function buscarMedicos() {
    const URL = "http://localhost:8080/api/medico"

    let peticion = {
        method: "GET"
    }

    let respuestaServidor = await fetch(URL,peticion)
    let medicos = await respuestaServidor.json()
    console.log(medicos)
    return medicos
}

export async function registrarMedico(datosMedico) {
    const URL = "http://localhost:8080/api/medico"
    let peticion = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(datosMedico)
    }
    let respuestaInicial = await fetch(URL, peticion)
    let respuestaFinal = await respuestaInicial.json()
}