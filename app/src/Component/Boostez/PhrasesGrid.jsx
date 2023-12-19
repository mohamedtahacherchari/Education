import React from 'react';
import './Bosstez.css';
//import greenlinks from "../../img/greenlinks.png";

const PhrasesGrid = () => {
  const phrases = [
    { text: 'Toujours à jour', description: 'Des informations alignées avec la demande  des \n entreprises.' },
    { text: 'Gagnez en confiance', description: 'Avec une meilleure maîtrise technique , vous serez plus  \n serein  dans nos missions quotidiennes.' },
    { text: 'Networking', description: 'En paticipant à des foramtions , vous étendez votre \n réseau professionnel en intra et /ou \n inter-entreprise .' },
    { text: 'Elargissez vos horizons', description: 'Créez-vous de nouvelles opportunités grâce à vos \n nouvelles compétences .' },
    { text: 'Renforcez votre CV', description: 'Avec de nouvelles compétences, vous atteindrez \n plus rapidement  l\'expertise ou une évolution de carrière.' },
    { text: 'Gagner en visibilité', description: 'Se tenir à jour régulièrement montre une motivation et \n une implication dans votre rôle au sein de l \'entreprise .' },
  ];

  return (

    
    <div className="phrases-grid" style={{marginTop:"0px"}}>
  
      <div className="phrase-list">
        {phrases.map((phrase, index) => (
          <div className="phrase-item" key={index}>
            <div className="circle">
              <div className="check">✔</div>
            </div>
            <p className="bold">{phrase.text}</p>
            <p className="description" style={{ whiteSpace: 'pre-line' }}>{phrase.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhrasesGrid;
