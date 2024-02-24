import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutUsPage from './components/Pages/AboutUsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AboutUs" element={<AboutUsPage />} />
      {/* <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<ContactUs /> } />       */}
    </Routes>
  </Router>
);

