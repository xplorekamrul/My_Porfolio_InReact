import React from 'react';
import '../Global.css'
import Heading from '../Components/Heading';
import { Container } from '../Components/Container';
import Flex from '../Components/Flex';
import Button from '../Components/Button';
import Paragraph from '../Components/Paragraph';
import { FaFileDownload, FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import HeroImag from '../Components/HeroImag';
import HeroText from '../Components/HeroText';
import DynamicTextEffect from '../Components/DynamicTextEffect';

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div className='py-[50px] bg-blackbg' id='home'>
        <Container>
          {/* hero section start left part */}
          <Flex className={'  justify-between mob:flex-col-reverse sm:flex-col-reverse tab:text-[30px]:flex-col-reverse tab:flex-col-reverse md:flex-row '}>
            <div className='w-[55%] pt-[100px] mob:w-full mob:mt-[50px]  sm:w-full sm:mt-10 sm:px-5 tab:w-full tab:px-8 md:w-[55%]'>
              <Paragraph pText={'Font-End Developer.'}
                className={'font-pap font-regular text-ff text-[20px] mob:text-[16px] sm:text-[16px] mob:ml-5  leading-[30px] mob:leading-2 '} />

              <HeroText/>
              <Paragraph pText={'As a front-end web developer, I specialize in crafting responsive, user-friendly websites that bring ideas to life. Good design creates a great impression and drives business success. Let me help you turn your vision into a digital experience that leaves a lasting impact.'}
                className={' mob:mt-5 sm:mt-5 font-pap font-regular text-ff text-[16px] text-justify leading-[30px]  pr-[60px] mob:px-5 sm:pr-0'} />

              {/* icons start */}
              <Flex className={'mt-5 mob:px-5 flex-wrap '}>
              <a href="/mdkamruzzaman.pdf" download="/mdkamruzzaman.pdf">
              <div className='flex mt-5 hover:mt-3 transition-all duration-300 ease-in  py-3 px-10 rounded-xl border border-gg w-[264px]  hover:bg-gg group hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]'>
                    <Button btnName={'Download cv'} className={'font-ops text-[20px] text-gg uppercase font-semibold group-hover:text-black '} />
                    <FaFileDownload className='text-gg text-[20px] mt-1 ml-3 group-hover:text-black' />
                  </div>
                </a>
                <a href="https://github.com/xplorekamrul" target='_blank'>
                  <div className='mt-5  p-[8.5px] mob:p-[6.5px] sm:p-[8.5px] border-2 border-gg rounded-[50px] w-[50px] h-[50px] ml-[50px]  mob:ml-[16px] sm:ml-[30px] tab:ml-[50px]  lg:ml-[60px] group hover:border-gg hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] hover:mt-3 transition-all duration-300 ease-in hover:bg-gg'>
                    <FaGithub className='text-gg text-[30px] mob:text-[30px] group-hover:text-black' />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/xplorekamrul/" target='_blank'>
                  <div className='mt-5 p-[8.5px] mob:p-[6.5px] sm:p-[8.5px] border-2 border-gg rounded-[50px] w-[50px] h-[50px] ml-[20px] mob:ml-[10px] sm:ml-[10px] lg:ml-[20px] group hover:border-gg hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] hover:mt-3 transition-all duration-300 ease-in hover:bg-gg'>
                    <FaLinkedinIn className='text-gg text-[30px] mob:text-[30px] group-hover:text-black' />
                  </div>
                </a>
                <a href="https://www.facebook.com/xplorekamrul" target='_blank'>
                  <div className='mt-5 p-[8.5px] mob:p-[6.5px] sm:p-[8.5px] border-2 border-gg rounded-[50px] w-[50px] h-[50px] ml-[20px] mob:ml-[10px] sm:ml-[10px] lg:ml-[20px] group hover:border-gg hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] hover:mt-3 transition-all duration-300 ease-in hover:bg-gg'>
                    <FaFacebook className='text-gg text-[30px] mob:text-[30px] group-hover:text-black' />
                  </div>
                </a>
                <a href="https://wa.me/8801516573530" target='_blank'>
                  <div className='mt-5 p-[8.5px] mob:p-[6.5px] sm:p-[8.5px] border-2 border-gg rounded-[50px] w-[50px] h-[50px] ml-[20px] mob:ml-[10px] sm:ml-[10px] lg:ml-[20px] group hover:border-gg hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] hover:mt-3 transition-all duration-300 ease-in hover:bg-gg'>
                    <IoLogoWhatsapp className='text-gg text-[30px] mob:text-[30px] group-hover:text-black' />
                  </div>
                </a>
              </Flex>
            </div>

            {/* hero section right part start */}
            <div className='w-[40%] mob:ml-[10%] mob:mt-6 sm:mt-6 tab:mx-auto md:mt-[200px] lg:ml-[70px] lg:mt-[220px] xl:mt-[80px] xl:ml-[150px] xl-w-[30%]'>
              <HeroImag className={''} />
            </div>
          </Flex>

          {/* counter part start  */}
          <Flex className={'justify-evenly flex-wrap flex-col mt-[50px] px-5 sm:flex-row'}>
            <Flex className={`w-[250px] mt-10`}>
              <DynamicTextEffect textArray={['2']} className={`font-cha font-semibold home-stroked-text text-ff text-[60px]  leading-[30px]
                `} />
              <span className={`font-ops font-semibold text-ff text-[40px] leading-[0px] pl-3 `} >+</span>
              <Paragraph pText={`Years of Experience.`} className={`font-ops font-semibold text-ff text-[20px]  leading-[30px]  pl-3 `} />
            </Flex>
            <Flex className={`w-[298px] mt-10 `}>
              <DynamicTextEffect textArray={[`12`]} className={`font-cha font-semibold home-stroked-text text-ff text-[60px]  leading-[30px]`} />
              <span className={`font-ops font-semibold text-ff text-[40px] leading-[0px] pl-3 `} >+</span>
              <Paragraph pText={`Projects Completed.`} className={`font-ops font-semibold text-ff text-[20px] leading-[30px]  pl-3 `} />
            </Flex>
            <Flex className={`w-[250px] mt-10 `}>
              <DynamicTextEffect textArray={[`8`]} className={`font-cha font-semibold home-stroked-text text-ff text-[60px]  leading-[30px]`} />
              <span className={`font-ops font-semibold text-ff text-[40px] leading-[0px] pl-3 `} >+</span>
              <Paragraph pText={`Technologies Mastered.`} className={`font-ops font-semibold text-ff text-[20px] leading-[30px]  pl-3 `} />
            </Flex>
            <Flex className={`w-[295px] mt-10 `}>
              <DynamicTextEffect textArray={['200']} className={`font-cha font-semibold home-stroked-text text-ff text-[60px]  leading-[30px]`} />
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
