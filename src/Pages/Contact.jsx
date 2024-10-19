import React from 'react'
import { Container } from '../Components/Container';
import Heading from '../Components/Heading';
import Flex from '../Components/Flex';
import Paragraph from '../Components/Paragraph';
import Button from '../Components/Button';
import { FaPhone } from "react-icons/fa6";
import { MdEmail,MdLocationPin } from "react-icons/md";


const Contact = () => {
    return (
        <>
            <section className='py-[50px] bg-blackbg'>
                <Container>
                    <Flex className="justify-center pt-10 pb-10">
                        <Heading headingName="Let's Co" className="text-center font-ops font-bold text-ff text-[40px] sm:text-[50px] leading-[80px]" />
                        <Heading headingName="nnect!" className="text-center font-ops font-bold text-gg text-[40px] sm:text-[50px] leading-[80px]" />
                    </Flex>
                    <Flex className={'flex-col  md:flex-row  p-5 xl:p-0 justify-between'}>
                        <div className='w-full md:w-[50%] bg-cc px-7 py-10 rounded-xl'>
                            <Heading headingName="Let's work togather" className="text-center font-ops font-bold text-gg text-[35px] leading-[60px] sm:text-[40px] md:text-left" />
                            <Paragraph pText={'Let’s collaborate to bring your vision to life. I craft dynamic, user-focused designs that make an impact and deliver exceptional results.'}
                                className={'font-pap text-ff text-[16px] leading-[40px] mt-5 text-center md:text-left'} />
                            <Flex className={'flex-col md:flex-row flex-wrap justify-between'}>
                                <input
                                    type="text"
                                    placeholder="Firstname"
                                    className="py-2 mob:w-[70%] sm:w-[70%] lg:w-[45%] pl-[15px] ml-5 mt-5 rounded-lg bg-blackbg custom-placeholder border-2  border-black text-ff focus:border-gg focus:ring-[1px] focus:ring-gg
                                 focus:outline-none focus:ml-0 hover:border-3 hover:border-ff transition-all duration-300 focus:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]
                                 "
                                />
                                <input
                                    type="text"
                                    placeholder="Lastname"
                                    className="py-2 mob:w-[70%] sm:w-[70%] lg:w-[45%] pl-[15px] ml-5 mt-5 rounded-lg bg-blackbg custom-placeholder border-2  border-black text-ff focus:border-gg focus:ring-[1px] focus:ring-gg
                                        focus:outline-none focus:ml-0 hover:border-3 hover:border-ff transition-all duration-300 focus:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="py-2 mob:w-[70%] sm:w-[70%] lg:w-[45%] pl-[15px] ml-5 mt-5 rounded-lg bg-blackbg custom-placeholder border-2  border-black text-ff focus:border-gg focus:ring-[1px] focus:ring-gg
                                 focus:outline-none focus:ml-0 hover:border-3 hover:border-ff transition-all duration-300 focus:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] "
                                />
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    className="py-2 mob:w-[70%] sm:w-[70%] lg:w-[45%] pl-[15px] ml-5 mt-5 rounded-lg bg-blackbg custom-placeholder border-2  border-black text-ff focus:border-gg focus:ring-[1px] focus:ring-gg
                                        focus:outline-none focus:ml-0 hover:border-3 hover:border-ff transition-all duration-300 focus:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] "
                                />
                                <input
                                    type="text"
                                    placeholder="Service you want!"
                                    className="py-2 mob:w-[70%] sm:w-[70%] lg:w-[45%] pl-[15px] ml-5 mt-5 rounded-lg bg-blackbg custom-placeholder border-2  border-black text-ff focus:border-gg focus:ring-[1px] focus:ring-gg
                                        focus:outline-none focus:ml-0 hover:border-3 hover:border-ff transition-all duration-300 focus:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]"
                                />
                                <input
                                    type="text"
                                    placeholder="Your Country"
                                    className="py-2 mob:w-[70%] sm:w-[70%] lg:w-[45%] pl-[15px] ml-5 mt-5 rounded-lg bg-blackbg custom-placeholder border-2  border-black text-ff focus:border-gg focus:ring-[1px] focus:ring-gg
                                        focus:outline-none focus:ml-0 hover:border-3 hover:border-ff transition-all duration-300 focus:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] "
                                />
                            </Flex>

                            <textarea name="massagebox" placeholder='Type your text here.' className='pt-[10px] mob:w-[70%] sm:w-[70%] lg:w-[97%] h-[100px] pl-[15px] ml-5 mt-5 rounded-lg bg-blackbg custom-placeholder border-2 
                             border-black text-ff focus:border-gg focus:ring-[1px] focus:ring-gg focus:outline-none focus:ml-0 hover:border-3 hover:border-ff transition-all duration-300 
                             focus:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]'>
                            </textarea>

                            <Button btnName={'Send Massage'} className={`mt-10 ml-5 font-ops font-semibold text-ff bg-blackbg text-[20px] leading-[30px] px-[20px] py-[10px] border-black hover:border-gg border-2 
                                hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] rounded-xl hover:bg-gg hover:text-black hover:bg-scale-x-0 origin-center  hover:bg-scale-x-100 transition-transform duration-2000 `} />
                        </div>
                        <div className='w-full  md:w-[40%] mt-10 md:mt-[200px]'>
                            <Flex>
                                <FaPhone className='text-6xl p-5 bg-cc rounded-lg text-gg'/>
                                <div className='ml-5'>
                                    <Paragraph pText={'Name'} className={'font-ops text-[16px] text-ff '}/>
                                    <Paragraph pText={'(+88) 0151 6573 530'} className={'font-ops text-[20px] text-ff font-semibold'}/>
                                </div>
                            </Flex >
                            <Flex className={'mt-10'}>
                                <MdEmail className='text-6xl p-5 bg-cc rounded-lg text-gg'/>
                                <div className='ml-5'>
                                    <Paragraph pText={'Email'} className={'font-ops text-[16px] text-ff '}/>
                                    <Paragraph pText={'info.mdkamruzzaman.dev @gmail.com'} className={'font-ops text-[20px] text-ff font-semibold md:text-[16px] lg:text-[20px]'}/>
                                </div>
                            </Flex>
                            <Flex className={'mt-10'}>
                                <MdLocationPin className='text-6xl p-5 bg-cc rounded-lg text-gg'/>
                                <div className='ml-5'>
                                    <Paragraph pText={'Address'} className={'font-ops text-[16px] text-ff '}/>
                                    <Paragraph pText={'Bangladesh, Jashore (7420) .'} className={'font-ops text-[20px] text-ff font-semibold'}/>
                                </div>
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Contact