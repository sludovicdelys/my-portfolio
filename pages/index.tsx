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
      <div>
        <Head>
          <title>Sabrina Seeks Stories Portfolio</title>
        </Head>

        <Header />

        {/* Hero */}
        <section id="hero" className="p-8">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="px-8 py-28">
          <About />
        </section>

        {/* Experience */}
        <section id="experience" className="px-8 py-28">
          <Experience/>
        </section>

        {/* Skills */}
        <section id="skills" className="px-8 py-28">
          <Skills/>
        </section>

        {/* Projects */}
        <section id="projects" className="px-8 py-28">
          <Project/>
        </section>

        {/* Contact */}
        <section id="contact" className="px-8 py-28">
          <Contact/>
        </section>
      </div>
  );  
};

export default Home;