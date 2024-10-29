import React, { useState } from "react";
import './Navbar.css'
import MobileNav from "./MobileNav/MobileNav";
import resume from '../../utils/SiddheshDHOBALE_Resume.pdf'
import { Link } from "react-scroll";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    //scroll sections
    // function scrollToSection(secName) {
    //     console.log(secName);
    //     const element = document.getElementById(secName);
    //     console.log(element);
    //     if (element) {
    //         //adjust the marging top value as needed
    //         const marginTop = 0;
    //         const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
    //         window.scrollTo({ top: scrollToY, behavior: "smooth" });
    //     }
    // }


    return (
        <>
            <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    {/* <h4 className="site-name"><span style={{fontSize:'22px'}}>&lt;</span> Siddhesh Dhobale <span style={{fontSize:'25px'}}>&gt;</span></h4> */}
                    {/* <h3 className="site-name">Site Name</h3> */}
                    <a href="https://siddheshdhobale.github.io/sid-portfolio/">
                        <img src="./assets/images/Siddhesh_horizontal-removebg.png" alt="" />
                    </a>
                    <ul>

                        {/* <li>
                            <Link
                                to="home" 
                                spy={true} 
                                smooth={true} 
                                offset={-100} 
                                duration={300}
                                // onSetActive={handleSetActive}
                                // onClick={handleClick}
                                className="menu-item">
                                Home
                            </Link>
                        </li> */}
                        <li>
                            <Link
                                to="skillset"
                                spy={true}
                                smooth={true}
                                offset={-118}
                                duration={300}
                                // onSetActive={handleSetActive}
                                // onClick={handleClick} 
                                className="menu-item">
                                Skillset
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="experinces"
                                spy={true}
                                smooth={true}
                                offset={-118}
                                duration={300}
                                // onSetActive={handleSetActive}
                                // onClick={handleClick}
                                className="menu-item">
                                Experiences
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-118}
                                duration={300}
                                // onSetActive={handleSetActive}
                                // onClick={handleClick}
                                className="menu-item">
                                Porjects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-118}
                                duration={300}
                                // onSetActive={handleSetActive}
                                // onClick={handleClick}
                                className="menu-item">
                                Contact
                            </Link>
                        </li>


                        {/* {
                            SectionIds.map((secName, i) => {
                                console.log("secName:",secName);
                                
                                return (
                                    <li key={i} onClick={() => scrollToSection(secName)}>
                                        <ScrollLink to={secName} activeClass="active"
                                            spy={true}
                                            smooth={true}
                                            offset={1}
                                            duration={400}
                                            aria-current="page"  >

                                            {secName.toUpperCase()}

                                        </ScrollLink>
                                    </li>
                                )
                            })
                        } */}


                        {/* 
                        //Original
                        <li>
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item">Skillset</a>
                        </li>
                        <li>
                            <a className="menu-item">Experiences</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact</a>
                        </li>*/}


                        <a href={resume} download style={{ textDecoration: 'none' }}>
                            <button className="contact-btn" >
                                Resume
                            </button>
                        </a>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            class={"material-symbols-outlined"}
                            style={{ fontSize: '1.8rem' }}
                        >
                            {
                                isOpen ? <img src="./assets/images/icons-cross.png" alt="" /> :
                                    <img src="./assets/images/icons-menu.png" alt="" />

                            }
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;