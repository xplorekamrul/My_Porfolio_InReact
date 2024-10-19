import React, { useState } from 'react'; // Import useState from React
import { Link } from 'react-router-dom';
import Heading from '../Components/Heading';
import { Container } from '../Components/Container';
import Flex from '../Components/Flex';
import Button from '../Components/Button';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open state
  };

  return (
    <div className="header">
      <nav>
       {/* header section start  */}
        <div className='pt-5 bg-blackbg fixed w-full z-50'>
          <Container>
            <Flex className={'justify-between items-center'}>
              <Heading headingName={'mk.'} className={'mob:ml-5 sm:ml-5 md:ml-5 lg:ml-0 xl:ml-0 font-qw font-bold text-ff text-[80px] leading-[30px]'} />

              {/* Toggle Button for mobile */}
              <button onClick={toggleMenu} className="md:hidden p-2 text-gg">
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
                  <Button btnName={'Hire me'} className={'font-ops font-semibold text-ff hover:text-black text-[20px]  leading-[30px] px-[20px] py-[5px] border-gg hover:bg-gg hover:border-gg border-2  rounded-full hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]'} />
                </Link>
              </div>

              {/* Menu for mobile screens */}
              {isOpen && (
                <div className="md:hidden absolute top-16 right-5 w-[40%] pb-[50px] pt-5 bg-cc border-2 border-gg rounded-lg hover:right-5 z-50 shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] ">
                  <Flex className={'flex-col items-center '}>
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
                      <Button btnName={'Hire me'} className={'font-ops font-semibold text-ff hover:text-black text-[20px]  leading-[30px] px-[20px] py-[5px] border-gg hover:bg-gg hover:border-gg border-2  rounded-full hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]'} />
                    </Link>
                  </Flex>
                </div>
              )}
            </Flex>
          </Container>
        </div>
      </nav>
    </div>
  );
};

export default Header;
