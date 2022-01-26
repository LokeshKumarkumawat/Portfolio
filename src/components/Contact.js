import React from 'react'
import styled from 'styled-components'

import Backend from '../assets/backend.svg'
import Design from '../assets/design.svg'
import Frontend from '../assets/frontend.svg'
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import Fade from 'react-reveal/Fade';




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
                <a href=""> <SiLinkedin /></a>
                <a href=""> <SiGithub /></a>
                <a href=""> <SiInstagram /></a>
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
margin-bottom:10px;


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

const Child = styled.div`
width:30%;
background-color: #232323;
text-align: center;
padding:30px 20px;
border-radius:4%;

h3{
    padding:10px;

}

p{
    line-height:4vh;
}

@media (max-width: 768px){
    width:100%;
    margin-top:40px;
    
}


`

const ButtonGroup = styled.div`
display:flex;
align-items: center;
justify-content:flex-start;



@media (max-width: 768px){
    flex-direction:column;
}

`
const LeftButton = styled.div`
background-color:#303030;

height:43px;
width:220px;
color:#FFFFFF;
display:flex;
font-weight:bold;
justify-content:center;//content -center
align-items:center;//all center top  bottom right left
border-radius:5px;
text-transform:uppercase;
cursor:pointer;
margin:6px;
opacity:0.65;
&:hover {
    background-color:#161616;
  }

img{
    margin-left:15px;
}  

`

const RightButton = styled(LeftButton)`
background-color:white;
opacity:0.65;
color: black;
&:hover {
    background-color:#27535D;
    opacity:0.55;
  }


`





const Sideimage = styled.div`
flex:1;
display:flex;
flex-direction:column;



img{
    border-radius:50%;
    margin-right:0px;
    justify-content:flex-start;
    
}

@media (max-width: 768px){
    padding-top:30px;
    img{
        border-radius:20%;
        
    }
}

`


