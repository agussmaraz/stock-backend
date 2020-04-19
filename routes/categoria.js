const express = require('express');
const router = express.Router();
import * as CategoriaController from '../controllers/CategoriaController';

import Categoria from '../models/categoria';

router.post('/categoria', CategoriaController.crear); 

router.get('/categoria', CategoriaController.findAll);

module.exports = router;