import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import typescriptLogo from "../public/static/logos/ts-logo.png";

type Props = {};

export default function TechnicalSkillTwo({}: Props) {
    return (    
        <div className="group relative flex">
            <Link href="https://www.typescriptlang.org/" rel="noopener noreferrer" target="_blank">
                <Image 
                src={typescriptLogo} 
                alt="TypeScript logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"/>
            </Link>
        </div>
    )
}