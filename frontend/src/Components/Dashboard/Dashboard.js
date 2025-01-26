import React from 'react'
import { UserButton, SignedIn } from '@clerk/clerk-react';

const Dashboard = () => {
 

  return (
    <>
    <div>
      <h1>Dashboard</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
    </>
    
  )
}

export default Dashboard