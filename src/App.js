import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import WelcomePage from "./Pages/WelcomePage";
import UserLogin, {loginAction, } from "./Pages/UserLogin";
import AdminLogin from "./Pages/AdminLogin";
import Home from "./Pages/Home";
import About from "./Pages/About";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<WelcomePage/>},
        {path:'/userLogin',element:<UserLogin/>, action:loginAction},
        {path:'/adminLogin',element:<AdminLogin/>},
        {path:'/home',element:<Home/>},
        {path:'/about',element:<About/>}

      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;
