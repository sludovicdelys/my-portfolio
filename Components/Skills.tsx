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
        <div className="h-screen items-center flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto">
            <h3 className="absolute top-24 uppercase tracking-[20px]  text-purple-900 text-2xl pl-6 md:pl-0">Skills</h3>
            <div className="grid grid-cols-4 gap-1 md:gap-5 px-2 md:px-0"> 
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