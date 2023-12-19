const mongoose =require ('mongoose')

const candidatModel = mongoose.Schema(
  {

   name: {
      type: String
    },

mail: {
      type : String ,
     },
    message : {
      type: String,
    },
    forma : {
      type: String,
    },
    sujet : {
      type: String,
    },
    nom : {
      type: String,
    },
    numTele : {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Candidat2 = mongoose.model("Candidat2", candidatModel);

module.exports = Candidat2;

