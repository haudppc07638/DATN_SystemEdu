import React from 'react';
import logo from '../../Assets/Images/logo.png';

const Footer = () => (
    <footer className="bg-primary text-white">
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center mb-6">
                <img src={logo} alt="Sysedu Logo" className="w-24 h-auto mr-6" />
                <h3 className="text-lg">
                    Trụ sở chính tại Tòa nhà F University Sysedu <br />
                    Phường Trường Thạnh, Quận Ninh Kiều, TP. Cần Thơ
                </h3>
            </div>
            <div className="text-center text-sm">
                <p>University Sysedu © {new Date().getFullYear()}, All Rights Reserved</p>
            </div>
        </div>
    </footer>
);

export default Footer;