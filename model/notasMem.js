class NotasMem {

    constructor() {
        this.notas = [
            { nota: 3 },
            { nota: 4 },
            { nota: 5 },
            { nota: 6 },
            { nota: 10 }
        ];
    }

    obtenerNotas = async () => {
        try {
            return this.notas
        }
        catch (error) {
            console.log('error en obtenerNotas', error)
            return []
        }
    }

    agregarNota = async nota => {
        try {
            this.notas.push(nota)
            return nota
        }
        catch (error) {
            console.log('error en agregarNota:', error)
            let nota = {}
            return nota
        }
    }
}

export default NotasMem