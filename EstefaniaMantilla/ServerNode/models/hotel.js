const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/*+=====================================+
  |         Schema Hotel                | 
* +=====================================+*/

const HotelSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    introduccion: {
        type: String,
        required: true
    },

    estrellas: {
        type: String,
        required: true
    },

    temperatura: {
        type: String,
        required: true
    },

    direccion: {
        type: String,
        required: true
    },

    /*location: {
        type: Schema.ObjectId,
        ref: 'Location'
    }*/
})
//Crear Modelo
const Hotel = mongoose.model('hotel', HotelSchema);

module.exports = Hotel;
