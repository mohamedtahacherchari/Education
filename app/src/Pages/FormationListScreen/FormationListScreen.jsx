import  {  useEffect ,useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
//import './FormationTable.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  createFormation,
  deleteFormation,
  listFormations,
} from '../../redux/actions/formationAction';
import {
  IconButton,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon} from '@mui/icons-material';
import GotoTop from '../../Component/GotoTop';
import Footer from '../../Component/Footer/Footer';
import CallAction from '../../Component/CallAction';
import Header from '../../Component/Headers';
import Banner from '../../Component/Banner/Banner';
import styled from 'styled-components';


const FormationListScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const formationList = useSelector((state) => state.formationList);
  const {formations} = formationList;

 

  const formationCreate = useSelector((state) => state.formationCreate);
  const {
   
    success: successCreate,
    formation: createdFormation,
  } = formationCreate;

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


 

  const handleDelete = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteFormation(id));
    }
  };


  const createFormationHandler = () => {
    dispatch(createFormation());
  };



  useEffect(() => {
    if (successCreate) {
      navigate(`/edit/${createdFormation._id}`);
    } else {
      dispatch(listFormations(token));
    }
  }, [
    token,
    dispatch,
    successCreate,
    createdFormation,
  
  ]);
console.log(successCreate)
  return (
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
                          <Box>
              <Button variant="outlined" onClick={createFormationHandler}
               style={{marginLeft:"35%" ,marginBottom:"5%"}}>
                Ajouter une nouvelle formation
              </Button>
              
            </Box>
                <div className="row shafull-container">
          
                <Table>
                <TableHead>
                <tr>
                <Th>Nom de formation</Th>
                <Th>Date</Th>
                <Th>Actions</Th>
                </tr>
                </TableHead>
                <Tbody>
                  {coursesToShow.map((course) => (
                 <tr key={course._id}>
                 <td>{course.FormationName}</td>
                 <td>{course.date}</td>
                 <td>
                 <Link to={`/edit/${course._id}`}>
                        <IconButton color="primary">
                            <EditIcon />
                          </IconButton>
                                            </Link>
                          
                          <IconButton
                            color="secondary"
                            onClick={() => handleDelete(course._id)}
                          >
                            <DeleteIcon />
                          </IconButton>
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
          <Link to={`/listFormationAdmin?page=${currentPage - 1}`} onClick={handlePreviousPage} className="next">
            Précédent<i className="arrow_left"></i>
          </Link>
        )}
        {pageNumbers.map((page) => (
          <span key={page} className={page === currentPage ? 'current' : ''}>
            <Link to={`/listFormationAdmin?page=${page}`} onClick={() => handlePageClick(page)}>
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
    <GotoTop/>
  </>
  );
};

export default FormationListScreen;
