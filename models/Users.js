const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String},
    last_name: {type: String},
    email: {type: String, required: true},
    password: {type: String},
    date: {type: Date, default: Date.now}
})

const User = mongoose.model('users', userSchema)
export default User;