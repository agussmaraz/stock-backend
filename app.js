const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const session = require(express-session);


//Conexion a base de datos
const uri = 'mongodb://localhost:27017/stock';
const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };
mongoose.connect(uri, options).then(
    () => { console.log('Conectado a mongodb') },
    err => { err }
);

var Users = require('./routes/Users');
app.use('/users', Users);


//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Crear index
app.get('/', (req, res) => {
    res.end('Hola Agustina');
});
app.use('/api', require('./routes/comida'));
app.use('/api', require('./routes/categoria'));
app.use('/api', require('./routes/movimiento'));
app.use('/api', require('./routes/medida'));
app.use('/api', require('./routes/users'));





// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


// Levantar server
app.listen(3000, function () {
    console.log('Server arriba')
});



