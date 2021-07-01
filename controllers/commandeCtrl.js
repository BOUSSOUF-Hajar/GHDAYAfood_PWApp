const Commande = require('../models/commandeModel')
const Users = require('../models/userModel')
const Plat = require('../models/platModel')


const commandeCtrl = {
    getCommandes: async(req, res) =>{
        try {
            const commandes = await Commande.find()
            res.json(commandes)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCommande: async(req, res) => {
        try {
            
            /* const Livreur = await Users.findOne({role:'LIVREUR'}).select('name')
            const user = await Users.findById(req.user.id).select('name email adresse')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const {cart} = req.body;

            const {_id, name, email,adresse} = user;
            const {idLivreur,nameLiv}=Livreur;
            console.log(idLivreur)*/
            const user = await Users.findById(req.user.id).select('name email adresse')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const {cart} = req.body;

            const {_id, name, email,adresse} = user;
            const idLivreur="60d8fad2b0937a25ac280c4e"
            const newCommande = new Commande({
                user_id: _id, name, email,cart,adrssseLivr:adresse,idLivreur
            })

            cart.filter(item => {
                return sold(item._id, item.quantity, item.sold)
            })

            
            await newCommande.save()
            res.json({msg: "Payment Succes!"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateCommande: async(req, res) =>{
        try {
            const {statut} = req.body;
           
            await Commande.findOneAndUpdate({_id: req.params.id}, {
                status:statut
            })

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
    
}

const sold = async (id, quantity, oldSold) =>{
    await Plat.findOneAndUpdate({_id: id}, {
        sold: quantity + oldSold
    })
}

module.exports = commandeCtrl
