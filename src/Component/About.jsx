import React from 'react'

function About() {
  return (
    <>
    <div className='aboutdiv'>
    <div className='about' >
        <h1 className='about-h1'>About Me</h1>
        <p>I’m a Full-Stack Developer who enjoys building user-friendly digital experiences that solve real problems. I focus on creating responsive, accessible, and engaging websites and applications that not only look good but work seamlessly across devices.
     I bring a user-centered mindset to every project, blending functionality with intuitive design. Whether it’s a landing page, dashboard, or a full-stack product, I care deeply about performance, usability, and delivering real value.
    I’m always learning, iterating, and improving — driven by curiosity and the joy of turning ideas into impactful products.</p>
   <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="bounce">
  View Resume
</a>
    </div>

    <div className='picturetwodiv'>
        <img src='sixth.png' alt=" a picture of a lady working on her laptop" />
    </div>
    </div>

    </>
  )
}

export default About