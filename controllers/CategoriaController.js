import Categoria from '../models/categoria';

export const crear = async (req, res) => {
    const body = req.body;
    try {
        const categoriadb = await Categoria.create(body);
        res.status(200).json(categoriadb);
    }
    catch (error) {
        return res.status(500).json({
            mensaje: "No se pudo agregar la nueva categoria",
            error
        })
    }
};

export const findAll = async (req, res) => {
    try {
        const categoriadb = await Categoria.find();
        res.status(200).json(categoriadb);
    }
    catch (error) {
        return res.status(500).json({
            mensaje: "No se encontraron las categorias",
            error
        })
    }
};