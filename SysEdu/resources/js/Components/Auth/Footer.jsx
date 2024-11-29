import React from 'react';
import logo from '../../Assets/Images/logo.png';

const Footer = () => (
    <footer className="bg-primary text-white">
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center space-x-8 mb-6">
                <img src={logo} alt="Sysedu Logo" className="w-24 h-auto" />
                <h3 className="text-lg text-items-center">
                    Trụ sở chính tại Tòa nhà F College Sysedu <br />
                    Phường Trường Thạnh, Quận Ninh Kiều, TP. Cần Thơ
                </h3>
            </div>    
        </div>
        <div className="text-center text-sm mb-4">
                <p>College Sysedu © {new Date().getFullYear()}, All Rights Reserved</p>
            </div>
    </footer>
);

export default Footer;