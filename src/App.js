import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import WwelcomePage from "./Pages/WelcomePage";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<WwelcomePage/>,},
        {path:'/userLogin',element:'userLoginPage'},
        {path:'/adminLogin',element:'adminLoginPage'},
        {path:'/home',element:'homePage',}
      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;
