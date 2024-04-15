import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import WelcomePage, {welcomeLoader} from "./Pages/WelcomePage";
import UserLogin, {loginAction,loginLoaderFunction } from "./Pages/UserLogin";
import AdminLogin, {adminLoginAction} from "./Pages/AdminLogin";
import Home, {homePageLoaderFunction} from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Harvester from "./Pages/Harvester";
import AdminHome from "./Pages/AdminHome";
import RegisterFarmer,{farmerRegistrationAction} from "./Pages/RegisterFarmer";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<WelcomePage/>,loader:welcomeLoader},
        {path:'/userLogin',element:<UserLogin/>, action:loginAction,loader:welcomeLoader},
        {path:'/adminLogin',element:<AdminLogin/>, action:adminLoginAction},
        {path:'/home',element:<Home/>,loader:homePageLoaderFunction},
        {path:'/about',element:<About/>},
        {path:'/contact',element:<Contact/>},
        {path:'/harvester',element:<Harvester/>},
        {path:'/adminHome',element:<AdminHome/>},
        {path:'registerfarmer', element:<RegisterFarmer/>,action:farmerRegistrationAction}


      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;

/**
 const tokenExist = document.cookie.split(';').some((item) => item.trim().startsWith("token" + '='));
  if(!tokenExist){
    return redirect("/");
  }
  else {
    return tokenExist;
  }*/