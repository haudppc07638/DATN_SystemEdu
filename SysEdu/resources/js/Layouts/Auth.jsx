import React from 'react';
import Footer from '../Components/Auth/Footer';

const Auth = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
                {children}
            <Footer />
        </div>

    );
}

export default Auth;
