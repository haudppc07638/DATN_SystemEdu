import React, { useState, useEffect } from "react";
import Auth from '../../Layouts/Auth';
import Header from '../../Components/Auth/Header';
import Carousel from '../../Components/Auth/Carousel';
import '../../Assets/Css/Custom.css';
import banner from '../../Assets/Images/banner.jpg';
import banner1 from '../../Assets/Images/banner1.jpg';
import banner2 from '../../Assets/Images/banner2.jpg';

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
        <>
            <Header googleLoginUrl="/auth/login/admin/google" />
            <main className="flex-grow mt-24">
                <Carousel slides={slides} currentSlide={currentSlide} />
            </main> 
         </>
    );
}

LoginAdmin.layout = page => <Auth>{page}</Auth>;

export default LoginAdmin;