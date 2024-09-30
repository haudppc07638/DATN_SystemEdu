import React, { useState, useEffect } from "react";
import logo from '../../Assets/Images/logo.png';
import banner from '../../Assets/Images/banner.jpg';
import banner1 from '../../Assets/Images/banner1.jpg';
import banner2 from '../../Assets/Images/banner2.jpg';
import { Link, router } from '@inertiajs/react';
import Auth from '../../Layouts/Auth';
import '../../Assets/Css/Custom.css';

function LoginPortal() {
    const handleLogin = (role) => {
        router.get(`/login/${role}`);
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [banner, banner1, banner2];
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);  // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <Link href='/' className="flex items-center">
                            <img src={logo} alt="Sysedu Logo" className="h-16 w-auto mr-3" />
                            <h4 className="text-primary text-xl font-semibold">Sysedu University</h4>
                        </Link>
                        <div className="relative">
                            <button
                                className="md:hidden text-primary focus:outline-none"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </button>
                            <nav className={`absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 ${menuOpen ? 'block' : 'hidden'} md:relative md:block md:bg-transparent md:shadow-none md:w-auto md:py-0`}>
                                <button onClick={() => handleLogin('admin')} className="block w-full text-left px-6 py-3 text-base font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300 md:inline-block md:w-auto md:px-6 md:py-3 md:text-sn md:font-semibold md:text-primary md:border-2 md:border-primary md:rounded-lg md:hover:bg-primary md:hover:text-white md:transition-colors md:duration-300 md:active:bg-indigo-600 md:focus:outline-none md:focus:ring-2 md:focus:ring-primary md:focus:ring-opacity-50">Cán bộ đào tạo</button>
                                <button onClick={() => handleLogin('teacher')} className="block w-full text-left px-6 py-3 text-base font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300 md:inline-block md:w-auto md:px-6 md:py-3 md:text-sm md:font-semibold md:text-primary md:border-2 md:border-primary md:rounded-lg md:hover:bg-primary md:hover:text-white md:transition-colors md:duration-300 md:active:bg-indigo-600 md:focus:outline-none md:focus:ring-2 md:focus:ring-primary md:focus:ring-opacity-50 md:ml-4">Giảng viên</button>
                                <button onClick={() => handleLogin('student')} className="block w-full text-left px-6 py-3 text-base font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300 md:inline-block md:w-auto md:px-6 md:py-3 md:text-sm md:font-semibold md:text-primary md:border-2 md:border-primary md:rounded-lg md:hover:bg-primary md:hover:text-white md:transition-colors md:duration-300 md:active:bg-indigo-600 md:focus:outline-none md:focus:ring-2 md:focus:ring-primary md:focus:ring-opacity-50 md:ml-4">Sinh viên</button>
                            </nav>
                        </div>
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
                    <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                        <img src={logo} alt="Sysedu Logo" className="w-24 h-auto mb-4 md:mb-0 md:mr-6" />
                        <h3 className="text-lg text-center md:text-left">
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
    )
}

LoginPortal.layout = page => <Auth>{page}</Auth>;

export default LoginPortal;