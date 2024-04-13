import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import WelcomePage from "./Pages/WelcomePage";
import UserLogin from "./Pages/UserLogin";
import AdminLogin from "./Pages/AdminLogin";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<WelcomePage/>,},
        {path:'/userLogin',element:<UserLogin/>},
        {path:'/adminLogin',element:<AdminLogin/>},
        {path:'/home',element:'homePage',}
      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;
