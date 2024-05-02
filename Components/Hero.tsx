import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Alegreya } from 'next/font/google';
import heroImage from "../public/static/images/about.png"

const alegreya = Alegreya({
    weight: ['600'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-alegreya',
})

type Props = {};

export default function Hero({}: Props) {
    return (
        <div className="h-full flex flex-col space-y-1 md:space-y-6 items-center justify-center text-center overflow-hidden mt-20">
            <h1 className={`${alegreya.className} text-5xl lg:text-6xl scroll-px-10`}>Sabrina Seeks Stories</h1>
            <h2 className="w-max text-s lg:text-lg uppercase py-5 md:py-2 tracking-wide lg:tracking-widest">Web Developer</h2>
            
            <Image  
            src={heroImage} 
            alt="Bridgerton watercolor painting made by Sabrina" 
            width={500} 
            height={500} 
            className="relative rounded-full mx-auto object-cover"/>

            <div className="flex flex-col md:flex-row items-center pt-1 lg:pt-5 md:space-x-3.5 z-20">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>

                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>

                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>

                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>

                <Link href="#contact">
                    <button className="heroButton">Contact</button>
                </Link>
            </div>
        </div>
    );
}