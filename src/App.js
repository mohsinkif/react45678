import WelcomePage, { welcomeLoader } from "./Pages/WelcomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import UserLogin, { loginAction, loginLoaderFunction } from "./Pages/UserLogin";
import AdminLogin, { adminLoginAction, adminSignedInLoader  } from "./Pages/AdminLogin";
import Home, { homePageLoaderFunction } from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Harvester from "./Pages/Harvester";
import AdminHome,{adminAuthLoader} from "./Pages/AdminHome";
import RegisterFarmer, {
  farmerRegistrationAction,
} from "./Pages/RegisterFarmer";
import AddHarvester, { addHarvesterAction } from "./Pages/AddHarvester";
import AddTransporter, { addTransporterAction } from "./Pages/AddTransporter";
import ViewFarmerData, { viewFarmerDataAction } from "./Pages/ViewFarmerData";
import ViewHarvesterData, {
  viewHarvesterDataAction,
} from "./Pages/ViewHarvesterData";
import ViewTransporterData, {
  viewTransporterDataAction,
} from "./Pages/ViewTransporterData";
import Transporter from "./Pages/Transporter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { 
          index: true, 
          element: <WelcomePage />, 
          loader: welcomeLoader 
        },

        {
          path: "/userLogin",
          element: <UserLogin />,
          action: loginAction,
          loader: welcomeLoader,
        },
        
        {
          path: "/adminLogin",              
           children:[
            {
              index:true,
              element: <AdminLogin />,
              action: adminLoginAction,
            }
          ]
        },

        {
          path:'/adminHome',
          loader:adminAuthLoader,
          children: [
            { index:true,
             element: <AdminHome />,       
             },
            {
              path: "registerfarmer",
              element: <RegisterFarmer />,
              action: farmerRegistrationAction,
            },
            {
              path: "addharvester",
              element: <AddHarvester />,
              action: addHarvesterAction,
            },
            {
              path: "addtransporter",
              element: <AddTransporter />,
              action: addTransporterAction,
            },
            {
              path: "viewharvesterdata",
              element: <ViewHarvesterData />,
              action: viewHarvesterDataAction,
            },
            {
              path: "viewtransporter",
              element: <ViewTransporterData />,
              action: viewTransporterDataAction,
            },
            {
              path: "viewfarmer",
              element: <ViewFarmerData />,
              action: viewFarmerDataAction,
            },
          ],
        },
        {
          path:'/home', 
          loader:homePageLoaderFunction,  
          children:[
            {index:true,element:<Home/>,},                     
            {path:'about',element:<About/>},
            {path:'contact',element:<Contact/>},
            {path:'harvester',element:<Harvester/>},
            {path: 'transporter',element:<Transporter/>}
          ]
        },
        
      ],
    },
  ]);
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
