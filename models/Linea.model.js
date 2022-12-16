const {Schema, model} = require('mongoose');

const LineaSchema = new Schema({
    codLinea: {type: Number, required: true},
    nombreLinea: {type: String, required: true},
    sentido: {type: Number, required: true},
    orden: {type: Number, required: true},
    codParada: {type: String, required: true},
    nombreParada: {type: String, required: true},
    direccion: {type: String, required: true},
    lon: {type: Number, required: true},
    lat: {type: Number, required: true}
});

module.exports = model('Linea', LineaSchema);