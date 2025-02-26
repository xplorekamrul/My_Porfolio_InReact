
import React, { useState, useEffect } from 'react';
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaGithub, FaFileDownload
} from "react-icons/fa";
import {
    SiTailwindcss, SiNextdotjs, SiVite, SiAdobephotoshop, SiAdobeillustrator
} from "react-icons/si";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { Container } from '../Components/Container';
import Heading from '../Components/Heading';
import Paragraph from '../Components/Paragraph';
import Flex from '../Components/Flex';
import Button from '../Components/Button';

//about data
const about = {
    title: 'About Me',
    description: "I'm a passionate front-end web developer with a creative flair for graphic design. I specialize in building responsive, user-friendly websites that turn ideas into engaging digital experiences.",

    info: [
        {
            fieldName: 'Name',
            semidot: ":",
            fieldValue: 'Md Kamruzzaman'
        },
        {
            fieldName: 'Phone',
            semidot: " - ",
            fieldValue: '(+880) 1516 5773 530'
        },
        {
            fieldName: 'Experience',
            semidot: " - ",
            fieldValue: '2+ Years'
        },
        {
            fieldName: "What's up",
            semidot: " - ",
            fieldValue: '(+880) 1516 5773 530'
        },
        {
            fieldName: 'Nationality',
            semidot: " - ",
            fieldValue: 'Bangladesh'
        },
        {
            fieldName: 'Religion',
            semidot: " - ",
            fieldValue: 'Islam'
        },
        {
            fieldName: 'Email',
            semidot: " - ",
            fieldValue: "info.mdkamruzzaman.dev@gmail.com"
        },
        {
            fieldName: "Freelance ",
            semidot: " - ",
            fieldValue: "Available "
        },
        {
            fieldName: "Language",
            semidot: " - ",
            fieldValue: "English,Bengali,Hinidi,Urdu"
        },
    ]
};
//experience data
const experience = {
    title: "My Experience.",
    description: "With experience in web development I’ve worked on Various projects, delivering high-quality, responsive websites that effectively meet client needs and exceed expectations.",
    items: [
        {
            company: "Creative It Institute.",
            Position: "Mern Stack Developer.",
            duration: "2024 - Present.",
        },
        {
            company: "Creative It Institute.",
            Position: "Front End Developer Intern.",
            duration: "2024 - Summer.",
        },
        {
            company: "Bright Skills Ltd.",
            Position: "Web Designer.",
            duration: "2023 - 2024",
        },
        {
            company: "Orjon It Institute.",
            Position: "Graphics Designer.",
            duration: "2022 - 2023",
        },
        {
            company: "Orjon It Institute.",
            Position: "Graphics Designer.",
            duration: "2022 - 2023",
        },
        {
            company: "Freelance.",
            Position: "Graphics Designer.",
            duration: "2022 - 2024",
        },
    ]
};
//Education data
const education = {
    title: "My Education",
    description: "Studied web development and design at top institutes, receiving diplomas in Mern Stack, Front End Development, and Graphics Design while gaining practical skills and knowledge.",
    items: [
        {
            institute: "Creative It Institute.",
            degree: "Mern Stack Developer.",
            duration: "2024 - Present.",
        },
        {
            institute: "Bright skills Ltd.",
            degree: "Web Development.",
            duration: "2023 - Summer.",
        },
        {
            institute: "Online Course Platfrom.",
            degree: "Front End Development.",
            duration: "2023-Winter.",
        },
        {
            institute: "Graphics it Center.",
            degree: "Graphics Design.",
            duration: "2022-2023",
        },
        {
            institute: "Jashore Polytechnic Institute.",
            degree: "Diploma in CSE.",
            duration: "2020 - 2024",
        },
        {
            institute: "Gazir Dorgha Madrasha.",
            degree: "Secondary School Certificate.",
            duration: "2019 - 2020",
        },

    ]
};
//skills data
const skills = {
    title: "My Skills",
    description: "I'm passionate about front-end development 👨‍💻 and I bring a creative touch through graphic design 🎨. As a Front-End Web Developer & Graphics Designer.",
    item: [
        {
            icon: <FaHtml5 />,
            Name: "Html 5",
        },
        {
            icon: <FaCss3 />,
            Name: "CSS 3",
        },
        {
            icon: <FaJs />,
            Name: "Javascript",
        },
        {
            icon: <FaReact />,
            Name: "React.js",
        },
        {
            icon: <SiVite />,
            Name: "Vite.js",
        },
        {
            icon: <SiNextdotjs />,
            Name: "Next.js",
        },
        {
            icon: <FaNodeJs />,
            Name: "Node.js",
        },
        {
            icon: <SiTailwindcss />,
            Name: "Tailwind CSS",
        },
        {
            icon: <FaGithub />,
            Name: "Github",
        },
        {
            icon: <FaFigma />,
            Name: "Figma",
        },
        {
            icon: <SiAdobephotoshop />,
            Name: "Photoshop",
        },
        {
            icon: <SiAdobeillustrator />,
            Name: "Illustrator",
        },
    ]
};

