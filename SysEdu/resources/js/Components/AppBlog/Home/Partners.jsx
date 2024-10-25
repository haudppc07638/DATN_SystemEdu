import React, { useState, useEffect } from "react";
import doitac1 from "../../../Assets/Images/doitac1.png";
import doitac2 from "../../../Assets/Images/doitac2.png";
import doitac3 from "../../../Assets/Images/doitac3.png";
import doitac4 from "../../../Assets/Images/doitac4.jpg";
import doitac5 from "../../../Assets/Images/doitac5.jpg";
import doitac6 from "../../../Assets/Images/doitac6.jpg";
import doitac7 from "../../../Assets/Images/doitac7.png";
import doitac8 from "../../../Assets/Images/doitac8.png";
import doitac9 from "../../../Assets/Images/doitac9.jpg";
import doitac10 from "../../../Assets/Images/doitac10.png";

function Partners() {
    const images = [
        doitac1,
        doitac2,
        doitac3,
        doitac4,
        doitac5,
        doitac6,
        doitac7,
        doitac8,
        doitac9,
        doitac10,
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(
                (prevSlide) => (prevSlide + 1) % (images.length - 2),
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handlePrev = () => {
        setCurrentSlide(
            (prevSlide) =>
                (prevSlide - 1 + images.length - 2) % (images.length - 2),
        );
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % (images.length - 2));
    };

    return (
        <div className="py-16">
            <h3 className="text-center text-2xl font-bold mb-6 relative">
                ĐỐI TÁC
                <span className="block h-1 bg-blue-500 rounded mt-2 mx-auto w-30"></span>
            </h3>
            <div className="relative flex justify-center items-center h-30">
                <div className="relative overflow-hidden w-full max-w-[900px]">
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / 3)}%)`,
                        }}
                    >
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="w-50 flex-shrink-0 mx-8"
                            >
                                <img
                                    src={img}
                                    alt={`slide ${index + 1}`}
                                    className="w-50 h-16"
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-200 text-5xl bg-opacity-50 hover:bg-gray-600 rounded-full opacity-25 transition-opacity duration-200 hover:opacity-75"
                        onClick={handlePrev}
                    >
                        <i className="fas fa-angle-left"></i>
                    </button>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-200 text-5xl bg-opacity-50 hover:bg-gray-600 rounded-full opacity-25 transition-opacity duration-200 hover:opacity-75"
                        onClick={handleNext}
                    >
                        <i className="fas fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Partners;
