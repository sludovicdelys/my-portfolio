import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import gyncoImage from "../public/static/images/gynco.png";

type Props = {}; 

export default function Projet({}: Props) {
    return (
        <div className="h-screen relative flex overflow-hidden flex-column text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 pl-6 md:pl-0 uppercase tracking-[20px] text-center text-purple-900 text-2xl">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-white-400/20 scrollbar-thumb-[#94a3b8]/80">
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen mt-28 md:mt-none">
                    <Link href="https://gyn-co-memoir.gitlab.io/gyn-co-memoir/" rel="noopener noreferrer" target="_blank">
                        <Image 
                            src={gyncoImage} 
                            alt="Gyn&Co project image" 
                            width={600} 
                            height={600} 
                            className="object-none"/>
                    </Link>
                    

                    <div className="space-y-4 px-0 md:px-10 max-w-6xl">
                        <h4 className="drop-shadow-xl text-3xl font-semibold text-center">
                            <span>Gyn&Co</span>  
                        </h4>
                        <p className="text-md lg:text-xl text-center w-fit lg:w-full">
                            Recently I created this website using Docusaurus and Gitlab Pages to publish my end of the year project report. 
                            Additionnaly I built a search engine so visitors can find information quickly and efficiently. 
                            We will also be using this website to write about functionalities we've recently implemented to the platform. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}