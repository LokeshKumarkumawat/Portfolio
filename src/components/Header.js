import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo3.png'
import Fade from 'react-reveal/Fade';
import { TiThMenu } from 'react-icons/ti';
import { IconContext } from "react-icons";




const Header = () => {
    return (



        <Container>
            <Fade top>



                <img src={logo} alt="logo" />

            </Fade>

            <Fade top>
                <Menu>
                    <a href="#g">about</a>
                    <a href="#g">skills</a>
                    <a href="#g">projects</a>
                    <a href="#g">designs</a>
                    <a href="#g">contact</a>
                </Menu>

            </Fade>

            <Fade top>
                <ButtonGroup>
                    <LeftButton>
                        RESUME
                        <a href="g"></a>

                    </LeftButton>

                </ButtonGroup>



            </Fade>





            <IconContext.Provider value={{ color: "blue", size: "2em" }}>
                <Me>
                    <Fade top>
                        <TiThMenu />
                    </Fade>
                </Me>
            </IconContext.Provider>

        </Container>



    )
}

export default Header;



const Me = styled.div`

display:none;

@media (max-width: 768px){
    display:inline;




}




`




const Container = styled.div`
min-height:50px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
background: #232323;
padding: 0 15px;


top:0;
left:0;
right:0;

    img{
        width:60px;
        height:61px;
 
        padding:8px 5px;
    }



z-index:1;
`

const Menu = styled.div`
display:flex;

justify-content:center;
flex:1;
a{
    
    text-transform: uppercase;
    padding: 0 10px;
    margin-top: 0px;

    color:#FFFFFF;
    &:hover {
        color:#3B82F6;
      }
}
@media (max-width: 768px) {
    display:none;
}
`

const ButtonGroup = styled.div`
@media (max-width: 768px){
    display:none;
}

`
const LeftButton = styled.div`
background-color:#3B82F6;
height:40px;
width:150px;
color:#FFFFFF;
display:flex;
font-weight:bold;
justify-content:center;//content -center
align-items:center;//all center top  bottom right left
border-radius:5px;
text-transform:uppercase;
cursor:pointer;
margin:7px;

a{
    color:#FFFFFF;
    margin-top:0px;
}

&:hover {
    background-color:#673AB7;
  }


`