const router = require('express').Router()
const auth = require('../../middleware/auth')

const {
    createFormation,
    getFormation,
    deleteFormation,
    updateFormation,
    getFormationById,

} = require('../../controllers/Formation/formationController')

router.route('/allFormation').get(getFormation)
router.route('/:id').delete(auth,deleteFormation)
router.route('/addFormation').post(auth,createFormation)
router.route('/:id').get(auth,getFormationById)
router.route('/:id').put(auth,updateFormation)


module.exports = router