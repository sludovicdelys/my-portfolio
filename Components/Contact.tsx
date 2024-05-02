import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alegreya } from 'next/font/google';

const alegreya = Alegreya({
    weight: ['600'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-alegreya',
})

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

type Props = {};

export default function Contact({}: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:ludovicdelyssabrina@gmail.com?subject={formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div className="flex flex-col mx-auto items-center">
            <h3 className="uppercase tracking-widest text-purple-900 text-2xl md:text-4xl">Contact</h3>

            <div className="flex flex-col p-10 md:px-10 items-center">
                <h4 className={`${alegreya.className} text-3xl font-semibold text-center`}>
                   Need To Inquire{" "}
                   <span className="decoration-[#FFFFFF]/50 underline"></span>  
                </h4>


                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <a href="mailto:ludovicdelyssabrina@gmail.com">
                            <p className="text-lg md:text-2xl">ludovicdelyssabrina@gmail.com</p>
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="hidden md:flex flex-col space-y-2 w-fit mx-auto pt-10 overflow-x-scroll scrollbar scrollbar-track-white-400/20 scrollbar-thumb-[#94a3b8]/80">
                    <div className="flex space-x-1 text-center">
                        <input {...register('name')} placeholder="Name" className="contactInput pl-1" type="text"/>
                        <input {...register('email')} placeholder="Email" className="contactInput pl-1" type="email"/>
                    </div>

                    <input {...register('subject')} placeholder="Subject" className="contactInput pl-1" type="text"/>
                    <textarea {...register('message')} placeholder="Message" className="contactInput pl-1" />
                    <button type="submit" className="bg-purple-900 py-5 px-10 rounded-md text-white font-bold text-lg text-center pl-0">Submit</button>
                </form>
            </div>
        </div>
    )
}
