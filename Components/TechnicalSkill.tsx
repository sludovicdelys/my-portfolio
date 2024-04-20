import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import javascriptLogo from "../public/static/logos/javascript-logo.png";

type Props = {};

export default function TechnicalSkill({}: Props) {
    return (    
        <div className="group relative flex">
            <Link href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" rel="noopener noreferrer" target="_blank">
                <Image 
                src={javascriptLogo} 
                alt="JavaScript logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 ease-in-out"/>
            </Link>
        </div>
    )
}

