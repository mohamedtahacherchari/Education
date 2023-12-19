import "./App.css";
import { useContext ,useEffect} from "react";
import { themeContext } from "./Context";
import { dispatchLogin, fetchUser, dispatchGetUser } from './redux/actions/authAction';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Python from "./pages/Python/Python";
import Docker from "./pages/Docker/Docker";
import Ansible from "./pages/Ansible/Ansible";
import Main from "./pages/Main/Main";
import axios from "axios"
import Git from "./pages/Git/Git";
import Gitlab from "./pages/Gitlab/Gitlab";
import Jenkins from "./pages/Jenkins/Jenkins";
import Kubernetes from "./pages/Kubernetes/Kubernetes";
import FormationAdmin from "./pages/Formation/FormationAdmin";
import Formation from "./pages/Formation/Formation";
import { useDispatch, useSelector } from 'react-redux';
import SignIn from "./pages/User/SignIn.js";
import { initializeUseSelector } from "react-redux/es/hooks/useSelector";
import SignUp from './pages/User/SignUp'
import Contact from "./components/Contact/Contact";


function App() {
  const dispatch = useDispatch()
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const auth = useSelector(state => state.auth)
        const {isLogged} = auth
  const token = useSelector(state => state.token)
  const {user, isAdmin} = auth
 useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
    const getToken = async () => {
            const res = await axios.post('/api/user/refresh_token', null)
            dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
    }
    getToken()
    }
},[auth.isLogged ,dispatch])

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
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />

          <Route path='/python' element={<Python/>} />
          <Route path='/docker' element={<Docker/>}/>
          <Route path='/ansible' element={<Ansible/>} />
          <Route path="/git" element={<Git/>}/>
          <Route path="/gitlab" element={<Gitlab/>}/>
          <Route path="/jenkins" element={<Jenkins/>}/>
          <Route path="/kubernetes" element={<Kubernetes/>} />
          <Route path="/formationadmin" element={isLogged ?<FormationAdmin/> :<SignUp/>}/>
          <Route path="/formation" element={<Formation/>} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/*" element={<SignUp/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;