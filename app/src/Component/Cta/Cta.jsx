import { Link } from "react-router-dom";

function Cta() {
  return (
    <section
      className="cta-section"
      style={{ backgroundImage: "url(assets/images/home/cta-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span>Cours en ligne</span> Parmi 160 meilleures institutions.
            </h2>
            <p>
            Fort de nos 15 ans d’expérience dans l'IT nous proposons une gamme
             diversifiée de formations pointues. Nous couvrons une palette de domaines
              technologiques essentiels et alignés avec la demande des entreprises.
            </p>
            <Link
              to="/course-1"
              className="bisylms-btn"
              style={{ zIndex: "0" }}
            >
              Start Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
