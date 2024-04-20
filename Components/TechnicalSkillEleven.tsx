import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gitLogo from "../public/static/logos/git-logo.png";

type Props = {};

export default function TechnicalSkillEleven({}: Props) {
    return (    
        <div className="group relative flex">
            <Link href="https://git-scm.com/" rel="noopener noreferrer" target="_blank">
                <Image 
                src={gitLogo} 
                alt="Git logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"/>
            </Link>   
        </div>
    )
}