import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import symfonyLogo from "../public/static/logos/symfony-logo.png";

type Props = {};

export default function TechnicalSkillNine({}: Props) {
    return (    
        <div className="group relative flex">
            <Link href="https://twig.symfony.com/" rel="noopener noreferrer" target="_blank">
                <Image 
                src={symfonyLogo} 
                alt="Symfony logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"/>
            </Link>  
        </div>
    )
}