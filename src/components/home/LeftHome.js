import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaTwitter, FaLinkedin, FaJsSquare , FaJava } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiPython } from 'react-icons/si';



const LeftHome = () => {
    const [text] = useTypewriter({
        words: ["Frontend developer", "Blockchain developer", "Student"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
    });

    const formatText = (text) => {
        return (
            <span>
                <span className="text-designColor text-6xl font-sans md:font-serif">{text.charAt(0)}</span>
                {text.slice(1)}
            </span>
        );
    };
  return (
    <div className='w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg  font-normal'>
                        WELCOME TO MY WORLD
                    </h4>
                    <h1 className='text-6xl font-bold text-white'>
                        Hi, I'm <span className='text-designColor capitalize'>Gokula Kannan</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>
                        a {formatText(text)}
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor='#ff014f'
                        />
                    </h2>
                    <p>I'm a student passionate about web development with a solid foundation in React and Tailwind CSS. Through my Web 3.0 course, I've gained experience building responsive and dynamic interfaces. I'm eager to keep learning and growing in web development.</p>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-base uppercase font-titleFont mb-4'>FIND ME ON</h2>
                            <div className='flex gap-4'>
                                <span className='bannerIcon'>
                                    <FaFacebook />
                                </span>
                                <span className='bannerIcon'>
                                    <FaLinkedin />
                                </span>
                                <span className='bannerIcon'>
                                    <FaTwitter />
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col '>
                            <h2 className='text-base uppercase font-titleFont mb-4'>TECHNOLOGIES I USE</h2>
                            <div className='flex gap-4'>
                                <span className='bannerIcon'>
                                    <SiReact />
                                </span>
                                <span className='bannerIcon'>
                                    <SiTailwindcss />
                                </span>
                                <span className='bannerIcon'>
                                    <SiPython />
                                </span>
                                <span className='bannerIcon'>
                                    <FaJsSquare />
                                </span>
                                <span className='bannerIcon'>
                                <FaJava />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
  )
}

export default LeftHome