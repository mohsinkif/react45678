import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import WelcomePage, {welcomePageLoader} from "./Pages/WelcomePage";
import UserLogin, {loginAction, } from "./Pages/UserLogin";
import AdminLogin from "./Pages/AdminLogin";
import Home, {homePageLoaderFunction}  from "./Pages/Home";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<WelcomePage/>,loader:welcomePageLoader},
        {path:'/userLogin',element:<UserLogin/>, action:loginAction},
        {path:'/adminLogin',element:<AdminLogin/>},
        {path:'/home',element:<Home/>,loader:homePageLoaderFunction}
      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;
