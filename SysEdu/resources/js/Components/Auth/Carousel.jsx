import React from "react";

function Carousel({ slides, currentSlide }) {
    return (
        <div className="carousel-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentSlide ? "active" : "inactive"}`}
                    style={{
                        backgroundImage: `url(${slide})`,
                        display: index === currentSlide ? "block" : "none",
                    }}
                >
                    <img
                        src={slide}
                        alt={`slide ${index}`}
                        className="w-full h-[700px]"
                    />
                </div>
            ))}
        </div>
    );
}

export default Carousel;
