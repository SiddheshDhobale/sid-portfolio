import React from "react";
import './Footer.css'

const Footer = () => {
    return (

        <div className="footer-container">
            <h5>SIDDHESH DHOBALE</h5>
            <div className="icons">
                <a href="https://www.instagram.com/_super_sid__/"><img src="./assets/images/icons-instagram.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/siddhesh-dhobale-49b055189/"><img src="./assets/images/icons-linkedin.png" alt=""/></a>
                <a href=""><img src="./assets/images/icons-facebook.png" alt=""/></a>
            </div>
            <div className="small-text">
                <small><i>Designed and developed by Siddhesh Dhobale</i></small>
                <small style={{marginBottom:'1rem'}}>Copyright @ 2024 v1.2 </small>
            </div>
        </div>

    )
}

export default Footer;