const Resume = () => {
    const [activeTab, setActiveTab] = useState('experience'); // Set the initial active tab

    const handleTabChange = (value) => {
        setActiveTab(value); // Update active tab when clicked
    };

    const [scrollPosition, setScrollPosition] = useState(0);

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

                    <Flex className={'justify-center pb-[100px] mt-10'}>
                        <Heading headingName={'My De'} className={'text-center font-ops font-bold text-ff text-[50px] leading-[80px] '} />
                        <Heading headingName={'tails.'} className={'text-center font-ops font-bold text-gg text-[50px] leading-[80px] '} />

                    </Flex>
                    <Tabs
                        defaultValue='experience'
                        className='flex flex-col xl:flex-row gap-[60px]'
                        onValueChange={handleTabChange} // Detect tab change
                    >
                        <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 -mt-[50px]'>
                            <Heading headingName={'Why hire me?'}
                                className={'font-ops font-bold text-ff text-[50px] leading-[50px]'} />
                            <Paragraph pText={" I'm passionate about Web development 👨‍💻 and I bring a creative touch through graphic design 🎨."}
                                className={'font-pap  text-ff text-[16px] leading-[35px] mt-5'} />


                            <TabsTrigger value='experience'
                                className={`font-ops font-bold text-[20px] py-2 rounded-lg ${activeTab === 'experience'
                                    ? 'bg-gg text-black'
                                    : 'bg-cc text-ff'
                                    }`}
                            >
                                Experience
                            </TabsTrigger>
                            <TabsTrigger value='education'
                                className={`font-ops font-bold text-[20px] py-2 rounded-lg ${activeTab === 'education'
                                    ? 'bg-gg text-black'
                                    : 'bg-cc text-ff'
                                    }`}
                            >
                                Education
                            </TabsTrigger>
                            <TabsTrigger value='skills'
                                className={`font-ops font-bold text-[20px] py-2 rounded-lg ${activeTab === 'skills'
                                    ? 'bg-gg text-black'
                                    : 'bg-cc text-ff'
                                    }`}
                            >
                                Skills
                            </TabsTrigger>
                            <TabsTrigger value='about'
                                className={`font-ops font-bold text-[20px] py-2 rounded-lg ${activeTab === 'about'
                                    ? 'bg-gg text-black'
                                    : 'bg-cc text-ff'
                                    }`}
                            >
                                About Me
                            </TabsTrigger>
                        </TabsList>

                        {/* content */}
                        <div className='min-h-[560px] w-full'>
                            {/* experience */}
                            <TabsContent value='experience' className={`w-full text-ff`}>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <Heading headingName={experience.title} className={"font-ops font-bold text-ff text-[30px] leading-[50px]"} />
                                    <Paragraph pText={experience.description} className={'font-pap  text-ff text-[16px] leading-[35px] mt-2 mx-auto xl:mx-0'} />

                                    {/* Scrollable Area */}
                                    <div className="h-[450px] overflow-y-scroll flex flex-col space-y-4 p-4  custom-scrollbar" onScroll={handleScroll}>
                                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                            {experience.items.map((item, index) => {
                                                return (
                                                    <li key={index}
                                                        className='bg-cc h-[184px] hover:border hover:border-gg hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3'>
                                                        <span className='font-ops  text-[16px] leading-[35px]  text-gg'>
                                                            {item.duration}</span>
                                                        <Heading headingName={item.Position}
                                                            className={'font-cha font-bold text-ff text-[30px] leading-[35px]'} />
                                                        <div className='flex'>
                                                            <div className='h-2 w-2 rounded-full bg-gg mt-3 mr-3'></div>
                                                            <Paragraph pText={item.company} className={'font-pap  text-ff text-[16px] leading-[35px]'} />
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                </div>
                            </TabsContent>
                            {/* education  */}
                            <TabsContent value='education' className='w-full text-ff'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <Heading headingName={education.title} className={"font-ops font-bold text-ff text-[30px] leading-[50px]"} />
                                    <Paragraph pText={education.description} className={'font-pap  text-ff text-[16px] leading-[35px] mt-2 mx-auto xl:mx-0'} />

                                    {/* Scrollable Area */}
                                    <div className="h-[450px] overflow-y-scroll flex flex-col space-y-4 p-4  custom-scrollbar" onScroll={handleScroll}>
                                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                            {education.items.map((item, index) => {
                                                return (
                                                    <li key={index}
                                                        className='bg-cc h-[184px] hover:border hover:border-gg hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)] py-2 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3'>
                                                        <span className='font-ops  text-[16px] leading-[35px]  text-gg'>
                                                            {item.duration}</span>
                                                        <Heading headingName={item.degree}
                                                            className={'font-cha font-bold text-ff text-[30px] leading-[35px]'} />
                                                        <div className='flex'>
                                                            <div className='h-2 w-2 rounded-full bg-gg mt-3 mr-3'></div>
                                                            <Paragraph pText={item.institute} className={'font-pap  text-ff text-[16px] leading-[35px]'} />
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                </div>
                            </TabsContent>
                            {/* skills  */}
                            <TabsContent value='skills' className='w-full text-ff'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <Heading headingName={skills.title} className={"font-ops font-bold text-ff text-[30px] leading-[50px]"} />
                                    <Paragraph pText={skills.description} className={'font-pap  text-ff text-[16px] leading-[35px] mt-2 mx-auto xl:mx-0'} />

                                    {/* Scrollable Area */}
                                    <div className="h-[450px] overflow-y-scroll flex flex-col space-y-4 p-4  custom-scrollbar" onScroll={handleScroll}>
                                        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]'>
                                            {skills.item.map((item, index) => {
                                                return (
                                                    <li key={index}
                                                        className='bg-cc hover:border hover:border-gg hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]  py-10 px-10 rounded-xl flex flex-col justify-center items-center group '>
                                                        <TooltipProvider delayDuration={20}>
                                                            <Tooltip>
                                                                <TooltipTrigger className=''>
                                                                    <div className='text-6xl group-hover:text-gg transition-all duration-300 '>{item.icon}</div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    <Paragraph pText={item.Name} className={'bg-white text-black px-8 py-3 rounded-xl text-[20px] font-pap font-semibold mb-8 '} />
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                </div>
                            </TabsContent>
                            {/* about  */}
                            <TabsContent value='about' className='w-full text-ff'>
                                <div className='px-5'>
                                    <Heading headingName={about.title} className={"font-ops font-bold text-ff text-[30px] leading-[50px] text-center lg:text-left"} />
                                    <Paragraph pText={about.description} className={'font-pap  text-ff text-[16px] leading-[35px] mt-2 mx-auto xl:mx-0 text-center lg:text-left '} />
                                    <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-6 mt-10'>
                                        {about.info.map((info, index) => {
                                            return (
                                                <li key={index} className='flex gap-3'>

                                                    <span>{info.fieldName}</span>
                                                    <span>{info.semidot}</span>
                                                    <Paragraph pText={info.fieldValue} />

                                                </li>
                                            );
                                        })}

                                    </ul>
                                    <a href="../assets/Mdkamruzzaman_Resume.pdf" download="Mdkamruzzaman_Resume.pdf">
                                        <div className='flex mt-10 py-3 px-10 rounded-xl border w-[264px]  hover:bg-gg group hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.6)]'>
                                            <Button btnName={'Download cv'} className={'font-ops text-[20px] text-gg uppercase font-semibold group-hover:text-black '} />
                                            <FaFileDownload className='text-gg text-[20px] mt-1 ml-3 group-hover:text-black' />
                                        </div>
                                    </a>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </Container>
            </section>
        </>
    );
};

export default Resume;
