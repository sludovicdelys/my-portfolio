import React from 'react'; 
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import { NextPage } from 'next';
import Head from 'next/head';

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
      </div>
  );  
};

export default Home;