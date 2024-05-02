import React from 'react';
import ExperienceCard from '@/Components/ExperienceCard';
import ExperienceCardTwo from '@/Components/ExperienceCardTwo';

type Props = {};

export default function Experience({}: Props) {
    return (
        <div className="text-center mx-auto items-center">
            <h3 className="uppercase tracking-[20px] text-center text-purple-900 text-2xl">
                Experience
            </h3>

            <div className="pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10">
                <ExperienceCard />
                <ExperienceCardTwo />
            </div>
        </div>  
    )
}