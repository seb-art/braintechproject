
import './Contact.css';
import contactImg from "./img/logoa.png"
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';




export default function Contact() {
    const form = useRef();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMsg] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
        alert(`Hey ${name}, Your message has been sent to BrainTech`)

        emailjs.sendForm('service_i2g4vxi', 'template_yh4fjwe', form.current, '30lwwBmPXC8iilHvm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire us.</h1>
                            <p className="hire__text white">We are available for solve your problems. Connect with us via phone:</p>
                            <p className="hire__text white"><strong>+254748404119</strong> or email <strong>braintech@gmail.com</strong></p>
                        </div>
                        {/*  */}
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="input__box">
                            <label>Name
                            <input type="text" name="user_name"  onChange={e => setName(e.target.value)} value={name} className="contact name" placeholder="Your name *"  /> </label>
                            <label>Email</label>
                            <input type="email" name="user_email" onChange={e => setEmail(e.target.value)} value={email}  className="contact email" placeholder="Your Email *" />
                            <label>Message</label>
                            <textarea name="message" onChange={e => setMsg(e.target.value)} value={message} className="contact_message_box" placeholder="Your Message *" />
                            <button type="submit" value="Send" className="btn contact pointer" >Send</button>
                             </div>
                        </form>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}
