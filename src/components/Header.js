import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Fade from 'react-reveal/Fade';


const Header = () => {
    return (
      


        <Container>
            <Fade top>

         
            <a>
                <img src={logo} alt="logo" />
            </a>
            </Fade>

            <Fade top>
            <Menu>
                <a href="#">about</a>
                <a href="#">skills</a>
                <a href="#">projects</a>
                <a href="#">designs</a>
                <a href="#">contact</a>
            </Menu>

            </Fade>

            <Fade top>
            <ButtonGroup>
                <LeftButton>
                    RESUME
                    <a href=""></a>

                </LeftButton>

            </ButtonGroup>

            </Fade>
        </Container>
       

    )
}

export default Header;








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
a{
    margin-top:10px;
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