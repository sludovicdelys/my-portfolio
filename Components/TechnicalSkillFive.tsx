import React from 'react';
import Image from 'next/image';
import sassLogo from "../public/static/logos/scss-logo.png";

type Props = {};

export default function TechnicalSkillFive({}: Props) {
    return (    
        <div className="group relative flex">
            <Image 
                src={sassLogo} 
                alt="Sass logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 
                filter transition duration-300 ease-in-out"/>
        </div>
    )
}