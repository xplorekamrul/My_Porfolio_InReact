import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../Components/Container';
import Heading from '../Components/Heading';
import Flex from '../Components/Flex';
import Paragraph from '../Components/Paragraph';
import { BsArrowDownRight } from "react-icons/bs";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Image from '../Components/Image';
import slider1 from '../assets/portfolio-showcase (6).png';
import slider2 from '../assets/portfolio-showcase (1).jpeg';
import slider3 from '../assets/portfolio-showcase (4).png';
import slider4 from '../assets/portfolio-showcase (5).png';
import slider5 from '../assets/portfolio-showcase (2).png';
import slider6 from '../assets/portfolio-showcase (2).png';
import slider7 from '../assets/portfolio-showcase (7).png';
import slider8 from '/sliders (5).png';
import slider9 from '/sliders (1).png';
import slider10 from '/sliders (4).png';
import slider11 from '/sliders (3).png';
import slider12 from '../assets/paroject_slider (2).png';
import slider13 from '../assets/paroject_slider (6).png';
import slider14 from '../assets/paroject_slider (4).png';
import slider15 from '../assets/paroject_slider (3).png';
import slider16 from '../assets/paroject_slider (1).png';
import slider17 from '../assets/paroject_slider (5).png';

// Array of project objects
const projects = [
  {
    "id": "01",
    "title": "School Management Web App",
    "description": "A comprehensive full-cycle educational platform featuring virtual classrooms, automated student promotion, and a built-in chatbot, while managing complex roles for students, parents, and teachers with integrated payment systems.",
    "technologies": "Next.js, Socket.io, Livekit, Prisma, PostgreSQL, TypeScript",
    "liveLink": "https://birbd.org/",
    "githubLink": "https://github.com/xplorekamrul",
    "image": slider1
  },
  {
    "id": "02",
    "title": "HR Management System",
    "description": "An enterprise-grade solution focused on employee lifecycle management, featuring hardware-integrated attendance tracking, shift calculation, and automated report generation for PDF and Excel formats using specialized libraries.",
    "technologies": "Next.js, Prisma ORM, MySQL, TypeScript, Next-Auth, Server-action",
    "liveLink": "https://hris.museafoods.com/",
    "githubLink": "https://github.com/xplorekamrul",
    "image": slider2
  },
  {
    "id": "03",
    "title": "Obokash.com Travel Agency",
    "description": "A specialized travel management platform handling complex data for tours, visas, and flights across multiple countries, featuring administrative IP blocking and section-based data feeding for optimized user experiences.",
    "technologies": "Next.js, Prisma ORM, MySQL, TypeScript, Next-Auth, Zod",
    "liveLink": "https://work.obokash.com/",
    "githubLink": "https://github.com/xplorekamrul",
    "image": slider3
  },
  {
    "id": "04",
    "title": "Dynamic School Website",
    "description": "A multi-tenant architecture designed to support the creation and management of multiple school websites simultaneously, utilizing domain-dependent data fetching and institute-specific administrative controls from a single project.",
    "technologies": "Next.js, Prisma ORM, PostgreSql, TypeScript, Next-Auth, Zod",
    "liveLink": "https://www.daulatpurmuhsingirls.edu.bd/",
    "githubLink": "https://github.com/xplorekamrul",
    "image": slider4
  },
  {
    "id": "05",
    "title": "Courier Management System",
    "description": "A real-time logistics dashboard providing live tracking via Google Maps, route optimization, and automated invoicing with jsPDF, successfully resolving complex state conflicts and notification synchronization for dispatch teams.",
    "technologies": "Next.js, TypeScript, Web Socket, Google Maps, Zod, MongoDb",
    "liveLink": "https://courier-pro-self.vercel.app/",
    "githubLink": "https://github.com/xplorekamrul",
    "image": slider8
  },
  {
    "id": "06",
    "title": "Matrimonial Site - ighotok.com",
    "description": "A full-stack matchmaking application featuring customizable search filters, a proposal exchange system between users, and unique matching percentage algorithms backed by a secure Supabase and PostgreSQL database architecture.",
    "technologies": "Next.js, TypeScript, Shadcn, Prisma, PostgreSQL, Supabase, Zustand",
    "liveLink": "https://www.ighotok.com",
    "githubLink": "https://github.com/xplorekamrul",
    "image": slider6
  },
  {
    "id": "07",
    "title": "RareviewIt.com",
    "description": "Rareviewit.com delivers full-stack web development, strategic SEO, and UI/UX design, leveraging modern tech to build scalable platforms that enhance brand visibility and drive growth.",
    "technologies": "Next.js, Prisma ORM, PostgreSql, TypeScript, Next-Auth, Server-action",
    "liveLink": "https://www.rareviewit.com/",
    "githubLink": "https://github.com/xplorekamrul",
    "image": slider7
  },
 
  {
    id: "09",
    title: "BIRL E-commerce Platform",
    description: "Creating a scalable e-commerce platform with product catalogs, cart, checkout, and secure payment gateway integration.",
    technologies: "Next.js, Tailwind CSS, ShadCn, MongoDb, Zustand, etc.",
    liveLink: "https://birlecom.vercel.app/",
    githubLink: "https://github.com/xplorekamrul/",
    image: slider9,
  },
  {
    id: "10",
    title: "Rich Text Editor",
    description: "Building a customizable text editor with formatting, media embedding, and live content preview features.",
    technologies: "Next.js, Tailwind CSS, ShadCn, Tiptap, Zustand, etc.",
    liveLink: "https://editorbyxplorekamrul.vercel.app/",
    githubLink: "https://github.com/xplorekamrul/micro-editor",
    image: slider10,
  },
  {
    id: "11",
    title: "Web Video Player",
    description: "Designing an advanced web-based video player with custom controls, playlists, and responsive streaming.",
    technologies: "Next.js, Tailwind CSS, ShadCn, Zod, Zustand, etc.",
    liveLink: "https://video-player-gold.vercel.app/",
    githubLink: "https://github.com/xplorekamrul/video-player",
    image: slider11,
  },
  {
    id: "12",
    title: "BAY Institute",
    description: "Creating an educational institute website with course listings, contact forms, and animated interactions.",
    technologies: "Next.js, Tailwind CSS, ShadCn, Google APIs, Framer Motion, EmailJS,, etc.",
    liveLink: "https://birbd.vercel.app/",
    githubLink: "https://github.com/xplorekamrul",
    image: slider13,
  },
  {
    id: "13",
    title: "Mosque Beauty Website",
    description: "Developing a static showcase website for a mosque with events, gallery, and donation information.",
    technologies: "HTML5, CSS3, JavaScript, etc.",
    liveLink: "https://xplorekamrul.github.io/mosque-beauty/?#",
    githubLink: "https://github.com/xplorekamrul/mosque-beauty",
    image: slider12,
  },
  
  {
    id: "14",
    title: "Portfolio Project",
    description: "Developing a personal portfolio website to showcase skills, projects, and achievements with animations.",
    technologies: "Vite.js, EmailJS, Framer Motion, React Router",
    liveLink: "https://infomdkamruzzaman.vercel.app/",
    githubLink: "https://github.com/xplorekamrul/My_Porfolio_InReact",
    image: slider15,
  },
  {
    id: "15",
    title: "Frontend Project - AI Animate",
    description: "Creating an interactive frontend app with animated text, AI-based features, and image display.",
    technologies: "Next.js, Tailwind CSS, ShadCn",
    liveLink: "https://aianimate.vercel.app/",
    githubLink: "https://github.com/xplorekamrul/TimerImageView-Typing",
    image: slider17,
  },
  {
    id: "16",
    title: "Frontend Project - Creative Agency",
    description: "Designing a creative agency website with service showcases, portfolio, and responsive layouts.",
    technologies: "Next.js, Tailwind CSS, ShadCn",
    liveLink: "https://creative-agency-ten-tau.vercel.app/",
    githubLink: "https://github.com/xplorekamrul/creative_agency",
    image: slider16,
  },
  {
    id: "17",
    title: "Innovate",
    description: "Building a business-focused landing page with modern UI components and clean, professional layouts.",
    technologies: "Next.js, TypeScript, Tailwind CSS, ShadCn",
    liveLink: "https://innovate-home-ten--green.vercel.app/",
    githubLink: "https://github.com/xplorekamrul/innovateHomeTen",
    image: slider14,
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
                <div className="w-full md:w-[50%] h-[280px] lg:h-[450px] mt-10 md:mt-0">
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