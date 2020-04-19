const express = require('express');
const router = express.Router();
import * as MedidaController from '../controllers/MedidaController';

import Medida from '../models/medida';

router.post('/medida', MedidaController.crear);

router.get('/medida', MedidaController.find);

module.exports = router;