const express = require('express');
const router = express.Router();
import * as ComidaController from '../controllers/ComidaController'; 
// console.log(router);

//importar el modelo comida
import Comida from '../models/comida';
import Categoria from '../models/categoria';

router.post('/comida-nueva', ComidaController.crear);

router.get('/comida/:id', ComidaController.findById);

router.get('/comida', ComidaController.findAll);

router.delete('/comida/:id', ComidaController.deleteId);

router.put('/comida/:id', ComidaController.editId);

module.exports = router;