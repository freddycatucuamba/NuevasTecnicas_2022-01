
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

/*+=====================================+
  |         Schema Room                 | 
* +=====================================+*/

const RoomSchema = new Schema({
    number:{
        type: 32,
        required: true
    },

    room_type:{
        type: Schema.ObjectId,
        ref: 'RoomType',
    },

    availiable:{
        type: Schema.ObjectId,
        ref: 'Availiable'
    },

    hotel: {
        type: Schema.ObjectId,
        ref: 'Hotel'
    }
})

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;