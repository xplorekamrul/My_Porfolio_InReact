import React, { useState, useRef, useEffect } from "react";
import Heading from "../Components/Heading";
import { Container } from "../Components/Container";
import Flex from "../Components/Flex";
import Button from "../Components/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header relative">
      <nav>
        <div className="pt-5 bg-black fixed w-full z-50">
          <Container>
            <Flex className="justify-between items-center">
              <a href="#home">
                <Heading
                  headingName={"mk."}
                  className="mob:ml-5 sm:ml-5 md:ml-5 lg:ml-0 xl:ml-0 font-qw font-bold text-ff text-[80px] leading-[30px]"
                />
              </a>

              {/* Toggle Button for mobile */}
              <button
                ref={buttonRef}
                onClick={toggleMenu}
                className="md:hidden p-2 text-gg"
              >
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
              <div className="hidden md:flex md:justify-around w-full md:w-[68%] lg:w-[50%]">
                <a href="#home" className="menu-link">
                  Home
                </a>
                <a href="#service" className="menu-link">
                  Services
                </a>
                <a href="#resume" className="menu-link">
                  Resume
                </a>
                <a href="#work" className="menu-link">
                  Work
                </a>
                <a href="#contact" className="menu-link">
                  Contact
                </a>
                <a href="#contact">
                  <Button btnName="Hire me" className="button-style" />
                </a>
              </div>

              {/* Mobile Menu with Fade Animation */}
              <div
                ref={menuRef}
                className={`md:hidden absolute top-16 right-5 w-[40%] pb-[50px] pt-5 bg-black border-2 border-gg rounded-lg z-50 shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] 
                transition-all duration-300 ease-in-out transform ${
                  isOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-[-10px] scale-95 pointer-events-none"
                }`}
              >
                <Flex className="flex-col items-center">
                  <a
                    href="#home"
                    className="menu-link-mobile"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#service"
                    className="menu-link-mobile"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#resume"
                    className="menu-link-mobile"
                    onClick={() => setIsOpen(false)}
                  >
                    Resume
                  </a>
                  <a
                    href="#work"
                    className="menu-link-mobile"
                    onClick={() => setIsOpen(false)}
                  >
                    Work
                  </a>
                  <a
                    href="#contact"
                    className="menu-link-mobile"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                  <a href="#contact">
                    <Button btnName="Hire me" className="button-style" />
                  </a>
                </Flex>
              </div>
            </Flex>
          </Container>
        </div>
      </nav>
    </div>
  );
};

export default Header;
