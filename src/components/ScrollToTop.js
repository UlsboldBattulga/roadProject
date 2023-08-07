// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Create this CSS file for styling the button
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the button when the user scrolls down 20px from the top of the document
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Scroll smoothly
        });
    };

    return (
        <button
            className={`scroll-to-top-btn ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
            title="Scroll to Top"
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTopButton;
