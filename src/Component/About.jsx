import React from 'react'

function About() {
  return (
    <>
    <div className='aboutdiv'>
    <div className='about' >
        <h1 className='about-h1'>About Me</h1>
        <p>I’m a self-taught Full-Stack Developer with a background in public 
            health. I originally moved into healthcare because I’m passionate about helping people and improving lives.
             Along the way, I discovered web development as a powerful way to create  more solutions that truly make a  huge difference for users. 
             This unique blend gives me a user-centered approach to building websites and apps. I love crafting digital experiences that are responsive, 
             engaging, and accessible to everyone.</p>
   <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bounce">
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