import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import ContactForm from "../../Component/Form/ContactForm";
import Map from "../../Component/Map";
import GotoTop from "../../Component/GotoTop";
import axios from 'axios'
function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [nom, setNom] = useState('');
  const [numTele, setNumTele] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  const [forma, setForma] = useState('');
  const [sujet, setSujet] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [done, setDone] = useState(false)
  const [setResponseMessage] = useState('');

  const formation = [
    { name: "Ansible", date: "21-23 novembre 2023" },
    { name: "Jenkins", date: "24-25 novembre 2023" },
    { name: "Docker", date: "4-6 décembre 2023" },
    { name: "GitLab", date: "14-16 novembre 2023" },
    { name: "Docker", date: "4-6 janvier 2024" },
    { name: "Kubernetes", date: "1, 2 et 3 novembre 2023" },
    { name: "Ansible", date: "21-23 décembre 2023" },
    { name: "Jenkins", date: "24-25 décembre 2023" },
    { name: "GitLab", date: "14-16 décembre 2023" },
    { name: "Kubernetes", date: "1, 2 et 3 décembre 2023" },
    { name: "Ansible", date: "21-23 janvier 2024" },
    { name: "Jenkins", date: "24-25 janvier 2024" },
    { name: "GitLab", date: "14-16 janvier 2024" },
    { name: "Kubernetes", date: "1, 2 et 3 janvier 2024" },
    { name: "Docker", date: "4-6 février 2024" },
    { name: "Kubernetes", date: "1, 2 et janvier 2024" },
    { name: "Ansible", date: "21-23 février 2024" },
    { name: "Jenkins", date: "24-25 février 2024" },
    { name: "GitLab", date: "14-16 février 2024" },
    { name: "Kubernetes", date: "1, 2 et 3 février 2024" },
    { name: "Docker", date: "4-6 mars 2024" },
    { name: "Ansible", date: "21-23 mars 2024" },
    { name: "Jenkins", date: "24-25 mars 2024" },
    { name: "GitLab", date: "14-16 mars 2024" },
    { name: "Kubernetes", date: "1, 2 et 3 mars 2024" },
    { name: "DevOps", date: "24-25 mars 2024" },
    { name: "AiOps", date: "1, 2 et 3 mars 2024" },
    { name: "Coach Agile", date: "14-16 mars 2024" },
    { name: "Design Thinking", date: "1, 2 et 3 février 2024" },
    { name: "Découverte de l'agilité", date: "14-16 janvier 2024" },
    { name: "Scrum Developer", date: "4-6 mars 2024" },
    { name: "Scrum master", date: "1, 2 et 3 février 2024" },
    { name: "Angular", date: "24-25 février 2024" },
    { name: "VMware vSphere v8 (installation, configuration, administration)", date: "1, 2 et janvier 2024" },
    { name: "VMware vSphere v8 (scaling et sécurité)", date: "14-16 mars 2024" },
    { name: "VMware vRealize Automation v8.3 (installation configuration, administration)", date: "21-23 février 2024" },
    { name: "VMware NSX-T v3.2 (installation, configuration, administration)", date: "14-16 décembre 2023" },
  ];

  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = '+';
    const answer = num1 + num2;
  
    return {
      question: `${num1} ${operator} ${num2}`,
      answer: answer.toString(),
    };
  };
  const [mathQuestion, setMathQuestion] = useState(generateMathQuestion());

  



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (userAnswer === mathQuestion.answer) {
      // La réponse est correcte, traitez le formulaire
      try {
        const response = await axios.post('/api/candidatFormation/addcandidat', {
          name: name,
          mail: mail,
          message: message,
          forma: forma,
          nom : nom,
          sujet : sujet,
          numTele : numTele ,

        });
  
        console.log('Candidat ajouté:', response.data);
        setDone(true);
        fetchCandidats();
        // Réinitialisez les champs du formulaire après la soumission réussie si nécessaire
      } catch (error) {
        console.error('Erreur lors de l\'ajout du candidat:', error);
      }
    } else {
      // La réponse est incorrecte, affichez un message d'erreur
      setResponseMessage('La réponse à la question mathématique est incorrecte. Réessayez.');
    }
  };
  const fetchCandidats = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/candidatFormation/allcandidat');
      const candidats = response.data; // Les données retournées par l'API
      console.log(response.data)
      // Faites quelque chose avec les données des candidats, comme générer le contenu du tableau
  
      return candidats; // Vous pouvez également retourner les données si nécessaire
    } catch (error) {
      console.error('Erreur lors de la récupération des candidats:', error);
    }
  };
  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <Header logo="assets/images/logo4.png" joinBtn={true} />
        <Banner title="Contactez-nous" background="assets/images/banner.jpg" />
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact--info-area">
                  <h3>Entrer en contact</h3>
                  <p>
                  Vous cherchez de l'aide ? Remplissez le formulaire et commencez une
                   nouvelle aventure.
                  </p>
                  <div className="single-info">
                    <h5>Quartier général</h5>
                    <p>
                      <i className="icon_house_alt"></i>
                      111 rue Anselme Rondenay

                      <br /> 94400 Vitry-sur-Seine
France
                    </p>
                  </div>
                  <div className="single-info">
                    <h5>Phone</h5>
                    <p>
                      <i className="icon_phone"></i>
                      +33 (0) 1 88 32 77 68
                      <br />
                    </p>
                  </div>
                  <div className="single-info">
                    <h5>Support</h5>
                    <p>
                      <i className="icon_mail_alt"></i>
                      contact@greenlinks.fr
                    </p>
                  </div>
                  {/*<div className="ab-social">
                    <h5>Follow Us</h5>
                    <a className="fac" href="#">
                      <i className="social_facebook"></i>
                    </a>
                    <a className="twi" href="#">
                      <i className="social_twitter"></i>
                    </a>
                    <a className="you" href="#">
                      <i className="social_youtube"></i>
                    </a>
                    <a className="lin" href="#">
                      <i className="social_linkedin"></i>
                    </a>
    </div>*/}
                </div>
              </div>
              <div className="col-md-8">
                <div className="contact-form">
                  <h4>Connectez-vous</h4>
                  <p>
                  Veuillez entrer toutes les informations nécessaires dans le formulaire ci-dessous pour compléter votre candidature.
                  </p>
                  <ContactForm name={name} setName={setName} setNom={setNom} nom ={nom} sujet={sujet} 
                  forma={forma} numTele={numTele} mail={mail} message={message} setSujet={setSujet}
                  formation={formation} mathQuestion={mathQuestion} setMessage={setMessage}
                  setForma={setForma} generateMathQuestion={generateMathQuestion} 
                   setMathQuestion={setMathQuestion} setNumTele={setNumTele} setMail={setMail}
                  handleSubmit={handleSubmit} fetchCandidats={fetchCandidats} userAnswer={userAnswer}
                  setUserAnswer={setUserAnswer} done={done}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Map />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Contact;
