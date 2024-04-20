import React from 'react';
import Image from 'next/image';
import symfonyLogo from "../public/static/logos/symfony-logo.png";

type Props = {};

export default function TechnicalSkillNine({}: Props) {
    return (    
        <div className="group relative flex">
            <Image 
                src={symfonyLogo} 
                alt="Symfony logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 
                filter transition duration-300 ease-in-out"/>
        </div>
    )
}