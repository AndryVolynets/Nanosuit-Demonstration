import React, { useState, useEffect } from 'react';
import hoverSound from './../../../assets/audio/click/20af166b0a13e92.mp3';

const MyComponent = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Воспроизведение звука при наведении
    useEffect(() => {
        const audio = new Audio(hoverSound);

        if (isHovered) {
            audio.play();
        }

        // Очистка ресурсов после завершения компонента
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [isHovered]);

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Ваш контент компонента */}
        </div>
    );
};

export default MyComponent;
