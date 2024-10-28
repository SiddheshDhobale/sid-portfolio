import React, { useRef } from "react";
import './ContactForm.css'
import emailjs from "@emailjs/browser";

const ContactForm = () => {

    const formRef = useRef();
    
    // const { useData, setUserData } = useContext(MyContext);
    // console.log("useData1",useData);

    // const [formData, setFormData] = useState({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     message: ''
    // });

    // const handleChange = (e) => {
    //     console.log(e.target.value);
    //     const { name, value } = e.target; // Destructure name and value from the event target

    //     setFormData(prev => ({
    //         ...prev, // Spread the previous state
    //         [name]: value // Update the specific field
    //     }));

    // }

    //console.log(formData);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("formData inside submit",formData)
    //     setUserData(formData);

    //     setFormData({
    //         firstname: '',
    //         lastname: '',
    //         email: '',
    //         message: ""
    //     });

    // }

    // console.log("useData2",useData);
    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_qgmrb9d",
                "template_mds83im",
                formRef.current,
                "qj7S2OQsW3JtnHa5K"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    formRef.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );

    };


    return (

        <div className="contact-form-container">
            <form ref={formRef} onSubmit={sendEmail}>
                <div className="name-container">
                    <input type="text"
                        name="first_name"
                        placeholder="First Name"
                    // onChange={handleChange}
                    />
                    <input type="text"
                        name="last_name"
                        placeholder="Last Name"
                    // onChange={handleChange}
                    />
                </div>
                <input type="email"
                    name="email"
                    placeholder="Email"
                // onChange={handleChange}

                />
                <textarea type="textarea"
                    name="message"
                    placeholder="Message"
                    rows={3}
                // onChange={handleChange}

                />

                <button onClick={() => { }}>SEND</button>
            </form>
        </div>

    )
}

export default ContactForm;
