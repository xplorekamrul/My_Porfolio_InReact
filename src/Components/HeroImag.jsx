"use client";

import { delay, motion, reverseEasing } from "framer-motion";
import Image from "./Image";
import image from '../assets/infomdkamruzzaman.png'
import { CgYinyang } from "react-icons/cg";
const HeroImag = () => {
    return (
        <div className="w-full h-full relaitve">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1,
                        duration: 0.4,
                        ease: 'easeIn'
                    },
                }}>
                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 1.4,
                            duration: 0.4,
                            ease: 'easeInOut'
                        },
                    }}

                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute z-10">
                    <Image imgSrc={image} priority quality={100} fill className={'object-contain w-[250px]  xl:mt-[108px]  xl:ml-[22.5px] ml-[22.5px] mt-2'} />
                </motion.div>
                {/* circle */}
                <motion.svg

                    className={'w-[300px] xl:w[506px] h-[300px] xl:h-[506px]'}
                    fill={'transparent'}
                    viewBox={'0 0 506 506'}
                    xmlns={'http://www.w3.org/2000/svg'}
                >
                    <motion.circle 
                        cx={'250'}
                        cy={'250'}
                        r={'250'}
                        stroke={'#00ff99'}
                        strokeWidth={'4'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                        initial={{ strokeDasharray: '24 10 0 0' }}
                        animate={{
                            strokeDasharray:['15 120 25 25' , '16 25 92 72', '4 250 22 22','10 150 50 50'],
                            // strokeDasharray: [
                            //     '20 100 30 40',  // 1st pattern
                            //     '35 150 45 55',  // 2nd pattern
                            //     '25 175 50 60',  // 3rd pattern
                            //     '40 200 35 70',  // 4th pattern
                            //     '50 220 40 80',  // 5th pattern
                            //     '60 250 45 90',  // 6th pattern
                            //     '55 270 60 100', // 7th pattern
                            //     '70 300 75 110', // 8th pattern
                            //     '80 320 85 120', // 9th pattern
                            //     '90 350 95 130'  // 10th pattern
                            // ],
                            rotate: [120, 360]
                        }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className={'ml-10'}
                    />

                    {/* <motion.circle
                        cx={'253'}
                        cy={'253'}
                        r={'250'}
                        stroke={'#0000FF'}  // Blue stroke color
                        strokeWidth={'5'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                        initial={{ strokeDasharray: '20 15' }}  // Initial stroke pattern
                        animate={{
                            strokeDasharray: [
                                '40 60 30 90',   // Adjusted stroke dasharray
                                '50 80 50 120',  // Sum of values closer to matching the circumference
                                '70 50 30 90',   // Tweaked for consistency
                                '80 70 40 60',   // Varied dash-gap pattern
                                '100 100 50 70'  // Sum more consistent with the circle's length
                            ],
                            rotate: [0, 0, 0],  // Rotation effect at different angles
                            strokeOpacity: [1, 0.5, 1],  // Add fading effect
                        }}
                        transition={{
                            duration: 8,  // Duration of the full animation
                            repeat: Infinity,  // Infinite loop
                            ease: 'easeInOut',  // Smooth in-out effect
                            repeatType: "reverse"  // Reverse the rotation
                        }}
                    /> */}

                </motion.svg>
            </motion.div>


        </div>
    )
}

export default HeroImag
