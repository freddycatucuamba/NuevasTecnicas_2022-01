const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/*+=====================================+
  |         Schema RoomType             | 
* +=====================================+*/
const RoomTypeSchema = new Schema({
    typeRoom: {
        type: String,
        required: true
    },

    list_price: {
        type: float,
        required: true
    }
})

const RoomType = mongoose.model('RoomType', RoomTypeSchema);

module.exports = RoomType;