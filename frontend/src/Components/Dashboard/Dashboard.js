import React from 'react'
import { UserButton } from '@clerk/clerk-react';
import ProtectedRoute from '../Authentication/ProtectedRoute';

const Dashboard = () => {
 

  return (
    <>
    <div>
      <h1>Dashboard</h1>
        <ProtectedRoute>
            <UserButton />
        </ProtectedRoute>
    </div>
    </>
    
  )
}

export default Dashboard