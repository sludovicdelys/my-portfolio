import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import nodeLogo from "../public/static/logos/node-logo.png";

type Props = {};

export default function TechnicalSkillFour({}: Props) {
    return (    
        <div className="group relative flex">
            <Link href="https://nodejs.org/" rel="noopener noreferrer" target="_blank">
                <Image 
                src={nodeLogo} 
                alt="Node.js logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"/>
            </Link>
        </div>
    )
}