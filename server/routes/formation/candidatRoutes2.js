const router = require('express').Router()

const {
    createCandidat, 
    getCandidat,
    //Createformation,
   // getFormation,
   deleteCandidatById,
   deleteCandidats,
} = require('../../controllers/Formation/candidatContoller')
router.route('/addcandidat').post(createCandidat)
router.route('/allcandidat').get(getCandidat)
//router.route('/addformation').post(Createformation)
//router.route('/allformation').get(Createformation)
// Supprimer plusieurs candidats en fonction de critères spécifiques
router.route('/candidats').delete(deleteCandidats);
// Supprimer un candidat par ID
router.route('/candidat/:id').delete(deleteCandidatById);







module.exports = router