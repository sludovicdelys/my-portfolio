import React from 'react'; 
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
      <div className="overflow-y-scroll overflow-x-hidden">
        <Head>
          <title>Sabrina Seeks Stories Portfolio</title>
        </Head>

        <Header />

        {/* Hero */}
        <section id="hero" className="snap-start">
        <Hero />
        </section>
      </div>
  );  
};

export default Home;