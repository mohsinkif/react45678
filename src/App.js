import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import WwelcomePage from "./Pages/WelcomePage";
import UserLogin from "./Pages/UserLogin";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<WwelcomePage/>,},
        {path:'/userLogin',element:<UserLogin/>},
        {path:'/adminLogin',element:'adminLoginPage'},
        {path:'/home',element:'homePage',}
      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;
