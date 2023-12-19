import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Home2 from "./Pages/Home-2";
import Home3 from "./Pages/Home-3";
import Course1 from "./Pages/Course-1";
import Course2 from "./Pages/Course-2";
import Course3 from "./Pages/Course-3";
import CourseSingle from "./Pages/CourseSingle";
import About1 from "./Pages/About-1";
import About2 from "./Pages/About-2";
import Instructor from "./Pages/Instructor";
import InstructorProfile from "./Pages/InstructorProfile";
import Error from "./Pages/Error";
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
import ListesFormation from "./Pages/ListesFormation/ListesFormation"
import {useSelector } from 'react-redux';
import SignIn from "./Pages/User/SignIn"
import SignUp from "./Pages/User/SignUp"
import { Navigate } from 'react-router-dom';






function Routers() {
  const auth = useSelector(state => state.auth)
  const {isLogged} = auth
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home-2",
      element: <Home2 />,
    },
    {
      path: "/home-3",
      element: <Home3 />,
    },
    {
      path: "/course-1",
      element: <Course1 />,
    },
    {
      path: "/course-2",
      element: <Course2 />,
    },
    {
      path: "/course-3",
      element: <Course3 />,
    },
    {
      path: "/single-course",
      element: <CourseSingle />,
    },
    {
      path: "/about-1",
      element: <About1 />,
    },
    {
      path: "/about-2",
      element: <About2 />,
    },
    {
      path: "/instructor",
      element: <Instructor />,
    },
    {
      path: "/profile",
      element: <InstructorProfile />,
    },
    {
      path: "/blog",
      element: <Blogs />,
    },
    {
      path: "/single-post",
      element: <SinglePost />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: '/python',
      element: <Python/>,
    },
    {
      path: '/docker',
      element: <Docker/>,
    },
    {
      path: '/ansible',
     element: <Ansible/>,
    },
    {
      path: '/git',
      element: <Git/>,
    },
    {
      path: '/gitlab',
      element: <Gitlab/>,
    },
    {
      path: '/jenkins',
      element: <Jenkins/>,
    },
    {
      path: '/kubernetes',
     element: <Kubernetes/>,
    },
   /* {
      path: '/signIn',
     element: <SignIn/>,
    },
    isLogged
    ? {
        path: '/listFormation',
        element: <ListesFormation />, // Rediriger vers ListesFormation si déjà connecté
      }
    : {
        path: '/listFormation',
        element: <Navigate to="/signIn" />, // Rediriger vers SignIn si non connecté
      },
    
      {
        path: '/signUp',
       element: <SignUp/>,
      },*/
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routers;
