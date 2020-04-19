import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;


const comidaSchema = new Schema({
    name: { type: String, required: [true, 'Nombre obligatorio'] },
    date: { type: Date, default: Date.now },
    expires: { type: Date, required: [true, 'La fecha de vencimiento es obligatoria'] },
    medida: { type: String, required: [true, 'La medida es obligatoria'] },
    empaque: { type: String, required: [true, 'El empaque es obligatorio'] },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
    amountUnity: { type: Number },
    weightUnit: { type: mongoose.Types.Decimal128 },
    totalUnit: { type: Number },
},
    { timestamps: { createdAt: 'created_at' } })
// console.log(mongoose.Schema.Types.ObjectId);

const Comida = mongoose.model('Comida', comidaSchema);
export default Comida;
