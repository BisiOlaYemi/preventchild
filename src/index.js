import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutUsPage from './components/Pages/AboutUsPage';
import Services from './components/Pages/Services';
import Training from './components/Pages/Training';
import PriceIndex from './components/Pages/PriceIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AboutUs" element={<AboutUsPage />} />
      <Route path="/Services" element={<Services /> } />
      <Route path="/Training" element={<Training /> } />  
      <Route path="/PriceIndex" element={<PriceIndex /> } />    
    </Routes>
  </Router>
);

