import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const movimientoSchema = new Schema({
    comida: {type: mongoose.Schema.Types.ObjectId, ref: 'Comida'},
    accion: String,
    valor: Number,
    date: Date
})

const Movimiento = mongoose.model('Movimiento', movimientoSchema);
export default Movimiento;