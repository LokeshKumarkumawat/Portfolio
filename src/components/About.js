import React from 'react'
import styled from 'styled-components'

import Backend from '../assets/backend.svg'
import Design from '../assets/design.svg'
import Frontend from '../assets/frontend.svg'
import Fade from 'react-reveal/Fade';




const About = () => {


    return (
        <Fade left>
        <Wrap>
           
            <ItemText>
                <h3>About Me</h3>
                <br />
                <p>Hello! My name is Lokesh and I am pursuing B.tech in Computer Science engineering from Government Engineering College, Bharatpur (RTU) . I am a mern-stack developer. My interest in web development,app development and Machine Learning.</p>
                <br />
                <br />

            </ItemText>

            <SmallDiv>
                <Child>
                    <img src={Frontend} alt="" />
                    <h3>Frontend</h3>
                    <p>Convert a user-friendly UI wireframes into structured code.</p>

                </Child>

                <Child>
                    <img src={Backend} alt="" />
                    <h3>Backend</h3>
                    <p>Develop a backend application to deliver the solution.</p>
                </Child>

                <Child>
                    <img src={Design} alt="" />
                    <h3>Design</h3>
                    <p>Design an interactive and user-friendly UI of the solution.</p>
                </Child>
            </SmallDiv>

      

        </Wrap>

        </Fade>

    )
}

export default About;





const Wrap = styled.div`
margin-top: 24vh;
display:flex;
flex-direction: column;
align-items:center;
overflow-x:hidden;
margin-bottom:70px;


@media (max-width: 768px){
    flex-direction: column;
    text-align: center;
    padding-top: 100px
    
   
}



`

const ItemText = styled.div`
text-align: center;
width:70%;

h3{
    font-size:40px;
    font-weight:700;
}
p{
    
    font-weight:0px;
    line-height:1.625;
}


@media (max-width: 768px){
    width:100%;
}


`


const SmallDiv = styled.div`
display:flex;

align-items:center;
justify-content:space-between;

@media (max-width: 768px){
    flex-direction: column;
    
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


