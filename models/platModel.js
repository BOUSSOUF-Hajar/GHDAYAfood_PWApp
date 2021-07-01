const mongoose = require('mongoose')


const platSchema = new mongoose.Schema({
    
    title:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    
    images:{
        type: Object,
        required: true
    },
    frns: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users"
        }
      ,
    adresse:{
        type:String,
        default:''
    },
    sold:{
        type: Number,
        default: 0
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Plats", platSchema)