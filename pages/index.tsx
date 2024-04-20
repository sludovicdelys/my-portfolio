import React from 'react'; 
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from '@/Components/About';
import Experience from "@/Components/Experience";
import Skills from "@/Components/Skills";
import Project from '@/Components/Project';
import { NextPage } from 'next';
import Head from 'next/head';
import Contact from '@/Components/Contact';

const Home: NextPage = () => {
  return (
      <div className="transition-all duration-200 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-purple-900/20 scrollbar-thumb-[#94a3b8]/80">
        <Head>
          <title>Sabrina Seeks Stories Portfolio</title>
        </Head>

        <Header />

        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="snap-start">
          <About />
        </section>

        {/* Experience */}
        <section id="experience" className="snap-start">
          <Experience/>
        </section>

        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills/>
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Project/>
        </section>

        {/* Contact */}
        <section id="contact" className="snap-start">
          <Contact/>
        </section>
      </div>
  );  
};

export default Home;