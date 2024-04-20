import React from 'react';
import Image from 'next/image';
import reactLogo from "../public/static/logos/react-logo.png";

type Props = {};

export default function TechnicalSkillThree({}: Props) {
    return (    
        <div className="group relative flex">
            <Image 
                src={reactLogo} 
                alt="React logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 
                filter transition duration-300 ease-in-out"/>
        </div>
    )
}