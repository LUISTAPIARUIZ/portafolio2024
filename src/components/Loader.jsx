import React, { useState, useEffect } from 'react';
import './styles/Loader.css';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    );
};

export default Loader;