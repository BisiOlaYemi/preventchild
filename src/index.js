import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutUsPage from './components/Pages/AboutUsPage';
import Services from './components/Pages/Services';
import Training from './components/Pages/Training';
import PriceIndex from './components/Pages/PriceIndex';
import Contact from './components/Pages/Contact';
import Regulation44 from './components/Pages/Regulation44';
import Recruitment from './components/Pages/Recruitment';
import Compliance from './components/Pages/Compliance';
import TrainingDev from './components/Pages/TrainingDev';
import Policy from './components/Pages/Policy';
import Staffing from './components/Pages/Staffing';
import Discipline from './components/Pages/Discipline';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AboutUs" element={<AboutUsPage />} />
      <Route path="/Services" element={<Services /> } />
      <Route path="/Training" element={<Training /> } />  
      <Route path="/PriceIndex" element={<PriceIndex /> } />
      <Route path="/Contact" element={<Contact /> } />
      <Route path='/regulation44' element={<Regulation44 /> }/>
      <Route path='/recruitment' element={<Recruitment /> }/>
      <Route path='/Compliance' element={<Compliance /> }/>
      <Route path='/TrainingDev' element={<TrainingDev /> }/>
      <Route path='/Policy' element={<Policy /> }/>
      <Route path='/Staffing' element={<Staffing /> }/>
      <Route path='/Discipline' element={<Discipline /> }/>
    </Routes>
  </Router>
);

