import React, { useState } from 'react'
import { Container } from '../Components/Container'
import Flex from '../Components/Flex'
import Heading from '../Components/Heading'
import Paragraph from '../Components/Paragraph'
import Button from '../Components/Button'

const Rasume = () => {
    const [scrollPosition, setScrollPosition] = useState(0); // State to store scroll position
    // Scroll Position Handle for the scrollbar line
    const handleScroll = (e) => {
        const scrollTop = e.currentTarget.scrollTop;
        const scrollHeight = e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        setScrollPosition(scrollPercentage);
    };
    return (
        <>
            <section className='py-[50px] bg-blackbg' id='resume'>
                <Container>
                    <Flex className={'justify-center pb-10'}>
                        <Heading headingName={'My De'} className={'text-center font-ops font-bold text-ff text-[50px] leading-[80px] '} />
                        <Heading headingName={'tails.'} className={'text-center font-ops font-bold text-gg text-[50px] leading-[80px] '} />
                    </Flex>

                    <Flex className={' justify-between mob:flex-col sm:flex-col md:flex-col lg:flex-row'}>
                        <div className='w-[30%] mob:w-full mob:p-5 sm:w-full sm:p-5 tab:w-full tab:p-5 md:w-full md:p-5 lg:w-[30%]'>
                            <Heading headingName={'Why hire me?'}
                                className={'font-ops font-bold text-ff text-[50px] leading-[50px]'} />
                            <Paragraph pText={" I'm passionate about Web development 👨‍💻 and I bring a creative touch through graphic design 🎨."}
                                className={'font-pap  text-ff text-[16px] leading-[35px] mt-5'} />

                            <Button btnName={'Experience'}
                                className={'font-ops font-bold text-ff text-[20px]  px-[130px] mob:px-[100px] sm:px-[130px] lg:px-[90px] py-[10px] rounded-lg bg-cc ml-[25px] mt-5 hover:bg-gg hover:text-black'} />
                            <Button btnName={'Education'}
                                className={'font-ops font-bold text-ff text-[20px]  px-[135px] mob:px-[105px] sm:px-[135px] lg:px-[95px] py-[10px] rounded-lg bg-cc ml-[25px] mt-5  hover:bg-gg hover:text-black'} />
                            <Button btnName={'Skills'}
                                className={'font-ops font-bold text-ff text-[20px]  px-[159px] mob:px-[129px] sm:px-[159px] lg:px-[119px] py-[10px] rounded-lg bg-cc ml-[25px] mt-5  hover:bg-gg hover:text-black'} />
                            <Button btnName={'About_me'}
                                className={'font-ops font-bold text-ff text-[20px]  px-[136px] mob:px-[106px] sm:px-[136px] lg:px-[96px] py-[10px] rounded-lg bg-cc ml-[25px] mt-5  hover:bg-gg hover:text-black'} />
                        </div>
                        <div className='w-[65%] mob:w-full mob:p-5 sm:p-5 sm:w-full tab:w-full lg:p-0 lg:w-[65%] relative'>
                            <Heading headingName={'My Experience.'}
                                className={'font-ops font-bold text-ff text-[30px] leading-[50px]'} />
                            <Paragraph pText={'With experience in web development I’ve worked on Various projects, delivering high-quality, responsive websites that effectively meet client needs and exceed expectations.'}
                                className={'font-pap  text-ff text-[16px] leading-[35px] mt-5 pb-5'} />


                            <div className="h-[450px] overflow-y-scroll flex flex-col flex-wrap justify-around space-y space-x-4 p-4  custom-scrollbar" onScroll={handleScroll}>

                                <Flex className={'justify-between flex-wrap mob:flex-col md:flex-row  '}>
                                    <div className='w-[48%] mob:w-full sm:w-full tab:w-full md:w-[48%]  bg-cc rounded-lg '>
                                        <Paragraph pText={'2024 - Present. '} className={'font-ops  text-[16px] leading-[35px] mt-3 ml-5 text-gg'} />
                                        <Heading headingName={'Mern stack Developer.'} className={'font-cha font-bold text-ff text-[30px] leading-[35px] ml-5 mt-3 '} />
                                        <Flex className={'ml-5 mt-3'}>
                                            <div className='h-2 w-2 rounded-full bg-gg mt-3.5 mr-4'></div>
                                            <Paragraph pText={'Creative It Institute. '} className={'pb-5 font-pap  text-ff text-[16px] leading-[35px] '} />
                                        </Flex>
                                    </div>
                                    <div className='w-[48%] mob:w-full mob:mt-10 sm:mt-10 md:mt-0 lg:mt-0 sm:w-full tab:w-full md:w-[48%]  bg-cc rounded-lg '>
                                        <Paragraph pText={'2024 - Summer. '} className={'font-ops  text-[16px] leading-[35px] mt-3 ml-5 text-gg'} />
                                        <Heading headingName={'Front End Developer Intern.'} className={'font-cha font-bold text-ff text-[30px] leading-[35px] ml-5 mt-3 '} />
                                        <Flex className={'ml-5 mt-3'}>
                                            <div className='h-2 w-2 rounded-full bg-gg mt-3.5 mr-4'></div>
                                            <Paragraph pText={'Creative It Institute. '} className={'pb-5 font-pap  text-ff text-[16px] leading-[35px] '} />
                                        </Flex>
                                    </div>
                                    <div className='w-[48%] mob:w-full mob:mt-10 sm:mt-10 lg:mt-10 sm:w-full tab:w-full md:w-[48%]  bg-cc rounded-lg '>
                                        <Paragraph pText={'2020 - 2023. '} className={'font-ops  text-[16px] leading-[35px] mt-3 ml-5 text-gg'} />
                                        <Heading headingName={'web Designer Intern.'} className={'font-cha font-bold text-ff text-[30px] leading-[35px] ml-5 mt-3 '} />
                                        <Flex className={'ml-5 mt-3'}>
                                            <div className='h-2 w-2 rounded-full bg-gg mt-3.5 mr-4'></div>
                                            <Paragraph pText={'Bright Skill Ltd. '} className={'pb-5 font-pap  text-ff text-[16px] leading-[35px] '} />
                                        </Flex>
                                    </div>
                                    <div className='w-[48%] mob:w-full mob:mt-10 sm:mt-10 lg:mt-10 sm:w-full tab:w-full md:w-[48%]  bg-cc rounded-lg '>
                                        <Paragraph pText={'2020 - 2022. '} className={'font-ops  text-[16px] leading-[35px] mt-3 ml-5 text-gg'} />
                                        <Heading headingName={'Graphics Designer.'} className={'font-cha font-bold text-ff text-[30px] leading-[35px] ml-5 mt-3 '} />
                                        <Flex className={'ml-5 mt-3'}>
                                            <div className='h-2 w-2 rounded-full bg-gg mt-3.5 mr-4'></div>
                                            <Paragraph pText={'Orjon It Institute. '} className={'pb-5 font-pap  text-ff text-[16px] leading-[35px] '} />
                                        </Flex>
                                    </div>
                                    <div className='w-[48%] mob:w-full mob:mt-10 sm:mt-10 lg:mt-10 sm:w-full tab:w-full md:w-[48%]  bg-cc rounded-lg '>
                                        <Paragraph pText={'2020 - 2022. '} className={'font-ops  text-[16px] leading-[35px] mt-3 ml-5 text-gg'} />
                                        <Heading headingName={'Graphics Designer.'} className={'font-cha font-bold text-ff text-[30px] leading-[35px] ml-5 mt-3 '} />
                                        <Flex className={'ml-5 mt-3'}>
                                            <div className='h-2 w-2 rounded-full bg-gg mt-3.5 mr-4'></div>
                                            <Paragraph pText={'Orjon It Institute. '} className={'pb-5 font-pap  text-ff text-[16px] leading-[35px] '} />
                                        </Flex>
                                    </div>
                                    <div className='w-[48%] mob:w-full mob:mt-10 sm:mt-10 lg:mt-10 sm:w-full tab:w-full md:w-[48%]  bg-cc rounded-lg '>
                                        <Paragraph pText={'2020 - 2022. '} className={'font-ops  text-[16px] leading-[35px] mt-3 ml-5 text-gg'} />
                                        <Heading headingName={'Graphics Designer.'} className={'font-cha font-bold text-ff text-[30px] leading-[35px] ml-5 mt-3 '} />
                                        <Flex className={'ml-5 mt-3'}>
                                            <div className='h-2 w-2 rounded-full bg-gg mt-3.5 mr-4'></div>
                                            <Paragraph pText={'Orjon It Institute. '} className={'pb-5 font-pap  text-ff text-[16px] leading-[35px] '} />
                                        </Flex>
                                    </div>

                                </Flex>
                            </div>
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Rasume