import React from 'react';
import Title from '../layout/Title';
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo } from "../../asserts/index";

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-b-[1px] border-b-black w-full">
      <div className="flex justify-center items-center text-center">
        <Title 
          title="VISIT MY PORTFOLIO, GIVE YOUR FEEDBACK" 
          des="My projects" 
        />
      </div>
      <div className='grid grid-cols-2 gap-14'>
        <ProjectsCard 
          title="PYTHON PDF-BOT"
          des="A sophisticated PDF answer bot built using Python and Langchain. This tool leverages natural language processing to efficiently handle and respond to queries extracted from PDF documents, offering a seamless and interactive experience for users seeking information." 
          src={projectOne}
        />
        <ProjectsCard 
          title="ANOTHER PROJECT"
          des="A brief description of another project with different features and functionalities. Highlight what makes this project unique and its key aspects."
          src={projectTwo}
        />
      </div>
    </section>
  );
};

export default Projects;
