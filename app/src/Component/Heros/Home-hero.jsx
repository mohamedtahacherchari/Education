import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section
      className="hero-banner-1"
      style={{ backgroundImage: "url(assets/images/home/banner.png)" }}
    >
      {/* shape  */}
      <div className="shape-wrap">
        <div className="b-shape-1">
          <img src="assets/images/home/shape-1.png" alt="" />
        </div>
        <div className="b-shape-2">
          <img src="assets/images/home/shape-2.png" alt="" />
        </div>
        <div className="b-shape-3">
          <img src="assets/images/home/shape-3.png" alt="" />
        </div>
        <div className="b-shape-4">
          <img src="assets/images/home/shape-4.png" alt="" />
        </div>
      </div>
      {/* shape  */}
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="hero-content">
              <h2>Votre parcours vers le succès</h2>
            { /* <p>
                Loo you mug lurgy baking cakes boot cracking goal morish up the
                duff haggle hotpot faff about no biggie burke, is bleeder
                bamboozled bite your.
  </p>*/}
  <p>
  Nos formateurs expérimentés et passionnés sont des experts reconnus
dans leurs domaines respectifs. Ils apportent une expérience pratique du monde
de l'entreprise à nos programmes de formation, offrant ainsi
une mise en application immédiate sur des problématiques réelles.
  </p>
              <Link to="/listFormation" className="bisylms-btn">
              Nos formations les plus demandées </Link>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="banner-thumb">
              <img src="assets/images/home/layer.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
