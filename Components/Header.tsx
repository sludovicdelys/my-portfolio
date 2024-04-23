import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}; 

export default function Header({}: Props) {
    return (
        <header className="sticky bg-white top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <div className="flex flex-row items-center">
                <SocialIcon 
                url="https://www.linkedin.com/in/sabrinaludovicdelys/"
                fgColor="black" 
                bgColor="transparent" />
                <SocialIcon 
                url="https://github.com/sludovicdelys"
                fgColor="black" 
                bgColor="transparent"  />
            </div>
            <div className="flex flex-row items-center cursor-pointer">
                <SocialIcon 
                    url="#contact"
                    className="cursor-pointer"
                    network="email"
                    fgColor="black" 
                    bgColor="transparent" 
                    />
                <p className="uppercase hidden md:inline-flex text-sm">
                Contact Me
                </p>
            </div>
        </header>
    );
}
