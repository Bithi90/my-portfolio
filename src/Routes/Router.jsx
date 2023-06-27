import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import AboutMe from "../Component/AboutMe/AboutMe";
import MySkills from "../Component/MySkills/MySkills";
import Project from "../Component/Project/Project";
import Contactme from "../Component/ContactMe/Contactme";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'aboutme',
          element:<AboutMe></AboutMe>
        },
        {
          path:'skill',
          element:<MySkills></MySkills>
        },
        {
          path:'project',
          element:<Project></Project>
        },
        {
          path:'contact',
          element:<Contactme></Contactme>
        }
      ]
    },
  ]);