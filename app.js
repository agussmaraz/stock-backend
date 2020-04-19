const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')
const mongoose = require('mongoose');

//Conexion a base de datos
const uri = 'mongodb://localhost:27017/stock';
const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };
mongoose.connect(uri, options).then(
    () => { console.log('Conectado a mongodb') },
    err => { err }
);

//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Crear index
app.get('/', (req, res) => {
    res.end('Hola Agustina');
});
app.use('/api', require('./routes/comida'));
app.use('/api', require('./routes/categoria'));
app.use('/api', require('./routes/movimiento'));
app.use('/api', require('./routes/medida'));





// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


// Levantar server
app.listen(3000, function () {
    console.log('Server arriba')
});



