import React from 'react';

const Auth = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            {children}
        </div>
    )
}

export default Auth;
