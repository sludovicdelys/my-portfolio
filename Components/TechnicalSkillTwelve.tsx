import React from 'react';
import Image from 'next/image';
import githubLogo from "../public/static/logos/github-logo.png";

type Props = {};

export default function TechnicalSkillTwelve({}: Props) {
    return (    
        <div className="group relative flex">
            <Image 
                src={githubLogo} 
                alt="Github logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 
                filter transition duration-300 ease-in-out"/>
        </div>
    )
}