import React from 'react'; 
import Nav from "@/Components/Nav";
import Header from "@/Components/Header";
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
      <div className="overflow-y-scroll overflow-x-hidden">
        <Header />
      </div>
  );  
};

export default Home;
