import React, { StrictMode } from 'react'
import {Toaster} from 'react-hot-toast'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <App/>
  </React.StrictMode>  
)
