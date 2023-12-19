import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
//import { course } from "../../Data/course";
//import FeatureCard from "../../Component/Cards/FeatureCard";
//import CourseListView from "../../Component/Cards/CourseListView";
import CallAction from "../../Component/CallAction";
import GotoTop from "../../Component/GotoTop";
import {listFormations} from '../../redux/actions/formationAction'

//import './ListesFormation.css'; 
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Course1() {

  const dispatch = useDispatch()
  const formationList = useSelector((state) => state.formationList);
  const {  formations } = formationList;
  const token = useSelector((state) => state.token);
  //const auth = useSelector(state => state.auth)
  //const {isLogged} = auth
  console.log(token ,"Where is the token !!!!")
  console.log(formations)
 /* const formations2 = [
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
  ];*/
  console.log(formations)
  const [isLoading, setIsLoading] = useState(true);
  const [activeView] = useState("grid");
  //const [activeCategory, setActiveCategory] = useState("Tout");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3; // Set the number of items per page

  // Assuming 'formations' is an array of courses
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const coursesToShow = formations.slice(startIndex, endIndex);
  const totalPages = Math.ceil(formations.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

   // Generate an array of page numbers
   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const TableHead = styled.thead`
  background-color: #3498db;
  color: #fff;
`;

const Th = styled.th`
  padding: 12px 15px;
  text-align: left;
`;

const Tbody = styled.tbody`
  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  & tr:hover {
    background-color: #e0e0e0;
  }

  & td {
    padding: 12px 15px;
    text-align: left;
  }
`;

  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);
  useEffect(() => {

        
    dispatch(listFormations());

    
},[dispatch])

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <Header logo="assets/images/logo4.png" joinBtn={true} />
        <Banner title="Grille des cours" background="assets/images/banner3.jpg" />
        <section className="coursepage-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="tab-content">
                   <div
                      className={`tab-pane fade in ${
                        activeView === "grid" ? "show active" : ""
                      }`}
                      id="grid"
                      role="tabpanel">
                    <div className="row shafull-container">
                    <Table>
                    <TableHead>
                    <tr>
                    <Th>Nom de formation</Th>
                    <Th>Date</Th>
                    <Th>S'inscrire</Th>
                    </tr>
                    </TableHead>
                    <Tbody>
                      {coursesToShow.map((course, index) => (
                     <tr key={index}>
                     <td>{course.FormationName}</td>
                     <td>{course.date}</td>
                     <td>
                     <Link className="bisylms-btn" to="/contact">
                       S'inscrire au cours
                     </Link>
                     </td>
                     </tr>
                      ))}
                     </Tbody>
                     </Table>
                    </div>
                    <div className="row">
        <div className="col-lg-12">
          <div className="bisylms-pagination">
          {currentPage > 1 &&  (
              <Link to={`/listFormation?page=${currentPage - 1}`} onClick={handlePreviousPage} className="next">
                Précédent<i className="arrow_left"></i>
              </Link>
            )}
            {pageNumbers.map((page) => (
              <span key={page} className={page === currentPage ? 'current' : ''}>
                <Link to={`/listFormation?page=${page}`} onClick={() => handlePageClick(page)}>
                  {page}
                </Link>
              </span>
            ))}
            {currentPage < totalPages && (
              <Link to={`/listFormation?page=${currentPage + 1}`} className="next" onClick={handleNextPage}>
                Suivant <i className="arrow_right"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <CallAction btnClass="bisylms-btn" />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Course1;
