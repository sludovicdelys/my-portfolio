import React from 'react';
import Image from 'next/image';
import authorImage from "../public/static/images/author.png"

type Props = {};

export default function About({}: Props) {
    return (
        <div className="flex flex-col mx-auto items-center">
            <h3 className="uppercase tracking-widest text-center text-purple-900 text-2xl md:text-4xl">
                About
            </h3>

            <div className="flex flex-col p-10 md:flex-row md:px-10 items-center">
                <Image 
                src={authorImage} 
                alt="Picture of Sabrina" 
                width={300} 
                height={300} 
                className="md:pb-0 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-md md:w-200 md:h-200"/>

                <p className="pt-5 md:mt-none md:p-5 text-md md:text-lg">
                Enchantée, my name is Sabrina. As a web developer with a rich multicultural and professional background, I offer a unique perspective on blending technology with human experiences.
                I view every line of code as a chance to learn and produce inclusive, user-centric digital experiences by approaching each project with humility and curiosity.
                </p>
            </div>
        </div>
    )   
}
