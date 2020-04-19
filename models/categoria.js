import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    name: String,
})

const Categoria = mongoose.model('Categoria', categoriaSchema);
export default Categoria;