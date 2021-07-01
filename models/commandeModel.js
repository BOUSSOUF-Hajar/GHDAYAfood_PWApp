const mongoose = require('mongoose')


const commandeSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    
   
    cart:{
        type: Array,
        default: []
    },
    adrssseLivr:{
        type:String,
        default:''
    },
    idLivreur:{
        type: mongoose.Schema.Types.ObjectId,
          ref: "users"
    },
    status:{
        type: String,
        default: "Non traitée"
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Commande", commandeSchema)