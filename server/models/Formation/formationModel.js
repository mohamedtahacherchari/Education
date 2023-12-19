const mongoose = require('mongoose')

const formationSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
       // required: true,
        ref: 'Users'
      },

    //items: [{name : String, date :String }],
    FormationName: {
        type: String
    },
    date: {
        type: String
    },
 
}, {
    timestamps: true
})

module.exports = mongoose.model("Formation", formationSchema)