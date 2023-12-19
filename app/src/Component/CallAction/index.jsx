import ProtoTypes from "prop-types";
function CallAction({ btnClass }) {
  return (
    <section
      className="cta-section-2"
      style={{ backgroundImage: "url(assets/images/home3/4.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="sec-title mb-15">
            Tirez le meilleur parti de votre
              <br /> expérience d'apprentissage en ligne
            </h2>
            <p>
            Notre centre de ressources d'apprentissage en ligne propose des conseils, des astuces et des sources d'inspiration.
               des histoires pour vous aider
              <br /> Apprendre en restant à la maison.
            </p>
            <a href="#" className={btnClass ? btnClass : "bisylms-btn-3"}>
            Explorer les ressources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

CallAction.propTypes = {
  btnClass: ProtoTypes.string,
};

export default CallAction;
