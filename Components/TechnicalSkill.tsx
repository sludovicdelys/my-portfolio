import React from 'react';
import Image from 'next/image';
import javascriptLogo from "../public/static/logos/javascript-logo.png";

type Props = {};

export default function TechnicalSkill({}: Props) {
    return (    
        <div className="group relative flex">
            <Image 
                src={javascriptLogo} 
                alt="JavaScript logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 
                filter transition duration-300 ease-in-out"/>
        </div>
    )
}

