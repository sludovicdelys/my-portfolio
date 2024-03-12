import React from 'react';
import Link from "next/link";
import Image from "next/image";
import heroImage from "../public/static/images/sabrina.png"

type Props = {};

export default function Hero({}: Props) {
    return (
        <div className="flex flex-col space-y-1 md:space-y-8 items-center justify-center text-center overflow-hidden mt-20">
            <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10 ">Sabrina Seeks Stories</h1>
            <h2 className="w-max text-xs lg:text-lg uppercase pb-2 tracking-[5px] lg:tracking-[15px]">Front End Developer</h2>
            
            <Image 
            src={heroImage} 
            alt="Picture of the author" 
            width={250} 
            height={250} 
            className="rounded-full"/>

            <div className="pt-1 lg:pt-5 space-x-3.5 md:space-x-3.5 z-20">
                <Link href="#about">
                    <button className="hero-button">About</button>
                </Link>

                <Link href="#experience">
                    <button className="hero-button">Experience</button>
                </Link>

                <Link href="#skills">
                    <button className="hero-button">Skills</button>
                </Link>

                <Link href="#projects">
                    <button className="hero-button">Projects</button>
                </Link>
            </div>
        </div>
    );
}