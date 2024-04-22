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
import AddHarvester, {addHarvesterAction} from "./Pages/AddHarvester";
import AddTransporter, {addTransporterAction} from "./Pages/AddTransporter";
import ViewFarmerData from "./Pages/ViewFarmerData";
import ViewHarvesterData, {viewHarvesterDataRequest} from "./Pages/ViewHarvesterData";
import ViewTransporterData,{viewTransporterDataRequest} from "./Pages/ViewTransporterData";


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
        {path:'/registerfarmer', element:<RegisterFarmer/>,action:farmerRegistrationAction},
        {path:'/addharvester', element:<AddHarvester/>,action:addHarvesterAction},
        {path:"/addtransporter",element:<AddTransporter/>,action:addTransporterAction},
        {path:"/viewharvesterdata",element:<ViewHarvesterData/>,action:viewHarvesterDataRequest},
        {path:"/viewtransporterdata",element:<ViewTransporterData/>,action:viewTransporterDataRequest},
        {path:"/viewfarmerdata",element:<ViewFarmerData/>},

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