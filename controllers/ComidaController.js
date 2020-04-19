import * as comidas from '../services/comida.service'
import Categoria from '../models/categoria';
import Comida from '../models/comida';
import Medida from '../models/medida';
import * as movimientos from '../services/movimiento.service';


export const crear = async (req, res) => {
    const categoria = await Categoria.findOne({ _id: req.body.category })
    req.body.category = categoria;
    // const medida = await Medida.findOne({ _id: req.body.medida })
    // req.body.medida = medida;

    try {
        const comidadb = await comidas.crear(req.body);
        res.status(200).json(comidadb);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            mensaje: 'No se pudo agregar correctamente',
            error
        })
    }
}

export const findById = async (req, res) => {
    const _id = req.params.id;
    try {
        const comidadb = await Comida.findById(_id).populate('category');
        // console.log(_id, comidadb)
        res.json(comidadb);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            mensaje: "No se encontro la comida",
            error
        })
    }
};

export const findAll = async (req, res) => {
    try {
        const comidadb = await Comida.find().populate('category');
        res.json(comidadb);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            mensaje: "No se encontro la comida",
            error
        })
    }
}

export const deleteId = async (req, res) => {
    const _id = req.params.id;
    try {
        const comidadb = await Comida.findByIdAndDelete({ _id });
        if (!comidadb) {
            return res.status(500).json({
                mensaje: "No se encontro el producto",
                error
            });
        }
        res.json(comidadb);
    }
    catch (error) {
        return res.status(500).json({
            mensaje: "No se pudo eliminar el producto",
            error
        })
    }
};

export const editId = async (req, res) => {
    const body = req.body;
    const _id = req.params.id;
    try {
        const comidaTodo = await Comida.findById(_id);
        const unidadesTotalAntes = comidaTodo.totalUnit;

        const comidadb = await Comida.findByIdAndUpdate(_id, body, { new: true });
        // console.log(comidadb.date)
        const unidadesTotalAhora = comidadb.totalUnit;
        
        if (unidadesTotalAntes !== unidadesTotalAhora) {
            const diferencia = unidadesTotalAhora - unidadesTotalAntes;
            if (diferencia == 1) {
                await movimientos.crear(comidadb, 'suma', diferencia, comidadb.date);
            }
            else {
                await movimientos.crear(comidadb, 'resta', Math.abs(diferencia), comidadb.date);
            }
        }
        res.json(comidadb);

    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            mensaje: "No se pudo hacer un update del producto",
            error
        })
    }
};