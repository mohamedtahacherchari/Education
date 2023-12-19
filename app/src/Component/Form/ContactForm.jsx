import PropTypes from 'prop-types';
import {TextField,FormControl,InputLabel,Select,MenuItem,FormHelperText} from '@mui/material'; 
function ContactForm({name ,setName, setNom, nom , sujet,
  forma,numTele,mail,message, setSujet,formation,mathQuestion, setMessage,
  setForma,setMail,setUserAnswer,userAnswer,setNumTele,handleSubmit,done}) {



    ContactForm.propTypes = {
      name: PropTypes.string,
      setName: PropTypes.func,
      setNom: PropTypes.func,
      done :PropTypes.String,
      nom: PropTypes.string,
      userAnswer : PropTypes.String,
      sujet: PropTypes.string,
      forma: PropTypes.string, // Assuming 'forma' is a string, adjust if it's a different type
      numTele: PropTypes.string, // Assuming 'numTele' is a string, adjust if it's a different type
      mail: PropTypes.string,
      message: PropTypes.string,
      setSujet: PropTypes.func,
      formation: PropTypes.arrayOf(PropTypes.string), // Assuming 'formation' is an array of strings
      mathQuestion: PropTypes.shape({
        question: PropTypes.string,
        // Add other properties as needed based on the structure of 'mathQuestion'
      }),
      setForma: PropTypes.func,
    // generateMathQuestion: PropTypes.func,
     // setMathQuestion: PropTypes.func,
      setNumTele: PropTypes.func,
      handleSubmit: PropTypes.func,
     // fetchCandidats: PropTypes.func,
      setMessage: PropTypes.func,
      setMail: PropTypes.func, // Assuming 'setMail' is a function
      setUserAnswer: PropTypes.func,
    };
  return (
    <form action="#" method="post" className="row" onSubmit={handleSubmit} >
      <div className="col-md-6">
        <input type="text" name="f-name" placeholder="Prénom" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <input type="text" name="l-name" placeholder="Nom de famille" 
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <input type="email" name="email" placeholder="Adresse e-mail"
         value={mail}
         onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <input type="number" name="phone" placeholder="Numéro de téléphone"
         value={numTele}
         onChange={(e) => setNumTele(e.target.value)}
        />
      </div>
      <div className="col-md-12">
        <input type="text" name="suject" placeholder="Sujet"
         value={sujet}
         onChange={(e) => setSujet(e.target.value)}
        />
      </div>
      <div className="col-md-12">
        <textarea name="message" placeholder="Comment pouvons nous aider?"
         value={message}
         onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <div className="col-md-12">
      <FormControl variant="outlined" fullWidth>
          <InputLabel>Formation</InputLabel>
          <Select
            value={forma}
            onChange={(e) => setForma(e.target.value)}
          >
            {formation.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Choisissez une  formation</FormHelperText>
        </FormControl>
        
       </div>
        <div className="col-md-12">
        <TextField
          label={`Question mathématique: ${mathQuestion.question} = ?`}
          variant="outlined"
          fullWidth
          name="captcha"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Réponse"
          required
        />
        

  

      </div>

      <div className="col-md-6">
        <div className="condition-check">
          <input id="terms-conditions" type="checkbox" />
          <label htmlFor="terms-conditions">
          J'accepte <a href="#">les termes et conditions</a>
          </label>
        </div>
      </div>
      <div className="col-md-6 text-right">
        <input type="submit" name="submit" value="Envoyer le message" />
      </div>
      
      {done && <p>Merci de nous avoir contacté</p>}
    </form>
  );
}

export default ContactForm;
