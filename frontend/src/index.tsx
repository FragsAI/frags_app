import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Subscription from './components/Subscription/Subscription';
import Product from './components/ProductPage/Product';
import Dashboard from "./components/Dashboard/Dashboard";
import Pricing from './components/PricingPage/Pricing';
import YearlyPrice from './components/PricingPage/YearlyPrice'; // Import the YearlyPrice component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import { ClerkProvider } from '@clerk/clerk-react';
import ScrollToTop from './components/Accessories/ScrollToLocation';

// Access environment variable
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const SIGNIN_URL = import.meta.env.VITE_CLERK_SIGN_IN_URL;
const SIGNUP_URL = import.meta.env.VITE_CLERK_SIGN_UP_URL;

if (!PUBLISHABLE_KEY) {
  console.error('Clerk Publishable Key is missing. Add it to the .env file.');
  throw new Error('Clerk Publishable Key is missing.');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='dark font-inter'>
    <React.StrictMode>
      <ClerkProvider 
        publishableKey={PUBLISHABLE_KEY} 
        afterSignOutUrl="/" 
        signInUrl={SIGNIN_URL}
        signUpUrl={SIGNUP_URL}
      >
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/subscription" element={<Subscription/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<App />} />
              <Route path="/product" element={<Product />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/yearlyprice" element={<YearlyPrice />} /> {/* Add the route for YearlyPrice */}
            </Routes>
          </ScrollToTop>
        </Router>
      </ClerkProvider>
    </React.StrictMode>
  </div>
);

