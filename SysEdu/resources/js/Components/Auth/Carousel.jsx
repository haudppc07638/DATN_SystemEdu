import React from 'react';

const Carousel = ({ slides, currentSlide }) => (
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
);

export default Carousel;