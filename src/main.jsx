import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Novedades from './Opiniones.jsx';
import Versiones from './Versiones.jsx';
import Comandos from './Comandos.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/opiniones",
    element: <Novedades />,
  },
  {
    path: "/versiones",
    element: <Versiones />,
  },
  {
    path: "/comandos",
    element: <Comandos />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
