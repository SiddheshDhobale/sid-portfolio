import React from "react";
import './ContactInfoCard.css'

const ContactInfoCard = ({ iconUrl, text }) => {

    return (
        <div className="contact-info-card">
            <div className="icon">
                <img src={iconUrl} alt=""/>
            </div>

            {/* <p><a href={text} target="_blank">{text}</a></p> */}
            <p><a href={text} >{text}</a></p>
        </div>
    )
}

export default ContactInfoCard;