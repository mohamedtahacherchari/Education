import SignIn from "./Pages/User/SignIn";
import SignUp from "./Pages/User/SignUp";
import ListesFormation from './Pages/ListesFormation/ListesFormation'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import { dispatchLogin, fetchUser, dispatchGetUser } from './redux/actions/authAction';
import Home from "./Pages/Home";
import Course1 from "./Pages/Course-1";
import Course2 from "./Pages/Course-2";
import CourseSingle from "./Pages/CourseSingle";
import About1 from "./Pages/About-1";
import About2 from "./Pages/About-2";
import Instructor from "./Pages/Instructor";
import InstructorProfile from "./Pages/InstructorProfile";
import Blogs from "./Pages/Blogs";
import SinglePost from "./Pages/SinglePost";
import Contact from "./Pages/Contact";
import Git from "./Pages/Git/Git";
import Gitlab from "./Pages/Gitlab/Gitlab";
import Docker from "./Pages/Docker/Docker";
import Ansible from "./Pages/Ansible/Ansible";
import Kubernetes from "./Pages/Kubernetes/Kubernetes";
import Python from "./Pages/Python/Python";
import Jenkins from "./Pages/Jenkins/Jenkins";
import Home2 from "./Pages/Home-2";
import Home3 from "./Pages/Home-3";
import Course3 from "./Pages/Course-3";
import FormationEditScreen from "./Pages/FormationEditScreen/FormationEditScreen"
import FormationListScreen from "./Pages/FormationListScreen/FormationListScreen";
function App() {
      const dispatch = useDispatch()
      const auth = useSelector(state => state.auth)
    const {isLogged} = auth
      const token = useSelector(state => state.token)
console.log(token)
console.log(auth)

useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
        const getToken = async () => {
            try {
                const res = await axios.get(
                    '/api/user/refresh_token',
                    null,
                    {
                        withCredentials: true,  // Assurez-vous que les cookies sont envoyés avec la requête
                        headers: {
                            'Content-Type': 'application/json',  // Ajoutez les en-têtes nécessaires
                        },
                    }
                );
                dispatch({ type: 'GET_TOKEN', payload: res.data.access_token });
            } catch (error) {
                console.error("Erreur lors du rafraîchissement du jeton :", error);
                console.error("Configuration de la requête :", error.config);
                console.error("Données de la réponse :", error.response?.data);
            }
        };

        getToken();
    }
}, [auth.isLogged, dispatch]);

useEffect(() => {
    if(token){
    const getUser = () => {
            dispatch(dispatchLogin())

            return fetchUser(token).then(res => {
            dispatch(dispatchGetUser(res))
            })
    }
    getUser()
    }
},[token, dispatch])

  return (
    
          <>
         
          <Router>
          <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/home-2" element={<Home2/>} />
          <Route path="/home-3" element={<Home3/>} />
          <Route path="/course-1" element={<Course1/>} />
          <Route path="/course-2" element={<Course2/>} />
          <Route path="/course-3" element={<Course3/>} />
          <Route path="/single-course" element={<CourseSingle/>} />
          <Route path="/about-1" element={<About1/>} />
          <Route path="/about-2" element={<About2/>} />
          <Route path="/instructor" element={<Instructor/>} />
          <Route path="/profile" element={<InstructorProfile/>} />
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/single-post" element={<SinglePost/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/python" element={<Python/>} />
          <Route path="/docker" element={<Docker/>} />
          <Route path="/ansible" element={<Ansible/>} />
          <Route path="/git" element={<Git/>} />
          <Route path="/gitlab" element={<Gitlab/>} />
          <Route path="/jenkins" element={<Jenkins/>} />
          <Route path="/kubernetes" element={<Kubernetes/>} />
          <Route path="/signIn"  element={<SignIn/>} />
          <Route path="/listFormation" element={<ListesFormation/>} />
          <Route path="/*" element={<SignUp/>} />
          <Route path="/edit/:id" element={isLogged ?<FormationEditScreen/> : <SignUp/>} />
          <Route path="/listFormationAdmin" element={isLogged ?<FormationListScreen/>:<SignUp/>} />


          </Routes>  
          </Router> 
          </>
  );
}

export default App;
