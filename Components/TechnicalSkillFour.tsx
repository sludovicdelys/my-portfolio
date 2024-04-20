import React from 'react';
import Image from 'next/image';
import nodeLogo from "../public/static/logos/node-logo.png";

type Props = {};

export default function TechnicalSkillFour({}: Props) {
    return (    
        <div className="group relative flex">
            <Image 
                src={nodeLogo} 
                alt="Node.js logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 
                filter transition duration-300 ease-in-out"/>
        </div>
    )
}