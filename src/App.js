import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import WwelcomePage from "./Pages/WelcomePage";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<WwelcomePage/>,},
        {path:'userLogin',element:'loginPage'},
        {path:'adminLogin',element:'loginPage'},
        {path:'/home',element:'homePage',}
      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;
