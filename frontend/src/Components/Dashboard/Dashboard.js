import React from 'react'
import { useClerk } from '@clerk/clerk-react';

const Dashboard = () => {
  const { signOut } = useClerk(); 

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut} className="btn btn-primary">
        Sign Out
      </button>
    </div>
    </>
    
  )
}

export default Dashboard