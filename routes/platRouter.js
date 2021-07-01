const router = require('express').Router()
const platCtrl = require('../controllers/platCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/plats')
    .get(platCtrl.getProducts)
    .post(auth, authAdmin, platCtrl.createProduct)
router.route('/myplats/:idFournisseur')
    .get(platCtrl.getmyProducts)
    .post(auth, authAdmin, platCtrl.createProduct)


router.route('/plats/:id')
    .delete(auth, authAdmin, platCtrl.deleteProduct)
    .put(auth, authAdmin, platCtrl.updateProduct)



module.exports = router