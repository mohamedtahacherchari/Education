import { useState } from "react";
import { course } from "../../Data/course";
import FeatureCard from "../Cards/FeatureCard";
function Feature() {
  const [activeCategory, setActiveCategory] = useState("Tout");
  return (
    <section className="feature-course-section">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 className="sec-title">
              <span>Trouvez le bon</span> Cours en ligne pour vous
            </h2>
          </div>
          <div className="col-md-7">
            <ul className="shaf-filter">
              <li
                className={activeCategory === "All" ? "active" : ""}
                data-group="all"
                onClick={(e) => setActiveCategory(e.target.innerText)}
              >
                Tout
              </li>
              <li
                data-group="development"
                className={activeCategory === "Web Development" ? "active" : ""}
                onClick={(e) => setActiveCategory(e.target.innerText)}
              >
              web
              </li>
          {  /*  <li
                data-group="architecture"
                className={activeCategory === "Architecture" ? "active" : ""}
                onClick={(e) => setActiveCategory(e.target.innerText)}
              >
                Architecture
  </li>*/}
             {/* <li
                data-group="engineering"
                className={activeCategory === "Engineering" ? "active" : ""}
                onClick={(e) => setActiveCategory(e.target.innerText)}
              >
                Engineering
</li>*/}
             <li
                className={activeCategory === "DevOps" ? "active" : ""}
                data-group="science"
                onClick={(e) => setActiveCategory(e.target.innerText)}
              >
                DevOps
              </li>
            </ul>
          </div>
        </div>
        <div className="row shafull-container">
          {course
            ?.filter((course) =>
              activeCategory === "Tout"
                ? course
                : course.category.find((item) => item === activeCategory)
            )
            .map((course) => (
              <FeatureCard course={course} key={course.id} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
