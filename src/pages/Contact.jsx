import { useState } from "react";
import {useAuth} from "../store/auth";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};


export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData );

    const [userData, setUserData] = useState(true);

    const { user } = useAuth();

    if(userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });

        setUserData(false);
    }

    // lets tackle our handleInput
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    //handle form getformSubmissionInfo
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch("http://localhost:5000/api/form/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          });

          if(response.ok) {
            setContact(defaultContactFormData);
            const data = await response.json();
            console.log(data);
            alert("Message send successfully");

          } else {
            // Handle API error here
            console.error("API error:", response.status, response.statusText);
          }

        } catch (error) {
            console.log(error);
        }
     };
    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact us</h1>
                </div>

                {/* contact page main */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/support.png" alt="we are always ready to help"  />
                    </div>

                    {/* actual contact form content  */}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message">message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    value={contact.message}
                                    onChange={handleInput}
                                    required
                                    cols="30"
                                    rows="6"
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>


                </div>

                <section className="mb-3">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.918051891296!2d77.32538!3d28.572223400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e94a2663f%3A0x96317734f1be41f7!2sNoida%20Sector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1720594216767!5m2!1sen!2sin"
                 width="100%" 
                 height="450" 
              
                 allowFullScreen
                 loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
            </section>
        </>
    );
};