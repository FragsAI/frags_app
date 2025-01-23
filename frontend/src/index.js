import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from './Components/Product';
import Pricing from './Components/PricingPage/Pricing';
import YearlyPrice from './Components/PricingPage/YearlyPrice'; // Import the YearlyPrice component
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/yearlyprice" element={<YearlyPrice />} /> {/* Add the route for YearlyPrice */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
