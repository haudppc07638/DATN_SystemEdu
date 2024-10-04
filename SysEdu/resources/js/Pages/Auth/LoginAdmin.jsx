import React, { useState, useEffect } from "react";
import { Link } from '@inertiajs/react';
import logo from '../../Assets/Images/logo.png';
import logoGoogle from '../../Assets/Images/logo_google.png';
import banner from '../../Assets/Images/banner.jpg';
import banner1 from '../../Assets/Images/banner1.jpg';
import banner2 from '../../Assets/Images/banner2.jpg';
import Auth from '../../Layouts/Auth';
import '../../Assets/Css/Custom.css';
function LoginAdmin() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [banner, banner1, banner2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <Link href='/' className="flex items-center">
                        <img src={logo} alt="Sysedu Logo" className="h-16 w-auto mr-3" />
                        <h4 className="text-primary text-xl font-semibold">Sysedu University</h4>
                    </Link>
                    <div className="flex space-x-4">
                        <a
                            href="/admin/login/google/university"
                            className="flex items-center px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        >
                            <img src={logoGoogle} alt="Google Logo" className="w-5 h-5 mr-2" />
                                                       Login Admin with Google
                        </a>
                    </div>
                </div>
            </header>
        
            <main className="flex-grow mt-24">
                <div className="carousel">
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div 
                                key={index} 
                                className={`carousel-item ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img 
                                    src={slide} 
                                    alt={`Slide ${index + 1}`} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>

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
        </div>
    );
}

LoginAdmin.layout = page => <Auth>{page}</Auth>;

export default LoginAdmin;