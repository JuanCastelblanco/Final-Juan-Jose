export async function buscarSignoVital() {
    
    const URL = "http://localhost:8080/api/signoVital"
    let peticion = {
        method: "GET"
    }

    let respuestaServidor = await fetch(URL, peticion)
    let signosVitales = await respuestaServidor.json()
    return signosVitales
}

export async function registrarSignoVital(datosSignoVital) {
    const URL = "http://localhost:8080/api/signoVital"
    let peticion = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(datosSignoVital)
    }
    let respuestaInicial = await fetch(URL, peticion)
    let respuestaFinal = await respuestaInicial.json()
    return respuestaFinal;
}