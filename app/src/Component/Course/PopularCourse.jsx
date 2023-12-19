import ProtoTypes from "prop-types";
import CourseItemCard from "../Cards/CourseItemCard";

function PopularCourse({ course, heading }) {
  return (
    <section className="popular-course-section">
      <div className="container">
        {heading && (
          <div className="row">
            <div className="col-md-8">
              <h2 className="sec-title">
                <span>Explorer</span>  🌟 Explorez nos offres incontournables
              </h2>
            </div>
            <div className="col-md-4">
              <a className="read-more" href="#">
              Parcourir les cours en ligne<i className="arrow_right"></i>
              </a>
            </div>
          </div>
        )}
        {course && (
          <div className="row">
            <div className="col-lg-12">
              <div className="course-wrapper">
                <CourseItemCard title="Ansible" link="single-course">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="60"
                    viewBox="0 0 74 60"
                  >
                    <defs>
                      <pattern
                        id="pattern"
                        preserveAspectRatio="xMidYMid slice"
                        width="100%"
                        height="100%"
                        viewBox="0 0 74 60"
                      >
                        <image
                          width="74"
                          height="60"
                          xlinkHref="assets/images/home/ansible.png"
                        />
                      </pattern>
                    </defs>
                    <path
                      id="desktop1"
                      className="cls-1"
                      style={{ fill: "url(#pattern)" }}
                      d="M0,0H74V60H0Z"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Docker"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                  >
                    <image
                      id="data"
                      width="64"
                      height="64"
                      xlinkHref="assets/images/home/docker.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Git"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="70"
                    viewBox="0 0 74 70"
                  >
                    <image
                      id="proposal"
                      width="74"
                      height="70"
                      xlinkHref="assets/images/home/Git.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard title="GitLab" link="single-course">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="80"
                    height="67"
                    viewBox="0 0 80 67"
                  >
                    <image
                      id="chat"
                      width="80"
                      height="67"
                      xlinkHref="assets/images/home/GitLab.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Python"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="58"
                    height="73"
                    viewBox="0 0 58 73"
                  >
                    <image
                      id="mind"
                      width="58"
                      height="73"
                      xlinkHref="assets/images/home/paython.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Kubernetes"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="95"
                    height="73"
                    viewBox="0 0 58 73"
                  >
                    <image
                      id="mind"
                      width="58"
                      height="73"
                      xlinkHref="assets/images/home/mind-image.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Jenkins"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="58"
                    height="73"
                    viewBox="0 0 58 73"
                  >
                    <image
                      id="mind"
                      width="58"
                      height="73"
                      xlinkHref="assets/images/home/jenkins.png"
                    />
                  </svg>
                </CourseItemCard>
              </div>
            </div>
          </div>
        )}
        <div className="row mt-120">
          <div className="col-lg-7 col-md-6">
            <div className="ab-thumb" style={{marginTop:"15%"}}>
              <img src="assets/images/home/1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="ab-content">
              <h3>Découvrez nos formations up to date</h3>
              <p className="mid-item">
              Formations 100% sur mesure

              </p>
              <p>
              Nous formons les professionnels de demain en leur fournissant les compétences nécessaires pour réussir dans un environnement technologique en constante évolution.
              </p>
              <p>
              <em style={{ color: "green" }}>✓ </em> &nbsp; <b>Développement :</b> Python, Javascript/Typescript, etc.
            </p>
            <p>
              <em style={{ color: "green" }}>✓ </em> &nbsp;<b>DevOps :</b> Docker, Ansible, Kubernetes, Terraform
            </p>
            <p>
              <em style={{ color: "green" }}>✓ </em> &nbsp;<b>Cloud :</b> AWS, Azure, GCP
            </p>
            <p>
              <em style={{ color: "green" }}>✓ </em> &nbsp;<b>Cybersécurité :</b> PKI, IAM, RGPD, Pentesting
            </p>
             {/* <a className="bisylms-btn" href="#">
              Savoir plus
        </a>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

PopularCourse.propTypes = {
  course: ProtoTypes.bool,
  heading: ProtoTypes.bool,
};

export default PopularCourse;
