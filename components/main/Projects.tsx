

import React from "react";
import ProjectCard from "../sub/ProjectCard";


function Projects() {
  

  return (
    <div className="flex flex-col items-center justify-center py-0" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        
        <ProjectCard
            src="/NextWebsite.png"
            title="Modern Mern Stack Platform"
            description="A MERN stack project is an educational platform designed to provide a seamless user experience for both visitors and students. Mern technologies + TypeScript + Tailwind CSS + Redux + Redux Persist + Material UI ."
        />
        
        <ProjectCard
          src="/CardImage.png"
          title="Modern React Native Django App"
          description="This is modern mobile Tourisme sites & Restaurant application to provide the user as much locations to visit in a particulaire city. React Native + Django + Redux                                                   ."
        />
  
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="This is modern portfolio build in order to represnte the developer's competences and qualifications in web\mobile development and Devops. Using Next.js 14 + Typescript + Tailwind CSS + sanity.io + framer motion   ."
        />
      </div>
    </div>
  );
}

export default Projects;
