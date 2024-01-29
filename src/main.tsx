import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Signup from './Signup.tsx'
import Login from './Login.tsx'
import './index.css'
import { HashRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
