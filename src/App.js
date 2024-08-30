import React from "react";
import Navbar from "./components/navbar/Navbar";
import Features from "./components/features/Features";
import Home from "./components/home/Home";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar/>
        <Home />
        <Features />
      </div>    
    </div>
  );
}

export default App;
