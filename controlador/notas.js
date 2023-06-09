import ServicioNotas from '../servicio/notas.js'

class ControladorNotas {

    constructor() {
        this.servicioNotas = new ServicioNotas()
    }

    obtenerNotas = async (req, res) => {
        try {
            const notas = await this.servicioNotas.obtenerNotas()
            res.json({ notas })
        }
        catch (error) {
            console.log('error obtenerNotas', error)
        }
    }

    calcularPromedio = async (req, res) => {
        try {
            const promedio = await this.servicioNotas.calcularPromedio()
            res.json({ promedio })
        }
        catch (error) {
            console.log('error calcularPromedio', error)
        }
    }

    obtenerCantidad = async (req, res) => {
        try {
            const cantidad = await this.servicioNotas.obtenerCantidad()
            res.json({ cantidad })
        }
        catch (error) {
            console.log('error obtenerCantidad', error)
        }
    }

    agregarNota = async (req, res) => {
        try {
            let nota = req.body
            let notaGuardada = await this.servicioNotas.agregarNota(nota)
            res.json(notaGuardada)
        }
        catch (error) {
            console.log('error agregarNota', error)
        }
    }

    obtenerMinMax = async (req, res) => {
        try {
            const notaMin = await this.servicioNotas.obtenerNotaMin()
            const notaMax = await this.servicioNotas.obtenerNotaMax()
            res.json({ min: notaMin.nota, max: notaMax.nota })
        }
        catch (error) {
            console.log('Error obtenerMinMax', error)
        }
    }

}

export default ControladorNotas
