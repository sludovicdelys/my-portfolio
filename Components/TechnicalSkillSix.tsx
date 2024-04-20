import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import figmaLogo from "../public/static/logos/figma-logo.png";

type Props = {};

export default function TechnicalSkillSix({}: Props) {
    return (    
        <div className="group relative flex">
            <Link href="https://www.figma.com/fr/" rel="noopener noreferrer" target="_blank">
                <Image 
                src={figmaLogo} 
                alt="Figma logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"/>
            </Link>
        </div>
    )
}