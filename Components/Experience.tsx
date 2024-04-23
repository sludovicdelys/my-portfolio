import React from 'react';
import ExperienceCard from '@/Components/ExperienceCard';
import ExperienceCardTwo from '@/Components/ExperienceCardTwo';

type Props = {};

export default function Experience({}: Props) {
    return (
        <div className="container text-center p-5 md:p-10 mx-auto max-h-[500px] items-center">
            <h3 className="pl-6 md:pl-0 uppercase tracking-[20px] text-center text-purple-900 text-2xl">
                Experience
            </h3>

            <div className="container pt-10 mx-auto grid grid-cols-2 gap-y-10">
                <ExperienceCard />
                <ExperienceCardTwo />
            </div>
        </div>  
    )
}