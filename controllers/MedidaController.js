import Medida from '../models/medida';

export const crear = async (req, res) => {
    const body = req.body;
    try {
        const medidadb = await Medida.create(body);
        res.status(200).json(medidadb);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            mensaje: 'Ocurrio un problema',
            error
        })
    }
}

export const find = async (req, res) => {
    try {
        const medidadb = await Medida.find();
        res.status(200).json(medidadb);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: 'Ocurrio un problema',
            error
        })
    }
}