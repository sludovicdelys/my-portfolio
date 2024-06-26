import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import scssLogo from "../public/static/logos/scss-logo.png";
import figmaLogo from "../public/static/logos/figma-logo.png";
import twigLogo from "../public/static/logos/twig-logo.png";

type Props = {};

export default function ExperienceCardTwo({}: Props) {
    return (
        <div className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 p-5 transition-opacity duration-200 overflow-hidden'>
            <div className="px-0 md:px-5">
                <h4 className="text-2xl md:text-4xl font-light text-center md:mt-16">Elao</h4>
                <p className="font-bold text:lg md:text-2xl mt-1 text-center text-nowrap">Web Integrator</p>
                <ul className="flex space-x-2 my-2 justify-center">
                    <li className="flex justify-center items-center">
                        <Link href="https://twig.symfony.com/" rel="noopener noreferrer" target="_blank">
                            <Image 
                            src={twigLogo} 
                            alt="Twig logo" 
                            className="object-contain h-[70px] w-[70px]"/>
                        </Link>  
                    </li>
                    <li className="flex justify-center items-center">
                        <Link href="https://sass-lang.com/" rel="noopener noreferrer" target="_blank">
                            <Image 
                            src={scssLogo} 
                            alt="Sass logo" 
                            className="object-contain h-[70px] w-[70px]"/>
                        </Link>
                    </li>
                    <li className="flex justify-center items-center">
                        <Link href="https://www.figma.com/fr/" rel="noopener noreferrer" target="_blank">
                            <Image 
                            src={figmaLogo} 
                            alt="Figma logo"
                            className="object-contain h-[70px] w-[70px]"/>  
                        </Link>
                    </li> 
                </ul>
                <p className="uppercase py-5 text-gray-500 text-xs md:text-xl text-center">From Aug 2021 - To Feb 2023</p>
                <ul className="list-disc space-y-4 ml-5 text-sm md:text-md lg:text-lg text-center md:text-left">
                    <li>Cutting and integrating graphic mockups using Figma.</li>
                    <li>Creating static and mail templates using CSS and SASS</li>
                    <li>Creating animations using CSS and SASS</li>
                    <li>Developing and integrating web and mobile components, including ergonomic and graphic adaptations and proposals</li>
                </ul>
            </div>
        </div>
    )
}