const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

import User from '../models/Users';
process.env.SECRET_KEY = 'secret';

export const register = async (req, res) => {
    const today = new Date();
    try {
        const userData = {
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            created: today,
        };
        // console.log(userData);

        var BCRYPT_SALT_ROUNDS = 12;
        const userdb = await User.findOne({ email: req.body.email });
        // console.log(userdb);
        if (!userdb) {
            try {
                bcrypt.hash(userData.password, BCRYPT_SALT_ROUNDS, (err, hash) => {
                    try {
                        userData.password = hash;
                        User.create(userData);
                        res.status(200).json({ mensaje: 'Se ha registrado con exito' });
                    } catch (error) {
                        console.log(error);
                        res.status(409).json({ mensaje: 'Hubo un problema al registrarse' });
                    }
                });
            } catch (error) {
                console.log(error);
                res.status(409).json({ mensaje: 'Hubo un problema al registrarse' });
            }
        } else {
            res.status(500).json({
                mensjae: 'El usuario ya se encuentra registrado',
            });
        }
    } catch (error) {
        console.log(error);
        res.status(409).json({ mensaje: 'Hubo un problema al registrarse' });
    }
};

export const login = async (req, res) => {
    const userdb = await User.findOne({ email: req.body.email });
    console.log(req.body.password);
    try {
        if (userdb) {
            if (bcrypt.compare(req.body.password, userdb.password)) {
                const payload = {
                    _id: userdb._id,
                    name: userdb.name,
                    last_name: userdb.last_name,
                    email: userdb.email,
                };
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 1440,
                });
                res.send(token);
            } else {
                res.json({ error: 'User does not exist' });
            }
        } else {
            res.json({ error: 'User does not exist' });
        }
    } catch (error) {
        res.send('error: ' + error);
    }
};
