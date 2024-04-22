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
        <div className="container items-center text-center max-h-[500px] p-10 mx-auto">
            <h3 className="uppercase tracking-[20px] text-center text-purple-900 text-2xl">Skills</h3>
            <div className="flex flex-wrap items-center justify-center gap-10"> 
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