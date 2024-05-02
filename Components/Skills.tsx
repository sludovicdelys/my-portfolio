import React from 'react';
import TechnicalSkill from "@/Components/TechnicalSkill";
import TechnicalSkillTwo from "@/Components/TechnicalSkillTwo";
import TechnicalSkillThree from "@/Components/TechnicalSkillThree";
import TechnicalSkillFour from "@/Components/TechnicalSkillFour";
import TechnicalSkillFive from "@/Components/TechnicalSkillFive";
import TechnicalSkillSix from "@/Components/TechnicalSkillSix";
import TechnicalSkillSeven from "@/Components/TechnicalSkillSeven";
import TechnicalSkillEight from "@/Components/TechnicalSkillEight";
import TechnicalSkillNine from "@/Components/TechnicalSkillNine";
import TechnicalSkillTen from "@/Components/TechnicalSkillTen";
import TechnicalSkillEleven from "@/Components/TechnicalSkillEleven";
import TechnicalSkillTwelve from "@/Components/TechnicalSkillTwelve";

type Props = {};

export default function Skills({}: Props) {
    return (
        <div className="flex flex-col mx-auto items-center max-w-[500px]">
            <h3 className="uppercase tracking-widest text-purple-900 text-2xl md:text-4xl">Skills</h3>
            <div className="grid grid-cols-4 gap-1 md:gap-5 px-2 md:px-0 pt-10"> 
                <TechnicalSkill />
                <TechnicalSkillTwo />
                <TechnicalSkillThree />
                <TechnicalSkillFour />
                <TechnicalSkillFive />
                <TechnicalSkillSix />
                <TechnicalSkillSeven />
                <TechnicalSkillEight />
                <TechnicalSkillNine />
                <TechnicalSkillTen />
                <TechnicalSkillEleven />
                <TechnicalSkillTwelve />
            </div>
        </div>
    )
}