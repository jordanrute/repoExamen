import NotasMem from '../model/notasMem.js'

class ServicioNotas {

    constructor() {
        this.notasMem = new NotasMem()
    }

    async obtenerNotas() {
        let notas = await this.notasMem.obtenerNotas()
        let notasArray = []
        notas.map(n => notasArray.push(n.nota))
        return notasArray
    }

    calcularPromedio = async () => {
        const notas = await this.notasMem.obtenerNotas()
        const suma = notas.map(n => n.nota).reduce((acc, nota) => acc + nota, 0)
        return suma / notas.length
    }

    obtenerCantidad = async () => {
        const notas = await this.notasMem.obtenerNotas()
        return notas.length
    }

    async agregarNota(nota) {
        return await this.notasMem.agregarNota(nota)
    }

    obtenerNotaMin = async () => {
        const notas = await this.notasMem.obtenerNotas()
        const nota = notas.sort((a, b) => a.nota - b.nota)[0]
        return nota
    }

    obtenerNotaMax = async () => {
        const notas = await this.notasMem.obtenerNotas()
        const nota = notas.sort((a, b) => b.nota - a.nota)[0]
        return nota
    }
}

export default ServicioNotas
