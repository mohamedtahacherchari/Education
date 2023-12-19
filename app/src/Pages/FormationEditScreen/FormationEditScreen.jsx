import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import {useNavigate ,useParams} from "react-router-dom"
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import {Typography,TextField} from '@mui/material';
import { listformationDetails, updateFormation } from '../../redux/actions/formationAction';
import { FORMATION_UPDATE_RESET } from '../../redux/constant/formationConstant';

//import { course } from "../../Data/course";
//import FeatureCard from "../../Component/Cards/FeatureCard";
//import CourseListView from "../../Component/Cards/CourseListView";
import CallAction from "../../Component/CallAction";
import GotoTop from "../../Component/GotoTop";
import { Button, Container, Paper } from '@mui/material';
//import './ListesFormation.css'; 
import { Link } from "react-router-dom";

function Course1() {
  const {id} = useParams()
  const navigate =  useNavigate();
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token);
  const formationUpdate = useSelector((state) => state.formationUpdate)
  const {
    success: successUpdate,
  } = formationUpdate
 const formationDetails = useSelector((state) => state.formationDetails)
 const { formation } = formationDetails
  

  //const auth = useSelector(state => state.auth)
  //const {isLogged} = auth
  console.log(token ,"Where is the token !!!!")
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
 
  const [isLoading, setIsLoading] = useState(true);
  const [activeView] = useState("grid");
  const[date, setDate]=useState('');
  const[FormationName, setFormationName]=useState('');
  

  //const [activeCategory, setActiveCategory] = useState("Tout");


  // Assuming 'formations' is an array of courses




   // Generate an array of page numbers


  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);
  useEffect(() => {
 
    dispatch(listformationDetails(id));
  }, [dispatch, id]);
  
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: FORMATION_UPDATE_RESET });
      navigate('/listFormationAdmin');
    } 
    else if (formation._id === id) {
      setDate(formation.date);
      setFormationName(formation.FormationName);
    }
    
  
   
  }, [dispatch, id, successUpdate, formation]);

  const submitHandler= (e) => {
    e.preventDefault()
    dispatch(
      updateFormation({
        _id :id,
        date ,
        FormationName
      }))}
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
                     <Container component="main" maxWidth="xs">
      <Paper>
        <Link to="/listFormationAdmin">
          <Button variant="outlined" color="primary">
            Liste des formations
          </Button>
        </Link>

        <form onSubmit={submitHandler} >
          <Typography variant="h6" gutterBottom>
            Modification de formation
          </Typography>

          <TextField
            fullWidth
            id="outlined-basic-date"
            label="Date de formation"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            variant="outlined"
            placeholder="Ex : BC12345"
            style={{ marginBottom: '20px' }}
          />

          <TextField
            fullWidth
            id="outlined-basic-name"
            label="Nom de la formation"
            value={FormationName}
            onChange={(e) => setFormationName(e.target.value)}
            variant="outlined"
            placeholder="Ex : BC12345"
            style={{ marginBottom: '20px' }}
          />

          <Button type="submit" variant="contained" color="primary">
            Enregistrez
          </Button>
        </form>
      </Paper>
</Container>
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
