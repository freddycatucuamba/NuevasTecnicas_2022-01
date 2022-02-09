const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/*+=====================================+
  |         Schema AvailiableDate       | 
* +=====================================+*/

const AvailableDateSchema = new ({
    date:{
        type: Date,
        required: true
    },

    isAvailiable:{
        type: Boolean,
        required: true
    }
})

//Crear Modelo
const AvailableDate = mongoose.model('AvailableDate', AvailableDateSchema);

module.exports = AvailableDate;