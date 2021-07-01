const router = require('express').Router()
const commandeCtrl = require('../controllers/commandeCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/commande')
    .get(auth, authAdmin, commandeCtrl.getCommandes)
    .post(auth, commandeCtrl.createCommande)
    router.route('/commande/:id').put(auth, commandeCtrl.updateCommande)




module.exports = router
