import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import WelcomePage, {welcomeLoader} from "./Pages/WelcomePage";
import UserLogin, {loginAction, } from "./Pages/UserLogin";
import AdminLogin from "./Pages/AdminLogin";
import Home, {homePageLoaderFunction} from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Harvester from "./Pages/Harvester";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<WelcomePage/>,loader:welcomeLoader},
        {path:'/userLogin',element:<UserLogin/>, action:loginAction,loader:welcomeLoader},
        {path:'/adminLogin',element:<AdminLogin/>},
        {path:'/home',element:<Home/>,loader:homePageLoaderFunction},
        {path:'/about',element:<About/>},
        {path:'/contact',element:<Contact/>},
        {path:'harvester',element:<Harvester/>}

      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;
