import React from 'react';
import Image from 'next/image';
import nextLogo from "../public/nextjs-logo.png";
import typescriptLogo from "../public/ts-logo.png";
import symfonyLogo from "../public/symfony-logo.png";

type Props = {};

export default function ExperienceCard({}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center p-5 transition-opacity duration-200 overflow-hidden'>
            <div className="px-0 md:px-5">
                <h4 className="text-2xl md:text-4xl font-light text-center md:mt-16">Gyn&Co</h4>
                <p className="font-bold text:lg md:text-2xl mt-1 text-center">Volunteer Fullstack Developer</p>
                <ul className="flex space-x-2 my-2 justify-center">
                    <li className="flex justify-center items-center">
                        <Image 
                            src={nextLogo} 
                            alt="Next.js logo" 
                            className="object-contain h-[70px] w-[70px]"/>
                    </li>
                    
                    <li className="flex justify-center items-center">
                        <Image 
                            src={typescriptLogo} 
                            alt="TypeScript logo" 
                            className="object-contain h-[70px] w-[70px]"/>
                    </li>
                    
                    <li className="flex justify-center items-center">
                        <Image 
                            src={symfonyLogo} 
                            alt="Symfony logo" 
                            className="object-contain h-[70px] w-[70px]"/>
                    </li>
                </ul>
                <p className="uppercase py-5 text-gray-500 text-xs md:text-xl text-center">Started on Oct 2022 - Current</p>
                <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg w-5/6 text-center md:text-left md:w-full">
                    <li>Contributed to the design and implementation of layered architecture.</li>
                    <li>Development of front-end applications using Next.js, React.js, TypeScript, Material UI and Axios</li>
                    <li>Participated to the development of the back-end application using Symfony framework, MySQL, EasyAdmin and API Platform</li>
                </ul>
            </div>
        </article>
    )
}