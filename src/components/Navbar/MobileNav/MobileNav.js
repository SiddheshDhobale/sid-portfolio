import React from "react";
import './MobileNav.css';
import { Link } from "react-scroll";
import resume from '../../../utils/SiddheshDHOBALE_Resume.pdf'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                {/* <a href=""><img src="./assets/images/logo_horizontal-removebg.png" alt="" /></a> */}
                    <ul >
                        <li>
                            <Link
                                to="skillset"
                                spy={true}
                                smooth={true}
                                offset={-90}
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
                                offset={-90}
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
                                offset={-90}
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
                                offset={-80}
                                duration={300}
                                // onSetActive={handleSetActive}
                                // onClick={handleClick}
                                className="menu-item">
                                Contact
                            </Link>
                        </li>

                        {/* 
                        //original
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
                        </li> */}
                        <a href={resume} style={{ textDecoration: 'none' }} download>
                            <button className="contact-btn" >
                                Resume
                            </button>
                        </a>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default MobileNav;