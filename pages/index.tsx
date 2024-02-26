import Nav from "@/Components/Nav";
import React from 'react'; 


const HomePage = () => {
  return (
    <header className="font-medium border-b border-purple-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="flex flex-col cursor-pointer title-font font-medium">
          SabrinaSeeks
          <span className="self-end">Stories</span>
        </h1>
        <Nav />
      </div>
    </header>
  );  
};

export default HomePage;