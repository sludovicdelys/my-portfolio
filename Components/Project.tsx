import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import gyncoImage from "../public/static/images/gynco.png";

type Props = {}; 

export default function Projet({}: Props) {
    return (
        <div className="flex flex-col mx-auto items-center">
            <h3 className="uppercase tracking-widest text-center text-purple-900 text-2xl md:text-4xl">
                Projects
            </h3>

            <div className="flex flex-col p-10 md:px-10 items-center">
                <Link href="https://gyn-co-memoir.gitlab.io/gyn-co-memoir/" rel="noopener noreferrer" target="_blank">
                    <Image 
                        src={gyncoImage} 
                        alt="Gyn&Co project image" 
                        width={600} 
                        height={600} 
                        className="object-cover"/>
                </Link>
                

                <div className="space-y-4 p-10 max-w-6xl">
                    <h4 className="drop-shadow-xl text-3xl font-semibold text-center">
                        <span>Gyn&Co</span>  
                    </h4>
                    <p className="text-md lg:text-xl text-center w-fit lg:w-full">
                        Recently I created this website using Docusaurus and Gitlab Pages to publish my end of the year project report. 
                        Additionnaly I built a search engine so visitors can find information quickly and efficiently.  
                    </p>
                </div>
            </div>
        </div>
    )
}