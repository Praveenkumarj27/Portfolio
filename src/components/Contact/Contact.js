import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email,foot } from "./ContactElements";
import ProfilePic from "../../data/Assets/css.png"


function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
    <p style={{textAlign:"center"}}>My inbox is always open. Whether you have a question or just want to say hello, 
    I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</p>

      <span style={{fontWeight:"bold",textAlign:"center",fontSize:"1.2rem",paddingTop:"5px"}}>jpraveenkumar263@gmail</span>
      <a
              className="btn PrimaryBtn"
              href="mailto:jpraveenkumar263@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{textAlign:"center",marginTop:"17px"}}
            >
              Send Mail
            </a>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;