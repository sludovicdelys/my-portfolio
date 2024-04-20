import React from 'react';
import Image from 'next/image';
import materialLogo from "../public/static/logos/materialUI-logo.png";

type Props = {};

export default function TechnicalSkillEight({}: Props) {
    return (    
        <div className="group relative flex">
            <Image 
                src={materialLogo} 
                alt="Material UI logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 
                filter transition duration-300 ease-in-out"/>
        </div>
    )
}