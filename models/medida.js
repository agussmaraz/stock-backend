import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const medidaSchema = new Schema({
    name: String,
    empaque: Array,

})

const Medida = mongoose.model('Medida', medidaSchema);
export default Medida;