import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bootstrapLogo from "../public/static/logos/bootstrap-logo.png";

type Props = {};

export default function TechnicalSkillSeven({}: Props) {
    return (    
        <div className="group relative flex">
            <Link href="https://getbootstrap.com/" rel="noopener noreferrer" target="_blank">
                <Image 
                src={bootstrapLogo} 
                alt="Bootstrap logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"/>
            </Link>
        </div>
    )
}