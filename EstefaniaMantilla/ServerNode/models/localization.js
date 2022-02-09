const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/*+=====================================+
  |         Schema Location|            | 
* +=====================================+*/
const LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    hot: {
        type: int,
        required: true
    },

    typeLocation: {
        type: int,
        required: true
    },

    isCapital: {
        type: Boolean,
        required: true
    }
})
//Crear Modelo
const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;