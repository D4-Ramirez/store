const mongoose = require('mongoose');
const { Schema } = mongoose;

const Cloth = new Schema({
    type: String,
    name: String,
    size: Number
});

module.exports = mongoose.model('Cloth', Cloth);