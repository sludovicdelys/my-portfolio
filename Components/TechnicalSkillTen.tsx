import React from 'react';
import Image from 'next/image';
import mysqlLogo from "../public/static/logos/mysql-logo.png";

type Props = {};

export default function TechnicalSkillTen({}: Props) {
    return (    
        <div className="group relative flex">
            <Image 
                src={mysqlLogo} 
                alt="MySQL logo" 
                className="object-contain rounded-none w-24 h-24 xl:w-32 xl:h-32 
                filter transition duration-300 ease-in-out"/>
        </div>
    )
}