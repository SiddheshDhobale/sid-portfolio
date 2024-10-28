import React from "react";
import './Contact.css'
import ContactInfoCard from "./ContactInfo/ContactInfoCard";

import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {

    return (
        <section className="contact-container" id="contact">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }} className="">
                    {/* <ContactInfoCard
                        iconUrl="./assets/images/icon-email.png"
                        text="siddheshdhobale@gmail.com"
                    /> */}

                    <ContactInfoCard
                        iconUrl="./assets/images/icon-github.png"
                        text="https://github.com/SiddheshDhobale"
                    />

                     <ContactInfoCard
                        iconUrl="./assets/images/icon-linkedin.png"
                        text="https://www.linkedin.com/in/siddhesh-dhobale-49b055189/"
                    />
                </div>
                <div style={{ flex: 1 }} className="">

                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default Contact;
