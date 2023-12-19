import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";   
import { course } from "../../Data/course";
import FeatureCourseCard from "../../Component/Cards/FeatureCourseCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import LatestCourseCard from "../../Component/Cards/LatestCourseCard";
import ReviewForm from "../../Component/Form/ReviewForm";
import GotoTop from "../../Component/GotoTop";

function CourseSingle() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState("Aperçu");
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return "<span className=" + className + " myPagination" + "></span>";
    },
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
        <Banner title="Kubernetes" background="assets/images/banner9.png" />
        {/* course section start */}
        <section className="course-details-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="single-course-area">
                  <div className="course-top">
                    <p>FORMATION EN DISTANCIEL</p>
                    <h4>Kubernetes - Initiation & avancé</h4>
                    <p>
					Découvrez et appréhendez l'un des outils les plus complets pour 
					le déploiement d'applications dans des conteneurs logiciels.

                    </p>
                    <div className="course-meta">
                      <div className="author">
                        <img src="assets/images/home3/course/a1.png" alt="" />
                        <span>Professeure</span>
                        <Link to="/">Justin Case</Link>
                      </div>
                      <div className="categories">
                        <span>Catégories:</span>
                        <Link to="/course-1">DevOps</Link>
                      </div>
                      <div className="ratings">
                        <span>4.5 (9 Commentaires)</span>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                      </div>
                    </div>
                    <div className="course-price">
                      $75.00
                      <span>$92.00</span>
                    </div>
                  </div>
                  <div className="sc-thumb">
                    <img src="assets/images/single-course/5.jpeg" alt="" />
                  </div>
                  <div className="course-tab-wrapper">
                    <ul className="course-tab-btn nav nav-tabs">
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={activeView === "Aperçu" ? "active" : ""}
                        >
                          <i className="icon_ribbon_alt"></i>Aperçu
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={
                            activeView === "Programme d'études" ? "active" : ""
                          }
                        >
                          <i className="icon_book_alt"></i>Programme d'études
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={
                            activeView === "Instructeurs" ? "active" : ""
                          }
                        >
                          <i className="icon_profile"></i>Instructeurs
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={activeView === "Commentaires" ? "active" : ""}
                        >
                          <i className="icon_star"></i>Commentaires
                        </a>
                      </li>
                    </ul>
                    {/* Tab Content  */}
                    <div className="tab-content">
                      {/* Overview Tab  */}
                      {activeView === "Aperçu" && (
                        <div
                          className="tab-pane fade in show active"
                          id="overview"
                          role="tabpanel"
                        >
                          <div className="overview-content">
                
<h4>Description du cours</h4>
<p>Plongez dans l'univers de Kubernetes, l'outil DevOps incontournable. Notre formation intensive vous guidera à travers les fondamentaux et les subtilités de Kubernetes, révolutionnant ainsi la gestion des conteneurs et l'orchestration d'applications. Explorez les avantages de l'isolation, de la portabilité et de la scalabilité offerts par Kubernetes. Soyez prêt à maîtriser cet outil puissant et à libérer tout son potentiel pour vos déploiements d'applications modernes.</p>
                            <p>
                              
                            </p>
                            <h4>Description du cours</h4>
                            <ul>
                            <li>
    <i className="icon_check_alt2"></i>
    Apprenez les dernières compétences
    <span>
        Dominez les aspects avancés de Kubernetes, des conteneurs aux orchestrations,
        afin d'optimiser le déploiement et la gestion de vos applications. Explorez les
        pratiques collaboratives avec les fonctionnalités les plus récentes, propulsant ainsi votre
        expertise dans le domaine du déploiement et de la gestion d'environnements logiciels.
    </span>
</li>
                              <li>
                                <i className="icon_check_alt2"></i>
                                Obtenez un certificat ou un diplôme
                                <span>
								
Obtenez une certification officielle en maîtrisant Kubernetes, renforçant ainsi
 vos compétences en déploiement et gestion d'applications conteneurisées. 
 Recevez un diplôme attestant de votre expertise dans l'utilisation avancée de Kubernetes,
  ouvrant la voie à une carrière florissante dans 
le domaine du déploiement logiciel et de la gestion d'environnements virtualisés.                
                                </span>
                              </li>
                              <li>
    <i className="icon_check_alt2"></i>
    Préparez-vous pour une carrière
    <span>
        Préparez-vous de manière exhaustive pour une carrière réussie en apprenant Kubernetes,
        l'outil incontournable de l'orchestration d'applications conteneurisées. Acquérez les
        compétences essentielles de déploiement et de gestion d'environnements virtualisés pour
        exceller dans le domaine et propulser votre parcours professionnel vers de nouveaux sommets.
    </span>
</li>
                            </ul>
                          </div>
                        </div>
                      )}
                      {/* Overview Tab  */}
                      {/* Curriculum Tab  */}
                      {activeView === "Programme d'études" && (
                        <div
                          className="tab-pane fade in show active"
                          id="curriculum"
                          role="tabpanel"
                        >
						<h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Objectifs pédagogiques</h6>	
A l’issue de la formation, le participant sera en mesure de :<br/>
- Installer un cluster Kubernetes multi-nœuds à l’aide de kubeadm<br/>
- Configurer la sécurité à la fois pour le cluster et pour les conteneurs<br/>
- Surveiller, consigner et dépanner les conteneurs et le cluster<br/>
- Configurer la planification et l’affinité des déploiements de conteneurs<br/>
- Déployer une application à microservices sur un cluster kubernetes

  <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public:</h6>
La formation s’adresse aux développeurs, architectes, ingénieurs de production et<br/>
administrateurs.

<h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Niveau requis:</h6>
- Commandes de base Linux.<br/>
- Avoir des connaissances sur les conteneurs (docker ou autre)
<h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programme</h6>
                          <div className="curriculum-item" id="id_1">
                            <div className="card-header" id="cc_1">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_1"
                                  aria-expanded="true"
                                  aria-controls="acc_1"
                                >
                                  Fondamentaux et Concepts de base 
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_1"
                              className="collapse show"
                              aria-labelledby="cc_1"
                              data-parent="#id_1"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                  Vue d’ensemble du cloud
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item">
                                <h5>
    <i className="icon_menu-square_alt2"></i>
    <Link to="/">
        Pourquoi les Cloud
    </Link>
</h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Notions et vocabulaires IaaS</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
								<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Orchestration des ressources</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

								<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Positionnement des conteneurs dans l’écosystème Cloud</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

								<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Container runtime</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                  {/* <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Focusing On The Customer</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      01 heure
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                      </div>*/}
                              </div>
                            </div>
                          </div>
                          <div className="curriculum-item" id="id_2">
                            <div className="card-header" id="cc_2">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_2"
                                  aria-expanded="true"
                                  aria-controls="acc_2"
                                >
                Kubernetes : Projet, communauté et gouvernance
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_2"
                              className="collapse show"
                              aria-labelledby="cc_2"
                              data-parent="#id_2"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">Kubernetes</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="time">
                                    Jour 1
                                    </Link>
                                    <Link href="#" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
				<div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">
                                    CNCF
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="time">
                                    Jour 1
                                    </Link>
                                    <Link href="#" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">OCI</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="questions">
                                      4 questions
                                    </Link>
                                    <Link href="#" className="time">
                                    Jour 1
                                    </Link>
                                    <Link href="#" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">Projet</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="questions">
                                      4 questions
                                    </Link>
                                    <Link href="#" className="time">
                                    Jour 1
                                    </Link>
                                    <Link href="#" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">Cycle de développement</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="questions">
                                      4 questions
                                    </Link>
                                    <Link href="#" className="time">
                                    Jour 1
                                    </Link>
                                    <Link href="#" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">Kubecon</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="questions">
                                      4 questions
                                    </Link>
                                    <Link href="#" className="time">
                                    Jour 1
                                    </Link>
                                    <Link href="#" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                    </div>
                        </div>
                          </div>
                          <div className="curriculum-item" id="id_3">
                            <div className="card-header" id="cc_3">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_3"
                                  aria-expanded="true"
                                  aria-controls="acc_3"
                                >
                      Architecture Kubernetes
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_3"
                              className="collapse show"
                              aria-labelledby="cc_3"
                              data-parent="#id_3"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Composants de kubernetes</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
            <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                    Composants du Control Plane
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                </div>
						<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">etcd</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">apiserver</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Scheduler</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Kube-Proxy</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Controller-manager</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                              
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Autres composants</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Kubelet</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Network</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Travaux pratiques :
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Déploiment d’un cluster Kubernetes</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link></div></div></div></div></div>
                          <div className="curriculum-item" id="id_3">
                            <div className="card-header" id="cc_3">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_3"
                                  aria-expanded="true"
                                  aria-controls="acc_3"
                                >
                      Concepts et objets
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_3"
                              className="collapse show"
                              aria-labelledby="cc_3"
                              data-parent="#id_3"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">API Resources</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
            <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                    Namespaces
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                </div>
						<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Labels</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Pod</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Deployement</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">DaemonSet</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">StatefulSet</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                              
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Job</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                               

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">CronJob</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Travaux pratiques :
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Exploiter Kubernetes</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link></div></div></div></div></div>
                          <div className="curriculum-item" id="id_3">
                            <div className="card-header" id="cc_3">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_3"
                                  aria-expanded="true"
                                  aria-controls="acc_3"
                                >
                      Networking
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_3"
                              className="collapse show"
                              aria-labelledby="cc_3"
                              data-parent="#id_3"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Network plugins</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
            <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                    CNI
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                </div>
						<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Services</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Services ClusterIP</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Services NodePort</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Services LoadBalancer</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Ingress</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                              
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Job</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                               

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Ingress Controller</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Travaux pratiques :
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Exposer des services en interne et en externe du cluster</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link></div></div></div></div></div>
                         <div className="curriculum-item" id="id_3">
                            <div className="card-header" id="cc_3">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_3"
                                  aria-expanded="true"
                                  aria-controls="acc_3"
                                >
                      Stockage
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_3"
                              className="collapse show"
                              aria-labelledby="cc_3"
                              data-parent="#id_3"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Volumes</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
            <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                    Storage Class
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                </div>
						<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">PersistentVolumeClaims</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">PersistentVolume</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">CSI</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                             <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Ingress Controller</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Travaux pratiques :
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Créer et attacher des Persistent Volume</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link></div></div></div></div></div>
                       <div className="curriculum-item" id="id_3">
                            <div className="card-header" id="cc_3">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_3"
                                  aria-expanded="true"
                                  aria-controls="acc_3"
                                >
        Gestion de la configuration des applications
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_3"
                              className="collapse show"
                              aria-labelledby="cc_3"
                              data-parent="#id_3"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">ConfigMaps</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
            <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                    ConfigMaps Environnements
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                </div>
						<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">ConfigMaps volume</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Secrets</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                          
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Travaux pratiques :
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Utilisation des ConfigMaps et les Secrets</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link></div></div></div></div></div>
                          <div className="curriculum-item" id="id_3">
                            <div className="card-header" id="cc_3">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_3"
                                  aria-expanded="true"
                                  aria-controls="acc_3"
                                >
          Gestion des ressources
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_3"
                              className="collapse show"
                              aria-labelledby="cc_3"
                              data-parent="#id_3"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Pod Resources : Request et Limits</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
            <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                    Pod Resources : CPU
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                </div>
						<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Pod Resources : RAM</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Horizontal Autoscaling</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Limit Ranges</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Resource Quotas</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

                          
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Travaux pratiques :
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Définir les ressources d’un pod</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link></div></div></div></div></div>
                         <div className="curriculum-item" id="id_3">
                            <div className="card-header" id="cc_3">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_3"
                                  aria-expanded="true"
                                  aria-controls="acc_3"
                                >
                                Scheduling
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_3"
                              className="collapse show"
                              aria-labelledby="cc_3"
                              data-parent="#id_3"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Affinité / Anti-Affinité</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
            <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                    Affinité de nodes
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                </div>
						<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Taints et Tolerations</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
  
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Travaux pratiques :
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Scheduling</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link></div></div></div></div></div>
                          <div className="curriculum-item" id="id_3">
                            <div className="card-header" id="cc_3">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_3"
                                  aria-expanded="true"
                                  aria-controls="acc_3"
                                >
                          Projet Kubernetes
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_3"
                              className="collapse show"
                              aria-labelledby="cc_3"
                              data-parent="#id_3"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Déployer et orchestrer une application à microservices sur un cluster
Kubernetes.</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 1
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link></div></div></div></div></div>
                          <h5>Cette formation sur un jour va associer la théorie et la pratique</h5>
                          <h5>Les phases pratiques sont des exercices ou des TPs pour arriver à des applications concrètes.</h5>
                        </div>
                      )}
                      {/* Curriculum Tab  */}
                      {/* Instructors Tab  */}
                      {activeView === "Instructeurs" && (
                        <div
                          className="tab-pane fade in show active"
                          id="instructors"
                          role="tabpanel"
                        >
                          <div className="teacher-item-3">
                            <div className="teacher-thumb">
                              <img
                                src="assets/images/single-course/i1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="teacher-meta">
                              <h5>
                                <Link to="/">Dianne Ameter</Link>
                              </h5>
                              <span>Illustrator</span>
                              <p>
                                I don't want no agro car boot lavatory wind up
                                twit haggle spiffing show off show off pick your
                                nose and blow off spend a penny David zonked
                                what a plonker are you taking.
                              </p>
                              <div className="teacher-social">
                                <a href="#">
                                  <i className="social_facebook"></i>
                                </a>
                                <a href="#">
                                  <i className="social_twitter"></i>
                                </a>
                                <a href="#">
                                  <i className="social_linkedin"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="teacher-item-3">
                            <div className="teacher-thumb">
                              <img
                                src="assets/images/single-course/i2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="teacher-meta">
                              <h5>
                                <a href="#">Hugh Saturation</a>
                              </h5>
                              <span>Photographer</span>
                              <p>
                                I don't want no agro car boot lavatory wind up
                                twit haggle spiffing show off show off pick your
                                nose and blow off spend a penny David zonked
                                what a plonker are you taking.
                              </p>
                              <div className="teacher-social">
                                <a href="#">
                                  <i className="social_facebook"></i>
                                </a>
                                <a href="#">
                                  <i className="social_twitter"></i>
                                </a>
                                <a href="#">
                                  <i className="social_linkedin"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="teacher-item-3">
                            <div className="teacher-thumb">
                              <img
                                src="assets/images/single-course/i3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="teacher-meta">
                              <h5>
                                <Link to="/">Jim Séchen</Link>
                              </h5>
                              <span>Stylist & Author</span>
                              <p>
                                I don't want no agro car boot lavatory wind up
                                twit haggle spiffing show off show off pick your
                                nose and blow off spend a penny David zonked
                                what a plonker are you taking.
                              </p>
                              <div className="teacher-social">
                                <a href="#">
                                  <i className="social_facebook"></i>
                                </a>
                                <a href="#">
                                  <i className="social_twitter"></i>
                                </a>
                                <a href="#">
                                  <i className="social_linkedin"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Instructors Tab  */}
                      {/* Reviews Tab  */}
                      {activeView === "Commentaires" && (
                        <div
                          className="tab-pane fade in show active"
                          id="reviews"
                          role="tabpanel"
                        >
                          <div className="reviw-area">
                            <h4>Commentaires</h4>
                            <div className="reating-details">
                              <div className="average-rate">
                                <p>Average Rating</p>
                                <div className="rate-box">
                                  <h2>4.8</h2>
                                  <div className="ratings">
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                  </div>
                                  <span>4 Commentaires</span>
                                </div>
                              </div>
                              <div className="details-rate">
                                <p>Detailed Rating</p>
                                <div className="detail-rate-box">
                                  <div className="rate-item">
                                    <p>5</p>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "100%" }}
                                        aria-valuenow="100"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <span>100%</span>
                                  </div>
                                  <div className="rate-item">
                                    <p>4</p>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "30%" }}
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="30"
                                      ></div>
                                    </div>
                                    <span>30%</span>
                                  </div>
                                  <div className="rate-item">
                                    <p>3</p>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="20"
                                      ></div>
                                    </div>
                                    <span>20%</span>
                                  </div>
                                  <div className="rate-item">
                                    <p>2</p>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "10%" }}
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="10"
                                      ></div>
                                    </div>
                                    <span>10%</span>
                                  </div>
                                  <div className="rate-item">
                                    <p>1</p>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "0%" }}
                                        aria-valuenow="0"
                                        aria-valuemin="0"
                                        aria-valuemax="0"
                                      ></div>
                                    </div>
                                    <span>0%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="review-rating">
                              <h5>Comments ( 3 )</h5>
                              <ol>
                                <li>
                                  <div className="single-comment">
                                    <img
                                      src="assets/images/single-course/r1.png"
                                      alt=""
                                    />
                                    <h5>
                                      <Link to="/">Dianne Ameter</Link>
                                    </h5>
                                    <span>August 8, 2012 at 9:22 am</span>
                                    <div className="comment">
                                      <p>
                                        I don't want no agro car boot lavatory
                                        wind up twit haggle spiffing show off
                                        show off pick your nose and blow off
                                        spend a penny David zonked what a
                                        plonker are you taking.
                                      </p>
                                    </div>
                                    <div className="ratings">
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                    </div>
                                    <div className="c-border"></div>
                                  </div>
                                </li>
                                <li>
                                  <div className="single-comment">
                                    <img
                                      src="assets/images/single-course/r2.png"
                                      alt=""
                                    />
                                    <h5>
                                      <Link to="/">Hugh Saturation</Link>
                                    </h5>
                                    <span>March 14, 2012 at 10:13 am</span>
                                    <div className="comment">
                                      <p>
                                        Lavatory wind up twit haggle spiffing
                                        show off show off pick your nose and
                                        blow off spend a penny David zonked what
                                        a plonker are you taking.
                                      </p>
                                    </div>
                                    <div className="ratings">
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <span>
                                        <i className="icon_star"></i>
                                      </span>
                                    </div>
                                    <div className="c-border"></div>
                                  </div>
                                </li>
                                <li>
                                  <div className="single-comment">
                                    <img
                                      src="assets/images/single-course/r3.png"
                                      alt=""
                                    />
                                    <h5>
                                      <Link to="/">Jim Séchen</Link>
                                    </h5>
                                    <span>April 16, 2012 at 12:15 pm</span>
                                    <div className="comment">
                                      <p>
                                        He lost his bottle cheeky bugger such
                                        fibber Harry porkies spiffing good time
                                        wind up argy bargy arse bite your arm
                                        off bugger.
                                      </p>
                                    </div>
                                    <div className="ratings">
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <span>
                                        <i className="icon_star"></i>
                                        <i className="icon_star"></i>
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              </ol>
                            </div>
                            <div className="review-form-area">
                              <h5>Leave a Comment</h5>
                              <div className="comment-form">
                                <ReviewForm />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*  Reviews Tab  */}
                    </div>
                    {/* Tab Content  */}
                  </div>
                  {/* share link start  */}
                {/*  <div className="post-share">
                    <h5>Share:</h5>
                    <a className="fac" href="#">
                      <i className="social_facebook"></i>
                    </a>
                    <a className="twi" href="#">
                      <i className="social_twitter"></i>
                    </a>
                    <a className="goo" href="#">
                      <i className="social_googleplus"></i>
                    </a>
                      </div>*/}
                  {/* share link end  */}
                  <div className="related-course">
                    <h3>Cours connexes</h3>
                    <Swiper
                      spaceBetween={20}
                      pagination={pagination}
                      modules={[Pagination]}
                      className="mySwiper mySwiper3 "
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    >
                      {/* Single Slider item  */}
                      <div className="related-course-slider">
                        {course?.map((item) => (
                          <SwiperSlide key={item.id}>
                            <FeatureCourseCard
                              className="feature-course-item-4"
                              course={item}
                              swiper={true}
                            />
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="course-sidebar">
                  <aside className="widget">
                    <div className="info-course">
                      <ul>
                        <li>
                          <i className="icon_house_alt"></i>
                          <span>Instructeur: </span> Justin Case
                        </li>
                        <li>
    <i className="icon_document_alt"></i>
    <span>Conférences : </span> 14
</li>
                        <li>
                          <i className="icon_clock_alt"></i>
                          <span>Durée: </span> 3 Jours(21 heurs)
                        </li>
                        <li>
                          <i className="icon_profile"></i>
                          <span>Inscrit: </span> 75 étudiants
                        </li>
                        <li>
                          <i className="icon_cog"></i>
                          <span>Langue: </span> Français
                        </li>
                        <li>
                          <i className="icon_calendar"></i>
                          <span>Date limite: </span> 16 April 2024
                        </li>
                      </ul>
                      <Link className="bisylms-btn" to="/contact">
                      S'inscrire au cours
                      </Link>
                    </div>
                  </aside>
                  <aside className="widget">
                    <h3 className="widget-title">Derniers cours</h3>
                    <LatestCourseCard
                      img="assets/images/course/docker.png"
                      name="Docker"
                      price="24.00"
                      courseLink ="/docker"
                    />
                    <LatestCourseCard
                      img="assets/images/course/paython.png"
                      name="Python"
                      price="76.00"
                      offerPrice="Free"
                      courseLink ="/python"
                    />
                    <LatestCourseCard
                      img="assets/images/course/mind-image.png"
                      name="kubernetes"
                      price="76.00"
                      offerPrice="$46"
                      courseLink ="/kubernetes"
                    />
                    <LatestCourseCard
                      img="assets/images/course/jenkins.png"
                      name="Jenkins	"
                      price="94.00"
                      offerPrice="$74.00"
                      courseLink ="/Jenkins"
                    />
                     <LatestCourseCard
                      img="assets/images/course/Git.png"
                      name="Git	"
                      price="94.00"
                      offerPrice="$74.00"
                      courseLink ="/git"
                    />
                     <LatestCourseCard
                      img="assets/images/course/ansible.png"
                      name="Ansible"
                      price="94.00"
                      offerPrice="$74.00"
                      courseLink ="/ansible"
                    />
                        <LatestCourseCard
                      img="assets/images/course/GitLab.png"
                      name="GitLab"
                      price="94.00"
                      offerPrice="$74.00"
                      courseLink ="/gitlab"
                    />
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* course section end  */}
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default CourseSingle;
