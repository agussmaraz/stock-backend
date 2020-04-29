const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());
import * as UserController from '../controllers/UserController';

router.post('/register', UserController.register);
router.post('/login', UserController.login)

module.exports = router;