const Hotel = require('../models/hotel')

exports.getData = (req, res) => {
    model.find({}, (err, docs) =>{
        res.send({
            data : 1
        })
    })

}

exports.insertData = (req, res) => {

    
}