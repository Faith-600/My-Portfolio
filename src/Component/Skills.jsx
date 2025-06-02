import React, {useEffect}from "react";
import { FaTools } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


export default function SkillsSection() {
  useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);

  return (
    <section className="skills-section max-w-4xl mx-auto mt-10 px-6" >
      <div className="flex items-center gap-3 mb-4" >
        <div className="floaty">
           <FaTools size={24} className="icon" /> 
         </div>
        <h2 className="floaty-h2">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <rect x="2" y="6" width="28" height="20" rx="5" fill="#e0e7ff" stroke="#f472b6" strokeWidth="1.5" />
            <rect x="8" y="12" width="16" height="8" rx="2" fill="#a7f3d0" />
          </svg>
          <span className="skill-title">Frontend</span>
          <span className="skill-desc">React,Next, HTML/CSS,Redux</span>
        </div>

        <div className="skill-card"  data-aos="fade-up" data-aos-delay="200 ">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <rect x="5" y="8" width="22" height="16" rx="4" fill="#fbcfe8" stroke="#a7f3d0" strokeWidth="1.5" />
            <rect x="10" y="13" width="12" height="6" rx="2" fill="#e0f2fe" />
          </svg>
          <span className="skill-title backend">Backend</span>
          <span className="skill-desc">Node.js,Express, SQL</span>
        </div>

        <div className="skill-card"data-aos="fade-up" data-aos-delay="300">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <circle cx="16" cy="16" r="13" fill="#a7f3d0" stroke="#a78bfa" strokeWidth="1.5" />
            <rect x="13" y="8" width="6" height="16" rx="2" fill="#fbcfe8" />
          </svg>
          <span className="skill-title devops">Tools</span>
          <span className="skill-desc">Docker, Github, Git</span>
        </div>
        <div className="skill-card" data-aos="fade-up" data-aos-delay="400" >
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <rect x="5" y="8" width="22" height="16" rx="4" fill="#fbcfe8" stroke="#a7f3d0" strokeWidth="1.5" />
            <rect x="10" y="13" width="12" height="6" rx="2" fill="#e0f2fe" />
          </svg>
          <span className="skill-title backend">Mobile</span>
          <span className="skill-desc">React Native</span>
        </div>
      </div>
    </section>
    
  );
}
