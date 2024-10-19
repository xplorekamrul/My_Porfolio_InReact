import React, { useEffect, useState } from 'react';
import TextSpan from './TextSpan';

const firstSentence = "Hello I'm".split("");
const secondSentence = "Md Kamruzzaman".split("");

const HeroText = () => {
    const [shakeInitial, setShakeInitial] = useState(true); // State for initial shake
    const [shakeHover, setShakeHover] = useState(false); // State for hover shake

    // Remove the initial shake effect after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShakeInitial(false);
        }, 2000); // 2 seconds for initial shake

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div>
                {/* First sentence */}
                {firstSentence.map((letter, index) => {
                    return (
                        <TextSpan
                            key={index}
                            className={`inline-block font-cha font-extrabold text-[80px] mob:text-[50px] sm:text-[60px] md:text-[55px] lg:text-[70px] lg:leading-[80px] mob:ml-5 text-ff leading-[100px] mob:leading-[60px] sm:leading-[70px] ${shakeInitial ? 'shake-initial' : ''} ${shakeHover ? 'shake' : ''}`} // Add shake classes
                        >
                            {letter === " " ? '\u00A0' : letter}
                        </TextSpan>
                    )
                })}
                <br /> {/* Line break for separation between two sentences */}
                {/* Second sentence */}
                {secondSentence.map((letter, index) => {
                    return (
                        <TextSpan
                            key={index + firstSentence.length} // Ensure unique key
                            className={`inline-block font-cha font-bold text-[80px] mob:text-[50px] sm:text-[60px] md:text-[55px] lg:text-[70px] lg:leading-[80px] mob:ml-5 text-gg leading-[100px] mob:leading-[50px] sm:leading-[70px] text-3d ${shakeInitial ? 'shake-initial' : ''} ${shakeHover ? 'shake' : ''}`} // Add shake classes
                            onMouseEnter={() => setShakeHover(true)} // Trigger shake on hover
                            onMouseLeave={() => setShakeHover(false)} // Reset shake on mouse leave
                        >
                            {letter === " " ? '\u00A0' : letter}
                        </TextSpan>
                    )
                })}
            </div>
        </>
    );
};

export default HeroText;
