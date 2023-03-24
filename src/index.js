import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Settings from './pages/Settings/Settings';
import Security from './pages/Security/Security';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} >
          <Route path='settings' element={<Settings />} />
          <Route path='security' element={<Security />} />
        </Route>

        <Route path='*' element={<h1>This page is not found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
