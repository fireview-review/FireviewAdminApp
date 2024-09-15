'use client'
import { useState } from 'react';

export default function Accordion1() {
    const [isActive, setIsActive] = useState(1);  // Default active section

    // Toggle accordion sections open or closed
    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key);  // Toggle current section or close if already open
    };

    return (
        <>
            <div className="tf-flat-accordion2">
                <div className={`flat-toggle2 ${isActive === 1 ? "active" : ""}`}>
                    <h6 className={`toggle-title ${isActive === 1 ? "active" : ""}`} onClick={() => handleClick(1)}>What is Galenai?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
                        <p>Galenai is an educational platform that provides AI-made tutorials focusing on a wide range of skills including coding, designing, and mastering AI tools.</p>
                    </div>
                </div>
                <div className={`flat-toggle2 ${isActive === 2 ? "active" : ""}`}>
                    <h6 className={`toggle-title ${isActive === 2 ? "active" : ""}`} onClick={() => handleClick(2)}>How can I start learning on Galenai?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>
                        <p>Begin by signing up and exploring the gallery of courses. Select any course to start learning through interactive and step-by-step tutorials in our dedicated app.</p>
                    </div>
                </div>
                <div className={`flat-toggle2 ${isActive === 3 ? "active" : ""}`}>
                    <h6 className={`toggle-title ${isActive === 3 ? "active" : ""}`} onClick={() => handleClick(3)}>What makes Galenai unique?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>
                        <p>Galenai combines hands-on learning with AI-driven content to provide a personalized and effective learning experience, tailored to enhance your skills in technology and design.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
