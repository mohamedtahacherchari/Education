const asyncHandler = require('express-async-handler')
const Formation = require("../../models/Formation/formationModel")


// @desc    Create a formation
// @route   POST /api/formation
// @access  Private/Admin
const createFormation = asyncHandler(async (req, res) => {
    const formation = new Formation({
      user: req.user.id,
       name : "react js",
       date: " 21 juillet 2024",
     
      })
  
    const createdFormation = await formation.save()
    res.status(201).json(createdFormation)
  })
// @desc    Update a formation
// @route   PUT /api/formation/:id
// @access  Private/Admin
const updateFormation = asyncHandler(async (req, res) => {
    const {name ,date }= req.body
    const formation = await Formation.findById(req.params.id)
    if (formation)
     {
      formation.name = name,
      formation.date = date 
      const updatedDevis = await formation.save();
  
       res.json(updatedDevis)
     // res.status(400).json({clientf})
  
    } else {
      res.status(404)
      throw new Error('Devis not found')
    }
  
  })

const getFormation = asyncHandler(async (req, res)=>{
    try {
        const Formations = await Formation.find();
        res.status(200).json(Formations)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})


// @desc    Delete a formation
// @route   DELETE /api/formation/:id
// @access  Private/Admin
const deleteFormation = asyncHandler(async (req, res) => {
    const formation = await Formation.findById({_id:req.params.id, user: req.user.id})
  
    if (formation) {
      await devis.remove()
      res.json({ message: 'formation removed'})
    } else {
      res.status(404)
      throw new Error('Formation not found')
    }
  })



// @desc    Fetch single formation
// @route   GET /api/formation/:id
// @access  Public
const getFormationById = asyncHandler(async (req, res) => {
    const formation = await Formation.findById({_id:req.params.id, user: req.user.id})

    if (formation) {
      res.json(formation)
    } else {
      res.status(404)
      throw new Error('formation not found')
    }
  })




  
  

module.exports = {
    createFormation,
    deleteFormation,
    getFormation,
    getFormationById,
    updateFormation
}