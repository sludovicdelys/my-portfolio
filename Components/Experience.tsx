import React from 'react';
import ExperienceCard from '@/Components/ExperienceCard';
import ExperienceCardTwo from '@/Components/ExperienceCardTwo';

type Props = {};

export default function Experience({}: Props) {
    return (
        <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full pl-4 md:px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 pl-6 md:pl-0 uppercase tracking-[20px] text-center text-purple-900 text-2xl">
                Experience
            </h3>

            <div className="w-full h-min md:pb-10 flex space-x-5 overflow-x-scroll pt-28 md:pt-56 snap-x snap-mandatory scrollbar scrollbar-track-white-400/20 scrollbar-thumb-[#94a3b8]/80">
                <ExperienceCard />
                <ExperienceCardTwo />
            </div>
        </div>  
    )
}