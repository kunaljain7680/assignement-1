// src/ImageCarousel.js
import React, { useState } from 'react';
import './ImageCarousel.css'; // Create this CSS file for carousel styles

const images = [
    'https://freshershunt.in/wp-content/uploads/2023/11/MAQ-Software-300x166.png',
    'https://www.way2fresher.com/wp-content/uploads/2024/03/maq-software-e1711628077718.jpg',
    'https://thinkadnet.com/wp-content/uploads/2020/07/Azure-White.png',
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="carousel">
            <button className="arrow left" onClick={prevSlide}>&lt;</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
            <button className="arrow right" onClick={nextSlide}>&gt;</button>
        </div>
    );
};

export default ImageCarousel;
