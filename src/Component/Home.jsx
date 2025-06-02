import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaFolderClosed } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

export default function Home() {
  return (
   <>
   <nav className="navigation">
      <a href="#home" className="icon-link">
        <GoHomeFill size={24} className="icon" /> Home
      </a>
      <a href="#project" className="icon-link">
    <FaFolderClosed size={24} className="icon" /> Projects
  </a>
  <a href="#contact" className="icon-link">
    <FaUserCircle size={24} className="icon" /> Contact
  </a>
</nav>

<section>
    <section id="home">
  <Hero />
</section>

   
  <About />


    <Skills/>

     <section id="project">
    <Project />
   </section>

    <section id="contact">
  <Contact />
</section>

</section>

   </>
   
  )
}
