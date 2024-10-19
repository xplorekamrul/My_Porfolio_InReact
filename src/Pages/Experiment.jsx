import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Global.css'
import Heading from '../Components/Heading';
import { Container } from '../Components/Container';
import Flex from '../Components/Flex';
import Button from '../Components/Button';
import Paragraph from '../Components/Paragraph';
import { FaFileDownload, FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import HeroImag from '../Components/HeroImag';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open state
  };
  return (
    <>
      {/* header section start  */}
      <div className='py-4 fixed w-full z-50'>
        <Container>
          <Flex className={'justify-between items-center'}>
            <Heading headingName={'mk.'} className={'mob:ml-5 sm:ml-5 md:ml-5 lg:ml-0 xl:ml-0 font-qw font-bold text-ff text-[80px] leading-[30px]'} />

            {/* Toggle Button for mobile */}
            <button onClick={toggleMenu} className="md:hidden p-2  text-gg ">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>

            {/* Menu for larger screens */}
            <div className={`hidden md:flex md:justify-around w-full md:w-[68%] lg:w-[50%]`}>
              <Link to="/" className={'pt-2 font-ops font-semibold text-ff text-[20px] leading-[30px] hover:text-gg after:block after:w-[100%] after:h-[3px] after:rounded-lg after:bg-gg after:mt-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-500 cursor-pointer'}
              >Home</Link>
              <Link to="/Service" className={'pt-2 font-ops font-semibold text-ff text-[20px] leading-[30px] hover:text-gg after:block after:w-[100%] after:h-[3px] after:rounded-lg after:bg-gg after:mt-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-500 cursor-pointer'}
              >Services</Link>
              <Link to="/Resume" className={'pt-2 font-ops font-semibold text-ff text-[20px] leading-[30px] hover:text-gg after:block after:w-[100%] after:h-[3px] after:rounded-lg after:bg-gg after:mt-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-500 cursor-pointer'}
              >Resume</Link>
              <Link to="/work" className={'pt-2 font-ops font-semibold text-ff text-[20px] leading-[30px] hover:text-gg after:block after:w-[100%] after:h-[3px] after:rounded-lg after:bg-gg after:mt-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-500 cursor-pointer'}
              >Work</Link>
              <Link to="/Contact" className={'pt-2 font-ops font-semibold text-ff text-[20px] leading-[30px] hover:text-gg after:block after:w-[100%] after:h-[3px] after:rounded-lg after:bg-gg after:mt-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-500 cursor-pointer'}
              >Contact</Link>
              <Link to="/Contact">
                <Button btnName={'Hire me'} className={'font-ops font-semibold text-ff hover:text-black text-[20px]  leading-[30px] px-[20px] py-[5px] border-gg hover:bg-gg hover:border-ff border-2  rounded-full hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]'} />
              </Link>
            </div>

            {/* Menu for moballer screens */}
            {isOpen && (
              <div className="md:hidden absolute top-16 left-0 w-full bg-blackbg z-50">
                <Flex className={'flex-col items-center'}>
                  <Link to="/" className={'font-ops font-semibold text-ff text-[20px] leading-[30px] hover:text-gg py-2 after:block after:w-[100%] after:h-[3px] after:rounded-lg after:bg-gg after:mt-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-500 cursor-pointer'} >
                    Home</Link>
                  <Link to="#Service" className={'font-ops font-semibold text-ff text-[20px] leading-[30px] hover:text-gg py-2 after:block after:w-[100%] after:h-[3px] after:rounded-lg after:bg-gg after:mt-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-500 cursor-pointer'} >
                    Services</Link>
                  <Link to="/Resume" className={'font-ops font-semibold text-ff text-[20px] leading-[30px] hover:text-gg py-2 after:block after:w-[100%] after:h-[3px] after:rounded-lg after:bg-gg after:mt-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-500 cursor-pointer'} >
                    Resume</Link>
                  <Link to="/work" className={'font-ops font-semibold text-ff text-[20px] leading-[30px] hover:text-gg py-2 after:block after:w-[100%] after:h-[3px] after:rounded-lg after:bg-gg after:mt-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-500 cursor-pointer'} >
                    Work</Link>
                  <Link to="/Contact" className={'font-ops font-semibold text-ff text-[20px] leading-[30px] hover:text-gg py-2 after:block after:w-[100%] after:h-[3px] after:rounded-lg after:bg-gg after:mt-1 after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-500 cursor-pointer'} >
                    Contact</Link>
                  <Link to="/Contact">
                    <Button btnName={'Hire me'} className={'font-ops font-semibold text-ff hover:text-black text-[20px]  leading-[30px] px-[20px] py-[5px] border-gg hover:border-ff border-2  rounded-full hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]'} />
                  </Link>
                </Flex>
              </div>
            )}
          </Flex>
        </Container>
      </div>

      {/* hero section */}
      <div className='py-[50px] bg-blackbg'>
        <Container>
          {/* hero section start left part */}
          <Flex className={'  justify-between mob:flex-col-reverse sm:flex-col-reverse tab:text-[30px]:flex-col-reverse tab:flex-col-reverse md:flex-row '}>
            <div className='w-[55%] pt-[100px] mob:w-full mob:mt-[50px]  sm:w-full sm:mt-10 sm:px-5 tab:w-full tab:px-8 md:w-[55%]'>
              <Paragraph pText={'Font-End Developer.'}
                className={'font-pap font-regular text-ff text-[20px] mob:text-[16px] sm:text-[16px] mob:ml-5  leading-[30px] mob:leading-2 '} />

              <Heading headingName={" Hello I'm "} className={'font-cha font-extrabold text-[80px] mob:text-[50px] sm:text-[60px] md:text-[55px] lg:text-[70px] lg:leading-[80px]  mob:ml-5 text-ff leading-[100px] mob:leading-[60px] sm:leading-[70px] '} />
              <Heading headingName={" Md Kamruzzaman "} className={'font-cha font-bold text-[80px] mob:text-[50px] sm:text-[60px]  md:text-[55px] lg:text-[70px] lg:leading-[80px] mob:ml-5 text-gg leading-[100px] mob:leading-[50px] sm:leading-[70px] text-3d '} />

              <Paragraph pText={'As a front-end web developer, I specialize in crafting responsive, user-friendly websites that bring ideas to life. Good design creates a great impression and drives business success. Let me help you turn your vision into a digital experience that leaves a lasting impact.'}
                className={' mob:mt-5 sm:mt-5 font-pap font-regular text-ff text-[16px] text-justify leading-[30px]  pr-[60px] mob:px-5 sm:pr-0'} />

              {/* icons start */}
              <Flex className={'mt-5 mob:px-5 flex-wrap '}>
                <a href="../assets/Mdkamruzzaman_Resume.pdf" download="Mdkamruzzaman_Resume.pdf">
                  <div className='flex mt-5 py-3 px-10 rounded-xl border w-[264px]  hover:bg-gg group hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]'>
                    <Button btnName={'Download cv'} className={'font-ops text-[20px] text-gg uppercase font-semibold group-hover:text-black '} />
                    <FaFileDownload className='text-gg text-[20px] mt-1 ml-3 group-hover:text-black' />
                  </div>
                </a>
                <a href="https://github.com/infomdkamruzzaman" target='_blank'>
                  <div className='mt-5  p-[8.5px] mob:p-[6.5px] sm:p-[8.5px] border-2 border-gg rounded-[50px] w-[50px] h-[50px] ml-[50px]  mob:ml-[16px] sm:ml-[30px] tab:ml-[50px]  lg:ml-[60px] group hover:border-ff hover:shadow-btnshadow  hover:bg-gg'>
                    <FaGithub className='text-gg text-[30px] mob:text-[30px] group-hover:text-black' />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/infomdkamruzzaman/" target='_blank'>
                  <div className='mt-5 p-[8.5px] mob:p-[6.5px] sm:p-[8.5px] border-2 border-gg rounded-[50px] w-[50px] h-[50px] ml-[20px] mob:ml-[10px] sm:ml-[10px] lg:ml-[20px] group hover:border-ff hover:shadow-btnshadow  hover:bg-gg'>
                    <FaLinkedinIn className='text-gg text-[30px] mob:text-[30px] group-hover:text-black' />
                  </div>
                </a>
                <a href="https://www.facebook.com/inf0mdkamruzzaman" target='_blank'>
                  <div className='mt-5 p-[8.5px] mob:p-[6.5px] sm:p-[8.5px] border-2 border-gg rounded-[50px] w-[50px] h-[50px] ml-[20px] mob:ml-[10px] sm:ml-[10px] lg:ml-[20px] group hover:border-ff hover:shadow-btnshadow  hover:bg-gg'>
                    <FaFacebook className='text-gg text-[30px] mob:text-[30px] group-hover:text-black' />
                  </div>
                </a>
                <a href="https://wa.me/8801516573530" target='_blank'>
                  <div className='mt-5 p-[8.5px] mob:p-[6.5px] sm:p-[8.5px] border-2 border-gg rounded-[50px] w-[50px] h-[50px] ml-[20px] mob:ml-[10px] sm:ml-[10px] lg:ml-[20px] group hover:border-ff hover:shadow-btnshadow  hover:bg-gg'>
                    <IoLogoWhatsapp className='text-gg text-[30px] mob:text-[30px] group-hover:text-black' />
                  </div>
                </a>
              </Flex>
            </div>

            {/* hero section right part start */}
            <div className='w-[40%] mob:ml-[50px] sm:mx-[90px] tab:mx-auto md:mt-[200px] lg:ml-[70px] lg:mt-[220px] xl:mt-[80px] xl:ml-[150px] xl-w-[30%]'>
              <HeroImag className={''} />
            </div>
          </Flex>

          {/* counter part start  */}
          <Flex className={'justify-evenly flex-wrap flex-col mt-[50px] px-5 sm:flex-row'}>
            <Flex className={`w-[250px] mt-10`}>
              <Heading headingName={'2'} className={`font-cha font-semibold home-stroked-text text-ff text-[60px]  leading-[30px]
                `} />
              <span className={`font-ops font-semibold text-ff text-[40px] leading-[0px] pl-3 `} >+</span>
              <Paragraph pText={`Years of Experience.`} className={`font-ops font-semibold text-ff text-[20px]  leading-[30px]  pl-3 `} />
            </Flex>
            <Flex className={`w-[250px] mt-10 `}>
              <Heading headingName={`12`} className={`font-cha font-semibold home-stroked-text text-ff text-[60px]  leading-[30px]`} />
              <span className={`font-ops font-semibold text-ff text-[40px] leading-[0px] pl-3 `} >+</span>
              <Paragraph pText={`Projects Completed.`} className={`font-ops font-semibold text-ff text-[20px] leading-[30px]  pl-3 `} />
            </Flex>
            <Flex className={`w-[250px] mt-10 `}>
              <Heading headingName={`8`} className={`font-cha font-semibold home-stroked-text text-ff text-[60px]  leading-[30px]`} />
              <span className={`font-ops font-semibold text-ff text-[40px] leading-[0px] pl-3 `} >+</span>
              <Paragraph pText={`Technologies Mastered.`} className={`font-ops font-semibold text-ff text-[20px] leading-[30px]  pl-3 `} />
            </Flex>
            <Flex className={`w-[250px] mt-10 `}>
              <Heading headingName={`200`} className={`font-cha font-semibold home-stroked-text text-ff text-[60px]  leading-[30px]`} />
              <span className={`font-ops font-semibold text-ff text-[40px] leading-[0px] pl-3 `} >+</span>
              <Paragraph pText={`Code Commit.`} className={`font-ops font-semibold text-ff text-[20px]  leading-[30px]  pl-3 `} />
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Home;
