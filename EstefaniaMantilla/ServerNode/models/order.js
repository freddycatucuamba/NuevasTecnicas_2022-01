const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/*+=====================================+
  |         Schema Order                | 
* +=====================================+*/

const OrderSchema = new Schema({

    number_of_adults: {
        type: int, 
        require: true
    },

    number_of_children: {
        type: int,
        require: true
    },

    age_of_childre: {
        type: int,
        require: true
    },

    reservation: {
        type: Schema.ObjectId,
        ref: 'Reservation'
    },

    room: {
        type: Schema.ObjectId,
        ref: 'Room'
    }
})

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;