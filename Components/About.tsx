import * as React from 'react';
import Image from 'next/image';
import authorImage from "../public/static/images/author.png"

type Props = {};

export default function About({}: Props) {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 pl-6 md:pl-0 uppercase tracking-[20px] text-center text-purple-900 text-2xl">
                About
            </h3>
            
            <Image 
            src={authorImage} 
            alt="Picture of the author" 
            width={300} 
            height={300} 
            className="-mb-20 md:mb-0 flex-shrink-0 rounded-full mt-12 md:mt-10 md:mt-none object-cover md:rounded-md md:w-200 md:h-200"/>

            <div className="space-y-10 px-0 md:px-10 items-center">
                <p className="text-md md:text-xl">
                Enchantée, I'm Sabrina, a front-end developer with a rich multicultural and professional background, offering a unique view on blending technology with human experiences. 
                Approaching each project with humility and curiosity, I see every line of code as an opportunity to learn and create inclusive, user-centric digital experiences.
                My experience has underscored the value of systemic design in front-end development, highlighting how thoughtful work improves accessibility and relevance online. 
                </p>
            </div>
        </div>
    )   
}
