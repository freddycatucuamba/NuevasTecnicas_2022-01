const mongoose = require('mongoose')
const Schema = mongoose.Schema;


/*+=====================================+
  |         Schema Reservation          | 
* +=====================================+*/

const ReservationSchema = new Schema({
    
    total: {
        type: float,
        required: true
    },

    date_in: {
        type: Date,
        required: true
    },

    date_on: {
        type: Date,
        required: true
    },

    customer_name:{
        type: String,
        required: true
    },

    customer_email = {
        type: String,
        required: true
    },

    customer_sex = {
        type: int,
        required: true
    },

    customer_is_smoke = {
        type: Boolean,
        required: true
    },

    customer_special_requirement = {
        type: String,
        required: true
    }    

})
const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;