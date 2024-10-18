import React, { useState, useEffect } from "react";
import logo from "../../Assets/Images/logo.png";

function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        const currentScrollPos = window.scrollY; 
        if (currentScrollPos > 50) {
            setIsVisible(true); 
        } else {
            setIsVisible(false); 
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
            style={{
                backgroundColor: "white", 
                zIndex: 9999,
            }}
        >
            <div className="h-20 px-16 py-10 mx-auto flex justify-center items-center space-x-8">
                <div className="flex items-center">
                    <a href="/home">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-[70px] transform transition duration-300"
                    />
                    </a>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <a
                        href="/home"
                        className="text-blue-600 hover:text-blue-300 transition duration-300 text-sm font-medium"
                    >
                        TRANG CHỦ
                    </a>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-300 transition duration-300 text-sm font-medium"
                    >
                        TUYỂN SINH
                    </a>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-300 transition duration-300 text-sm font-medium"
                    >
                        TUYỂN DỤNG
                    </a>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-300 transition duration-300 text-sm font-medium"
                    >
                        CHƯƠNG TRÌNH ĐÀO TẠO
                    </a>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-300 transition duration-300 text-sm font-medium"
                    >
                        GIỚI THIỆU CHUNG
                    </a>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-300 transition duration-300 text-sm font-medium"
                    >
                        TIN TỨC
                    </a>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-300 transition duration-300 text-sm font-medium"
                    >
                        LIÊN HỆ
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
