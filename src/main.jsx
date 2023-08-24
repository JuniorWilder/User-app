import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider, 
  UNSAFE_useScrollRestoration
} from 'react-router-dom'
//import './index.css'
import { Login } from './Pages/login';
import { Usuario } from './Pages/Usuario';
import { Cadastro } from './Pages/Cadastro';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contato } from './Pages/Contato';


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/usuarios",
    element: <Usuario/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/contato",
    element: <Contato/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
