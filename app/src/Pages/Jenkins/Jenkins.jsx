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
        <Banner title="Jenkins" background="assets/images/banner11.jpg" />
        {/* course section start */}
        <section className="course-details-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="single-course-area">
                  <div className="course-top">
                    <p>FORMATION EN DISTANCIEL</p>
                    <h4>Jenkins - Initiation & avancé</h4>
                    <p>
					Découvrez les bases de la programmation en utilisant le langage Jenkins.
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
                    <img src="assets/images/single-course/7.webp" alt="" />
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
                            <p>
			
Plongez dans l'univers de Jenkins, l'outil incontournable pour l'intégration continue 
et le déploiement continu. Notre formation intensive vous guidera à travers les 
fondamentaux et les subtilités de Jenkins, révolutionnant ainsi les pratiques
 d'intégration et de déploiement logiciel. Explorez les avantages de l'automatisation des processus, de la flexibilité et de la puissance offerts par Jenkins. Soyez prêt à maîtriser cet outil puissant et
 à libérer tout son potentiel pour optimiser vos projets de développement logiciel modernes.
			
                            </p>
                            <p>
                              
                            </p>
                            <h4>Description du cours</h4>
                            <ul>
                              <li>
                                <i className="icon_check_alt2"></i>
                                Apprenez les dernières compétences
                                <span>
                                
					
								Dominez les aspects avancés de Jenkins, des concepts fondamentaux à l'automatisation avancée,
								 afin d'optimiser le développement et la gestion de vos applications. 
								 Explorez les pratiques collaboratives avec les fonctionnalités les plus récentes,
								  propulsant ainsi votre expertise dans le domaine de l'intégration continue,
								 du déploiement continu et de la gestion des environnements applicatifs.
                                </span>
                              </li>
                              <li>
                                <i className="icon_check_alt2"></i>
                                Obtenez un certificat ou un diplôme
                                <span>
								Obtenez une certification officielle en maîtrisant Jenkins, 
								renforçant ainsi vos compétences en automatisation, intégration continue et déploiement continu. 
								Recevez un diplôme attestant de votre expertise dans l'utilisation avancée de Jenkins, 
								ouvrant la voie à une carrière florissante dans le domaine de l'intégration continue,
								 du déploiement logiciel et de la gestion d'environnements applicatifs.            
                                </span>
                              </li>
                              <li>
                                <i className="icon_check_alt2"></i>
                                Préparez-vous pour une carrière
                                <span>
								Préparez-vous de manière exhaustive pour une carrière réussie en apprenant Jenkins,
								 l'outil incontournable pour l'automatisation, l'intégration continue et le déploiement continu. 
								 Acquérez les compétences essentielles de configuration et de gestion des pipelines d'intégration
								  continue pour exceller dans le domaine et propulser votre parcours professionnel vers de nouveaux sommets.
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
							 <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Objectifs pédagogiques</h5> 
• Savoir installer et configurer un seveur Jenkins.<br/>
• Définir des pipelines d’intégration ou de déploiement continue via<br/>
l’interface Jenkins<br/>
• Définir des pipelines d’intégration ou de déploiement continue via<br/>
des scripts Pipelines<br/>

<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public:</h5>
Développeurs, chefs de projet, administrateurs systèmes, architectes.<br/>

<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Niveau requis:</h5>
Connaissance des notions 
<h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programme :</h5>
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
                        Introduction CI/CD
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
                                    <Link href="#">L’approche DevOps</Link>
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
									Intégration, Livraison et Déploiement continus
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
                            </div>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Travaux pratiques :
							<div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">
									Installation de Jenkins
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
              Mise en place de serveur Jenkins
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
                                    <Link href="#">L’offre Jenkins. Notion de job, workspace</Link>
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
									L’interface web
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
                                    <Link href="#">Mise en place du serveur, différents types d’installation</Link>
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
                                    <Link href="#">Configuration générale, configuration des outils</Link>
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
                                    <Link href="#">Les plugins Jenkins, configuration, documentation</Link>
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

								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Travaux pratiques :
							<div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">
									Plusieurs travaux pratiques progressifs ayant pour but <br/>
									configuration JDK et Maven/Gradle, installation des plugins, <br/>
									gestion des utilisateurs et des autorisations, création de job de build
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
                    Les pipelines
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
                                    <Link to="/">Concepts de pipelines</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 2
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
                                    Plugins de synchronisation de jobs
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 2
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                </div>
						<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Distinction de 2 syntaxes disponibles</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 2
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
								<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Syntaxe déclarative, les différentes directives</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 2
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

								<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Utilisation de Docker</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 2
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Travaux pratiques :
							<div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">
									Création de pipeline CI/CD avec la syntaxe déclarative de Groovy
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="time">
                                    Jour 2
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
                     Architecture Maître Esclave
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
                                    <Link to="/">Architecture maître esclave, les différents types d’agents</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 2
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
									Provisionnement des agents et pré-installation d’outil, classification
par labels
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                    Jour 2
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                </div>
						<div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Agent sur le cloud, agents Docker</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                    Jour 2
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Travaux pratiques :
							<div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">
									Mise en place d’agent SSH, Utilisation d’agent docker
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="time">
                                    Jour 2
                                    </Link>
                                    <Link href="#" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div> 
					                    </div>
							  
                            </div>
                          </div>
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
                          <span>Conférences : </span> 14
                        </li>
                        <li>
                          <i className="icon_clock_alt"></i>
                          <span>Durée: </span> 
						  2 Jours(14 heurs)
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
