import {createBrowserRouter, RouterProvider} from 'react-router'
import Register from './routes/Register';
import Login from './routes/Login';
import Home from './routes/Home'
import Layout from './components/Layout';
import ProjectForm from './routes/ProjectForm';

function App(){
  const router = createBrowserRouter([
    {
      path:"/",
      errorElement:<Error/>,
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
    


      ]
    },
    {
      path:"/project",
      element:<ProjectForm/>
    }

  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App
