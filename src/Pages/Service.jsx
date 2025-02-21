import React from 'react'
import '../Global.css'
import { Container } from '../Components/Container'
import Heading from '../Components/Heading'
import Paragraph from '../Components/Paragraph'
import Flex from '../Components/Flex'
import { BsArrowDownRight } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Service = () => {
    return (
        <>
            <div className='bg-blackbg py-[50px] '>
                <Container>
                    <Flex className={'justify-center mt-10'}>
                        <Heading id="service" headingName={'My Ser'} className={'text-center font-ops font-bold text-ff  md:text-[50px] text-[40px]  leading-[80px] '} />
                        <Heading headingName={'vices.'} className={'text-center font-ops font-bold text-gg  md:text-[50px] text-[40px]  leading-[80px] '} />
                    </Flex>
                    <Flex className={'justify-between flex-wrap mt-[80px] mob:flex-col sm:flex-col md:flex-row'}>
                        <div className='group border-b-[3px] w-[45%] mob:w-full mob:p-5 sm:w-full sm:p-5 md:w-[45%]'>
                            <Flex className={'justify-between'}>
                                <Paragraph
                                    pText={'01'}
                                    className={'font-cha font-bold  md:text-[50px] text-[40px]  service-stroked-text  leading-[80px] text-transparent group-hover:text-hover'} />
                                <Link to="../Pages/Contact" target='_blank'>
                                    <BsArrowDownRight className={'text-black  md:text-[50px] text-[40px]  p-[5px] rounded-full bg-ff group-hover:bg-gg hover:-rotate-90'} />
                                </Link>
                            </Flex>
                            <Heading headingName={'Web Development'} className={'font-ops font-bold text-ff  group-hover:text-gg md: md:text-[50px] text-[40px]  text-[40px]  md:text-[45px] leading-[80px]'} />
                            <Paragraph pText={'Building dynamic, responsive websites using modern tools and technologies , ensuring functionality, performance, and seamless user experiences across all devices.'}
                                className={'font-pap  text-ff text-[16px] leading-[40px] text-justify '} />
                        </div>
                        <div className='group border-b-[3px] w-[45%] mob:w-full mob:p-5 sm:w-full sm:p-5 md:w-[45%]'>
                            <Flex className={'justify-between'}>
                                <Paragraph
                                    pText={'02'}
                                    className={'font-cha font-bold  md:text-[50px] text-[40px]  service-stroked-text  leading-[80px] text-transparent group-hover:text-hover'} />
                                <Link to="../Pages/Contact" target='_blank'>
                                    <BsArrowDownRight className={'text-black  md:text-[50px] text-[40px]  p-[5px] rounded-full bg-ff group-hover:bg-gg hover:-rotate-90'} />
                                </Link>
                            </Flex>
                            <Heading headingName={'Ui/Ux Design'} className={'font-ops font-bold text-ff group-hover:text-gg  md:text-[50px] text-[40px]  leading-[80px]'} />
                            <Paragraph pText={'Creating user-centered designs that enhance usability, ensuring intuitive navigation and aesthetic appeal for a satisfying user experience.'}
                                className={'font-pap text-ff text-[16px] leading-[40px] text-justify'} />
                        </div>
                        <div className='group border-b-[3px] w-[45%] mt-10 mob:w-full mob:p-5 sm:w-full sm:p-5 md:w-[45%]'>
                            <Flex className={'justify-between'}>
                                <Paragraph
                                    pText={'03'}
                                    className={'font-cha font-bold  md:text-[50px] text-[40px]  service-stroked-text  leading-[80px] text-transparent group-hover:text-hover'} />
                                <Link to="../Pages/Contact" target='_blank'>
                                    <BsArrowDownRight className={'text-black  md:text-[50px] text-[40px]  p-[5px] rounded-full bg-ff group-hover:bg-gg hover:-rotate-90'} />
                                </Link>
                            </Flex>
                            <Heading headingName={'Logo Design'} className={'font-ops font-bold text-ff group-hover:text-gg  md:text-[50px] text-[40px]  leading-[80px]'} />
                            <Paragraph pText={' Designing unique and memorable logos that represent brand identity, combining creativity and simplicity to leave a lasting visual impact on your audience.'}
                                className={'font-pap text-ff text-[16px] leading-[40px] text-justify'} />
                        </div>
                        <div className='group border-b-[3px] w-[45%] mt-10 mob:w-full mob:p-5 sm:w-full sm:p-5 md:w-[45%]'>
                            <Flex className={'justify-between'}>
                                <Paragraph
                                    pText={'04'}
                                    className={'font-cha font-bold  md:text-[50px] text-[40px]  service-stroked-text  leading-[80px] text-transparent group-hover:text-hover'} />
                                <Link to="../Pages/Contact" target='_blank'>
                                    <BsArrowDownRight className={'text-black  md:text-[50px] text-[40px]  p-[5px] rounded-full bg-ff group-hover:bg-gg hover:-rotate-90'} />
                                </Link>
                            </Flex>
                            <Heading headingName={'E-Mail Signature'} className={'font-ops font-bold text-ff group-hover:text-gg  md:text-[50px] text-[40px]  leading-[80px]'} />
                            <Paragraph pText={" professional email signatures that enhance brand identity, provide essential contact information, and leave a lasting impression, improving your brand's credibility and recognition."}
                                className={'font-pap text-ff text-[16px] leading-[40px] text-justify '} />
                        </div>
                    </Flex>

                </Container>
            </div>
        </>
    )
}

export default Service