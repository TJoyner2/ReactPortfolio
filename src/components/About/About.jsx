import React from 'react'
import './About.css'
import headShot from '../../assets/headshot.jpg'
import unc from '../../assets/unc.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={unc} alt="" style={{width: '45%', height: 'auto'}}/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                  <img src={headShot} alt="" style={{width: '105%', height: 'auto'}}/>  
                </div>
                <div className="about-right">
                    <div className="about-p">
                        <p>I am an experienced Full Stack Web Developer.  I am always looking for an opertunity to code in any manner.  Eager to learn as much as I can. With aspirations to become a video game developer.</p>
                        <p>My expertice is in backend coding, with an emphasis in React. I enjoy figuring out the puzzle of frontend development but the logic of backend coding comes more naturally. </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML, CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>SQL, noSQL</p><hr style={{width:"600%"}}/></div>
                        <div className="about-skill"><p>React</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About