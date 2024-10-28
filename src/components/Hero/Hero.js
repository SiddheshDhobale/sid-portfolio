import React from "react";
import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
//import myImg from '../Hero/Siddhesh_Dhobale_PNGpng.png'

const Hero = () => {

    return (
        <section className="hero-container" id="home">
            <div className="hero-content">
                <h4>Hello,</h4>
                <p >
                    <span className="i-am">I'm </span>
                    <span  className="my-name"> SIDDHESH </span>
                
                    <span className="type-writer">
                    a {' '}
                        <Typewriter
                            words={['Frontend Developer', 'Software Engineer', 'Sketch Artist']}
                            loop={10}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        //onLoopDone={handleDone}
                        //onType={handleType}
                        /></span>
                </p>
                {/* <h3 className='text-start' style={{ fontSize: '3rem' }}>a {' '}
                </h3> */}
                <p className="sub-text">Passionate Frontend/ React Developer | Transforming Ideas into seamless and
                    Visually Stunning Web Solutions | Welcome to my portfolio site 
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/react-96.png" alt="" />
                    </div>
                    
                    <img src="./assets/images/Siddhesh_Dhobale_PNGpng.png" alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/js-96.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/html-96.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/css-96.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/icons-bootstrap.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;