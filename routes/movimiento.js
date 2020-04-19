const express = require('express')
const router = express.Router();

import Movimiento from '../models/movimiento';
import { buscar } from '../services/movimiento.service';
import Comida from '../models/comida';

router.get('/movimiento', async (req, res) => {
    try {
        const movimientodb = await Movimiento.find().populate('comida');
        res.json(movimientodb);
        console.log(movimientodb);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            mensaje: 'No se encontraron resultados',
            error
        })
    }
})
router.get('/movimientoComida/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const movimientodb = await buscar(_id);
        
        res.json(movimientodb);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            mensaje: 'No se encontraron resultados',
            error
        })
    }
})
module.exports = router;
