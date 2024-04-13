import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:'welcomePage',},
        {path:'userLogin',element:'loginPage'},
        {path:'adminLogin',element:'loginPage'},
        {path:'/home',element:'homePage',}
      ]
    }
  ])
  return <RouterProvider router={router} />;
}

export default App;
