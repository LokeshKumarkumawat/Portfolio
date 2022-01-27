import React from 'react'
import styled from 'styled-components'


import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import Fade from 'react-reveal/Fade';
import { IconContext } from "react-icons";





const Contact = () => {
    return (
        <Fade left>
        <Wrap>

           
            <ItemText>
                <h3>Contact Me</h3>
                <br />
                <p>My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <br />
                <br />



            </ItemText>

           


            
            <SmallDiv>
            <IconContext.Provider value={{ color: "blue", size: "1.3em" }}>

                <a href="g"> <SiLinkedin /></a>
                <a href="g"> <SiGithub /></a>
                <a href="h"> <SiInstagram /></a>

                </IconContext.Provider>

            </SmallDiv>
            
        </Wrap>
        </Fade>

    )
}

export default Contact;





const Wrap = styled.div`
padding-top:5vh;
display:flex;
flex-direction: column;
align-items:center;
overflow-x:hidden;
margin-bottom:8vh;



@media (max-width: 768px){
    display:flex;
    text-align: center;
    padding-top: 0px
    
   
}



`

const ItemText = styled.div`
text-align: center;
width:35%;

h3{
    font-size:40px;
    font-weight:700;
}



@media (max-width: 768px){
    width:90%;
    text-align: center;
}


`


const SmallDiv = styled.div`
display:flex;

align-items:center;
justify-content:space-between;
width:10%;

@media (max-width: 768px){
    display:flex;
    align-items:center;
justify-content:space-between;
width:40%;
    
    
}



`
