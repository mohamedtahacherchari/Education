const asyncHandler = require('express-async-handler')
const Candidat2 = require('../../models/Formation/candidatModel');
const sendmaildynamique = require('./mail/sendmaildynamique');
const sendmailList = require('./mail/sendmailList');




const createCandidat = asyncHandler(async (req, res) => {
  const {name,nom,mail,message,forma,sujet,numTele} = req.body;
  const candidat = new Candidat2({
     name,
     nom,
     mail,
     message,
     forma,
      sujet,
     numTele
    })
  const createdCandidat = await candidat.save()
  sendmaildynamique(name,nom,mail,message,forma,sujet, numTele) 
  res.status(201).json(createdCandidat)
})


// @desc    Fetch all candidats
// @route   GET /api/candidatFormation
// @access  Public

const getCandidat= asyncHandler(async (req, res) => {
  try{

    const candidats = await Candidat2.find();
    let name = candidats.name
    let mail = candidats.mail
    let forma = candidats.forma
    let message = candidats.message
    sendmailList(name,mail,message,forma,candidats) 

    res.status(200).json(candidats)
   }
    catch(err){
   return res.status(500).json({msg: err.message})
  } })



  const Createformation = asyncHandler(async (req, res) => {
    const {forma ,date } = req.body;
    const candidat = new Candidat2({
   
     forma,
     date
     })
     const createdCandidat = await candidat.save()
     sendmaildynamique(date,forma) 
     res.status(201).json(createdCandidat)
 })


 const getFormation= asyncHandler(async (req, res) => {
  try{
    const candidats = await Candidat2.find().select('forma date');;
     res.status(200).json(candidats)
   }
    catch(err){
   return res.status(500).json({msg: err.message})
  } })



  const deleteCandidatById = async (req, res) => {
    try {
      const candidat = await Candidat2.findByIdAndDelete(req.params.id);
  
      if (!candidat) {
        return res.status(404).json({ message: 'Candidat non trouvé' });
      }
  
      return res.status(200).json({ message: 'Candidat supprimé avec succès' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  // Contrôleur pour supprimer plusieurs candidats en fonction de critères spécifiques (par exemple, par nom)
  const deleteCandidats = async (req, res) => {
    try {
      // Vous pouvez spécifier vos critères de recherche ici
      // Par exemple, supprimer tous les candidats avec un nom donné
      const deletedCandidats = await Candidat2.deleteMany({ name: req.body.name });
      //console.log(req.body)
      if (deletedCandidats.deletedCount === 0) {
        return res.status(404).json({ message: 'Aucun candidat trouvé pour la suppression' });
      }
  
      return res.status(200).json({ message: 'Candidats supprimés avec succès' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
module.exports= {
  deleteCandidatById,
   deleteCandidats,
  createCandidat,
  getCandidat,
  Createformation,
  getFormation

}