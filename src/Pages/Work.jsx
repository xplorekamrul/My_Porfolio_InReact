import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../Components/Container';
import Heading from '../Components/Heading';
import Flex from '../Components/Flex';
import Paragraph from '../Components/Paragraph';
import { BsArrowDownRight } from "react-icons/bs";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Image from '../Components/Image';
import slider1 from '../assets/slider content(1).png';
import slider2 from '../assets/slider content(2).jpg';
import slider3 from '../assets/slider content(3).png';
import slider4 from '../assets/slider content(4).png';

// Array of project objects
const projects = [
  {
    id: "01",
    title: "Frontend Project",
    description: "Building dynamic, responsive websites using modern tools and technologies, ensuring functionality, performance, and seamless user experiences across all devices.",
    technologies: "HTML5, CSS3, JavaScript.",
    liveLink: "https://infomdkamruzzaman.github.io/furniro-E-website/",
    githubLink: "https://github.com/infomdkamruzzaman/furniro-E-website",
    image: slider1,
  },
  {
    id: "02",
    title: "E-Commerse Project",
    description: "Building dynamic, responsive websites using modern tools and technologies, ensuring functionality, performance, and seamless user experiences across all devices.",
    technologies: "HTML5, CSS3, JavaScript.",
    liveLink: "https://infomdkamruzzaman.github.io/E-commers-website/",
    githubLink: "https://github.com/infomdkamruzzaman/E-commers-website",
    image: slider2,
  },
  {
    id: "03",
    title: "E-Commerse with React",
    description: "Building dynamic, responsive websites using modern tools and technologies, ensuring functionality, performance, and seamless user experiences across all devices.",
    technologies: "Vite.js, Tailwind Css.",
    liveLink: "https://infomdkamruzzaman.github.io/Agenc_website/",
    githubLink: "https://github.com/infomdkamruzzaman/Agenc_website",
    image: slider3,
  },
  {
    id: "04",
    title: "portfolio Project",
    description: "Building dynamic, responsive websites using modern tools and technologies, ensuring functionality, performance, and seamless user experiences across all devices.",
    technologies: "HTML, CSS, Javascript.",
    liveLink: "https://infomdkamruzzaman.github.io/My_Portfolio/",
    githubLink: "https://github.com/infomdkamruzzaman/My_Portfolio",
    image: slider4,
  },
];

const Work = () => {
  const scrollerRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Automatically scroll at intervals
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollerRef.current) {
        scrollerRef.current.scrollBy({
          left: 300,
          behavior: 'smooth',
        });
      }
    }, 2000000);

    return () => clearInterval(scrollInterval);
  }, []);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll manually on button click
  const scroll = (direction) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-blackbg" id='work'>
      {/* Scroll left button */}
      <button
        onClick={() => scroll('left')}
        className="absolute right-[38%] md:right-[32%] lg:right-[30%] bottom-8 transform -translate-y-1/2 bg-gg text-black p-3 rounded-md z-10"
      >
        <FaChevronLeft />
      </button>

      <Container>
        <Flex className="justify-center pt-[100px] pb-10">
          <Heading headingName="Projects pr" className="text-center font-ops font-bold text-ff text-[40px] sm:text-[50px] leading-[80px]" />
          <Heading headingName="ofile." className="text-center font-ops font-bold text-gg text-[40px] sm:text-[50px] leading-[80px]" />
        </Flex>

        {/* Scroller */}
        <div
          ref={scrollerRef}
          className="flex custom-scrollbar overflow-x-auto pb-[100px] space-x-4 scrollbar-hide p-4 bg-blackbg rounded-lg shadow-lg w-full"
          style={{ scrollSnapType: 'x mandatory', maxWidth: '100%' }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[100%] bg-blackbg p-4 rounded-lg transition-transform"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Flex
                className={`justify-between flex-wrap ${isSmallScreen ? 'flex-col-reverse' : 'flex-row'}`}
              >
                <div className="w-full md:w-[40%]">
                  <Paragraph
                    pText={project.id}
                    className="font-cha font-bold text-[50px] service-stroked-text leading-[80px] text-transparent group-hover:text-hover"
                  />
                  <Heading
                    headingName={project.title}
                    className="font-ops font-bold text-ff hover:text-gg text-[30px] sm:text-[40px] leading-[40px]"
                  />
                  <Paragraph
                    pText={project.description}
                    className="font-pap text-ff text-[16px] leading-[40px] mt-5"
                  />
                  <Paragraph
                    pText={project.technologies}
                    className="font-pap text-gg text-[16px] leading-[40px] pb-5 border-b-2 border-b-ff"
                  />

                  <Flex className="mt-5">
                    <TooltipProvider delayDuration={20}>
                      <Tooltip>
                        <TooltipTrigger className="h-[60px] w-[60px] bg-cc rounded-full group">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <BsArrowDownRight className="text-4xl group-hover:text-gg transition-all duration-300 text-ff mx-auto group-hover:-rotate-90" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <Paragraph
                            pText="Live Project"
                            className="bg-white text-black px-8 py-3 rounded-xl text-[20px] font-pap font-semibold mb-5"
                          />
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider delayDuration={20}>
                      <Tooltip>
                        <TooltipTrigger className="h-[60px] w-[60px] bg-cc rounded-full group ml-10">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-4xl group-hover:text-gg transition-all duration-300 text-ff mx-auto" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <Paragraph
                            pText={project.title === "portfolio Project" ? "GitHub Projects" : "Source Code"}
                            className="bg-white text-black px-8 py-3 rounded-xl text-[20px] font-pap font-semibold mb-5"
                          />
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Flex>
                </div>

                {/* Image Div */}
                <div className="w-full md:w-[50%] h-[450px] mt-10 md:mt-0">
                  <div className="h-full flex flex-col justify-center items-center">
                    <Image imgSrc={project.image} className="w-full h-full rounded-xl" />
                  </div>
                </div>
              </Flex>
            </div>
          ))}
        </div>
      </Container>

      {/* Scroll right button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-[25%] bottom-8 transform -translate-y-1/2 bg-gg text-black p-3 rounded-md z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Work;