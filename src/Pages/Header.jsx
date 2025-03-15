import React, { useState, useRef, useEffect } from "react";
import Heading from "../Components/Heading";
import { Container } from "../Components/Container";
import Flex from "../Components/Flex";
import Button from "../Components/Button";

const Header = () => {
  // State to track if the header is visible based on scroll behavior
  const [isVisible, setIsVisible] = useState(true);

  // State to track the last scroll position
  const [scrollPos, setScrollPos] = useState(0);

  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for detecting outside clicks
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  /**
   * Function to toggle the mobile menu
   * If it's open, clicking the button will close it, and vice versa
   */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /**
   * Effect to close the menu when clicking outside of it
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside the menu and the button, close the menu
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener to detect clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup: remove event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * Effect to manage header visibility on scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < 10) {
        // If user is at the top of the page, keep the header visible
        setIsVisible(true);
      } else if (currentScrollPos > scrollPos + 10) {
        // If user scrolls down by more than 20px, hide the header
        setIsVisible(false);
      } else if (currentScrollPos < scrollPos - 10) {
        // If user scrolls up by more than 10px, show the header
        setIsVisible(true);
      }

      // Update the last known scroll position
      setScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup: remove event listener when component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <div
      className={`header fixed w-full z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-[90px]"
      }`}
    >
      <nav>
        {/* Fixed navigation bar */}
        <div className="pt-5 pb-3 bg-black w-full">
          <Container>
            <Flex className="justify-between items-center">
              {/* Logo */}
              <a href="#home">
                <Heading
                  headingName={"mk."}
                  className="mob:ml-5 sm:ml-5 md:ml-5 lg:ml-0 xl:ml-0 font-qw font-bold text-ff text-[80px] leading-[30px]"
                />
              </a>

              {/* Toggle Button for Mobile */}
              <button
                ref={buttonRef} // Reference for click detection
                onClick={toggleMenu} // Calls toggle function
                className="md:hidden p-2 text-gg"
              >
                {/* If menu is open, show "X" icon, otherwise show menu bars */}
                {isMenuOpen ? (
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

              {/* Mobile Menu (Closes when clicking outside or on X icon) */}
              <div
                ref={menuRef}
                className={`md:hidden fixed top-16 right-5 w-[40%] pb-[50px] pt-5 bg-black border-2 border-gg rounded-lg z-50 shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] 
                transition-all duration-[500ms] ease-in-out transform ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-[20px] scale-95 pointer-events-none"
                }`}
              >
                <Flex className="flex-col items-center">
                  {/* Clicking a menu item closes the menu */}
                  <a
                    href="#home"
                    className="menu-link-mobile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#service"
                    className="menu-link-mobile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#resume"
                    className="menu-link-mobile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resume
                  </a>
                  <a
                    href="#work"
                    className="menu-link-mobile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Work
                  </a>
                  <a
                    href="#contact"
                    className="menu-link-mobile"
                    onClick={() => setIsMenuOpen(false)}
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
