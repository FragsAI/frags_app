import React from "react"
import { useAuth } from '@clerk/clerk-react'
import { Navigate, useLocation } from "react-router"

interface ProtectedRouteProps {
    children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const { isLoaded, isSignedIn } = useAuth()
    const location = useLocation()

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    if (!isSignedIn) {
        return <Navigate to="/login" state={{ from: location }}/>
    }

    return (
        <>{children}</>
    )
}

export default ProtectedRoute