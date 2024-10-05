import React from 'react';
import { Link } from '@inertiajs/react';
import logo from '../../Assets/Images/logo.png';
import logoGoogle from '../../Assets/Images/logo_google.png';

const Header = ({ googleLoginUrl }) => (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link href='/auth' className="flex items-center">
                <img src={logo} alt="Sysedu Logo" className="h-16 w-auto mr-3" />
                <h4 className="text-primary text-xl font-semibold">Sysedu University</h4>
            </Link>
            <div className="flex space-x-4">
                <a
                    href={googleLoginUrl}
                    className="flex items-center px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                    <img src={logoGoogle} alt="Google Logo" className="w-5 h-5 mr-2" />
                    Đăng nhập bằng Google
                </a>
            </div>
        </div>
    </header>
);

export default Header;