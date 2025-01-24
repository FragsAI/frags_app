import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Subscription from './Components/Subscription/Subscription';
import Product from './Components/ProductPage/Product';

import Pricing from './Components/PricingPage/Pricing';
import YearlyPrice from './Components/PricingPage/YearlyPrice'; // Import the YearlyPrice component
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import { ClerkProvider } from '@clerk/clerk-react';

// Access environment variable
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error('Clerk Publishable Key is missing. Add it to the .env file.');
  throw new Error('Clerk Publishable Key is missing.');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Router>
        <Routes>
          <Route path="/subscription" element={<Subscription/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<App />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/yearlyprice" element={<YearlyPrice />} /> {/* Add the route for YearlyPrice */}
        </Routes>
      </Router>
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
