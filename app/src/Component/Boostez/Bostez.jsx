import "swiper/css";
import PhrasesGrid from "./PhrasesGrid";
///import refas from "../../img/refas.png";
//import Ecommerce from "../../img/ecommerce.png";
//import HOC from "../../img/hoc.png";
//import MusicApp from "../../img/musicapp.png";
///import greenlinks from "../../img/greenlinks.png";
//import PhrasesGrid from "./PhrasesGrid";

const Bostez = () => {

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "vh", // Centrer verticalement sur la page
    textAlign: "center",
  };

 

  const titleStyles = {
    marginBottom: "0", // Enlever la marge en bas du titre
  };

  const paragraphStyles = {
    marginBottom: "0", // Enlever la marge en bas du paragraphe
  };

  return (
    <div id="portfolio" style={{containerStyles,marginTop:"10%",marginBottom:"10%"}} className="portfolio" >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={titleStyles}>Boostez votre carrière !</h1>
        <p style={paragraphStyles}>
          Éliminez vos barrières et dépassez vos limites avec nos formations.
        </p>
      </div>
      <PhrasesGrid />
    </div>
  );
};

export default Bostez;
