import React, { useContext } from 'react'
import "./contact.css"
import { useRef,useState } from 'react'
import emailjs from '@emailjs/browser';
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { ThemeContext } from '../../context';
const Contact = () => { 
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_4d98pkp', 'template_u969ilq', formRef.current, 'VYjL2fEGY8GePIXu2')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className='c-title'>Let's discuss you project title</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +92 333 1242856
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        contact@backagain.dev
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        254 Queen Street, Riousllete Samiona 9231 Sweden
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                <b>What’s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along. me.
                </p>
                <form ref = {formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333", color: 'white' }} type='text' placeholder='Name' name='user_name'/>
                    <input style={{backgroundColor: darkMode && "#333", color: 'white' }} type='text' placeholder='Subject' name='user_subject'/>
                    <input style={{backgroundColor: darkMode && "#333", color: 'white' }} type='text' placeholder='Email' name='user_email'/>
                    <textarea style={{backgroundColor: darkMode && "#333", color: 'white' }} rows={5} placeholder='Message' name='user_message'/>
                    <button style={{backgroundColor: darkMode && "#990", color: 'white' }}>Submit</button>
                </form>
                {done && "Thank you"}
            </div>
        </div>
    </div>
  )
}

export default Contact