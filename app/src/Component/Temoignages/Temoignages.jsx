import "./Temoignages.css";



const Testimonial = () => {
  return (
      <>
      <div className="testimonial-content" id="testimonial" >
        <h1>Témoignages</h1>
        <div className="profile-container">
          <div className="profile">
            <div className="icon-container">
            <img
             // src={profile4}
             src="assets/images/home/profile4.jpg"

              alt="Image 1"
              width="100"
              height="100"
              style={{ borderRadius: "50%" }}
            />
              <div className="icon-green">
                <img
                 src="assets/images/home/greencheckicon.png"
                  alt="Coche verte"
                  width="20"
                  height="20"
                />
              </div>
              <p2>Amine B.</p2>
            </div>
            <div className="star-container">
              <img
            
                src="assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
              <img
            src="assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
              <img
             src="assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
              <img
                src="assets/images/home/staricon.jpg"
                alt="Étoile"
                width="20"
                height="20"
              />
              <img
                src= "assets/images/home/staricongray.png"
                alt="Étoile grise"
                width="20"
                height="20"
              />
            </div>
      
            <p>
              Je partais de zéro sur Python et la formation initiation m'a beaucoup aidé
              à appréhender ce langage qui est finalement assez simple à prendre en 
              main.La formation m'a donné l'élan nécessaire pour réorienter ma carrière vers Python.
            </p>
          </div>
          <div className="profile">
            <div className="icon-container">
            <img
              
              src= "assets/images/home/profile5.jpg"

              alt="Image 2"
              width="100"
              height="100"
              style={{ borderRadius: "50%" }}
            />
              <div className="icon-green">
                <img
                
                  src= "assets/images/home/greencheckicon.png"

                  alt="Coche verte"
                  width="20"
                  height="20"
                />
              </div>
              <p2>Alexandre N.</p2>
            </div>
            <div className="star-container">
              <img
                
                src= "assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
              <img
                               src= "assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
              <img
                             src= "assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
              <img
                               src= "assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
              <img
                               src= "assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
            </div>
        
            <p>
             J'ai participé à une formation de 3 jours<br/> sur Docker qui m'a permis <br/>de progresser rapidement , <br/>
             nottament sur Docker Compose . <br/>Bravo au formateur <br/>et sa pédagogie sur des sujets complexes.

            </p>
          </div>
          <div className="profile">
            <div className="icon-container">
            <img
              
              src= "assets/images/home/profile6.jpg"

              alt="Image 3"
              width="100"
              height="100"
              style={{ borderRadius: "50%" }}
            />
              <div className="icon-green">
                <img
                  src= "assets/images/home/greencheckicon.png"

                  alt="Coche verte"
                  width="20"
                  height="20"
                />
              </div>
              <p2>Adeline P.</p2>
            </div>
            <div className="star-container">
              <img
                src= "assets/images/home/staricon.jpg"
 
                alt="Étoile"
                width="20"
                height="20"
              />
              <img
              
                src= "assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
              <img
                            src= "assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
              <img
                                src= "assets/images/home/staricon.jpg"

                alt="Étoile"
                width="20"
                height="20"
              />
              <img
               
                src= "assets/images/home/staricongray.png"

                alt="Étoile grise"
                width="20"
                height="20"
              />
            </div>
          
            <p>
              La formation d'initiation en Python en distanciel a été une belle introduction<br/>  pour 
              mes débuts sur ce langage.<br/> Le formateur a su nous donner les clés pour bien démarrer.
              Impatiente de poursuivre sur le prochain niveau en avancé .
            </p>
          </div>
        </div>
        
      </div>
      <div className="container" style={{marginTop:"10%"}}>
      <div className="colonne gauche">
        <h1>Vous souhaitez former votre équipe ? </h1>
        
      </div>
      <div className="colonne droite">
      <p>Vous avez besoin de consolider les compétences de vos équipes ?</p>
        <p>Prenez contact avec notre équipe dédiée pour obtenir un devis sur mesure.</p>
      </div>
      
    
    </div>
    
   

    </>

  );
};

export default Testimonial;
