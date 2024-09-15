'use client'
import { useState } from 'react'
export default function Accordion2() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="tf-flat-accordion2">
<div className={`flat-toggle2 ${isActive === 5 ? "active" : ""}`}>
    <h6 className={`toggle-title ${isActive === 5 ? "active" : ""}`} onClick={() => handleClick(5)}>What types of courses does Galenai offer?</h6>
    <div className="toggle-content" style={{ display: `${isActive === 5 ? "block" : "none"}` }}>
        <p>Galenai offers a variety of courses ranging from beginner to advanced levels in fields such as programming, graphic design, AI tools, and more. Each course is designed to be practical and engaging to maximize learning.</p>
    </div>
</div>

<div className={`flat-toggle2 ${isActive === 7 ? "active" : ""}`}>
    <h6 className={`toggle-title ${isActive === 7 ? "active" : ""}`} onClick={() => handleClick(7)}>Can I access Galenai courses on my mobile device?</h6>
    <div className="toggle-content" style={{ display: `${isActive === 7 ? "block" : "none"}` }}>
        <p>Yes, Galenai is fully accessible on mobile devices, allowing you to learn on-the-go. The mobile interface is optimized for a seamless learning experience, adapting to different screen sizes and orientations.</p>
    </div>
</div>
<div className={`flat-toggle2 ${isActive === 8 ? "active" : ""}`}>
    <h6 className={`toggle-title ${isActive === 8 ? "active" : ""}`} onClick={() => handleClick(8)}>What are the payment options for Galenai courses?</h6>
    <div className="toggle-content" style={{ display: `${isActive === 8 ? "block" : "none"}` }}>
        <p>Galenai offers various payment options, including credit card, PayPal, and Galena tokens. Flexible payment plans are also available to make learning accessible for everyone.</p>
    </div>
</div>

            </div>
        </>
    )
}
