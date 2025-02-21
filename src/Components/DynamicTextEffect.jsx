
     // instraction
    // import TextEffect

    // danching hover effect 

   // Pass textArray as an array and className as a single string 
  //  <TextEffect textArray={["MD Kamruzzaman"]} className={['font-bold text-6xl hover:text-green-700 ']} />
import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const TextEffect = ({ textArray, className }) => {
    const [shakeInitial, setShakeInitial] = useState(true); // State for initial shake
    const [shakeHover, setShakeHover] = useState(false); // State for hover shake

    // Remove the initial shake effect after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShakeInitial(false);
        }, 2000); // 2 seconds for initial shake

        return () => clearTimeout(timer);
    }, []);

    const TextSpan = ({ className, children }) => {
        const [isPlaying, setIsPlaying] = useState(false);
        const controls = useAnimationControls();

        const shake = () => {
            controls.start({
                transform: [
                    "scale3d(1,1,1)",
                    "scale3d(1.4,.55,1)",
                    "scale3d(.75,1.25,1)",
                    "scale3d(1.25,.85,1)",
                    "scale3d(.9,1.05,1)",
                    "scale3d(1,1,1)",
                ],
                // transition:{
                //     times:[0,.4,.6,.7,.8,.9]
                // }
            });
            setIsPlaying(true);
        };

        return (
            <motion.span
                animate={controls}
                onMouseOver={() => {
                    if (!isPlaying) shake();
                }}
                onAnimationComplete={() => setIsPlaying(false)}
                className={`${className}`}
            >
                {children}
            </motion.span>
        );
    };

    return (
        <div>
            {textArray.map((sentence, sentenceIndex) => (
                <div key={sentenceIndex}>
                    {/* Sentence loop */}
                    {sentence.split("").map((letter, index) => (
                        <TextSpan
                            key={index + sentenceIndex}
                            className={`inline-block ${className} ${shakeInitial ? 'shake-initial' : ''} ${shakeHover ? 'shake' : ''}`}
                            onMouseEnter={() => setShakeHover(true)}
                            onMouseLeave={() => setShakeHover(false)}
                        >
                            {letter === " " ? '\u00A0' : letter}
                        </TextSpan>
                    ))}
                    <br /> {/* Line break between sentences */}
                </div>
            ))}
        </div>
    );
};

export default TextEffect;


