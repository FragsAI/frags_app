import { useClerk } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const SignOut: React.FC = () => {
    const { signOut } = useClerk();
    const navigate = useNavigate();

    useEffect(() => {
        signOut().then(() => {
            navigate("/");
        });

    })
    
    return (
        <div className="flex h-screen w-full items-center justify-center text-white">
            <p>Signing you out...</p>
        </div>
    );
}

export default SignOut;