import {createBrowserRouter, RouterProvider} from 'react-router'
import Register from './routes/Register';
import Login from './routes/Login';
import Home from './routes/Home'
import {Layout, AuthRequireLayout } from './components/Layout';
import ProjectForm from './routes/ProjectForm';
import ErrorPage from './routes/Error';
import Profile from './routes/Profile';


function App(){

  const router = createBrowserRouter([
    {
      path:"/",
      errorElement:<ErrorPage/>,
      element:<Layout/>,
      children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"register",
      element:<Register/>
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:"/project",
      element:<ProjectForm/>
    }
    


      ]
    },
    {
      path:'/',
      element:<AuthRequireLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"profile",
          element:<Profile/>
        }
      ]
    }


  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App
