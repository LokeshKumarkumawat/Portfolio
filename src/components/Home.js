import React from 'react'
import styled from 'styled-components'

// import homeImg from '../assets/rightimg.svg'
import homeImg from '../assets/hh.png'
import linkedIn from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import Typewriter from "typewriter-effect";
import Fade from 'react-reveal/Fade';



const Home = () => {

    return (
            <Wrap>
                <ItemText>

                    <h1>Hey, I'm Lokesh</h1>
                    <br />

                    <h3>I speak&nbsp;</h3>

                    <h3 style={{ color: '#3B82F6' }}>  <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                " Javascript",
                                " Node.js",
                                " MongoDB",
                                " React.js",
                            ]
                        }}
                    />  </h3>


                    <br />
                    <br />





                    <p>I'm a self-taught MERN Stack Developer who specializes in
                        building exceptional web applications. Currently,
                        I'm focussing on building
                        user-friendly products and Crypto Blockchain technology.</p>
                    <br />
                    <br />

                    <Fade right>

                    <ButtonGroup>
                        <LeftButton>
                            linkedIn
                            <img src={linkedIn} alt="linkedIn" />
                        </LeftButton>
                        <RightButton>
                            RESUME
                            <img src={github} alt="linkedIn" />
                        </RightButton>
                    </ButtonGroup>

        </Fade>



                </ItemText>

                <Sp>

                </Sp>
             
                    <Sideimage>
                        <img src={homeImg} alt="" />
                    </Sideimage>



            </Wrap>


    )
}

export default Home



const Sp = styled.div`
flex:0.5;

`

const Wrap = styled.div`
padding-top: 24vh;
overflow-x:hidden;
display:flex;
align-items: center;


@media (max-width: 768px){
    flex-direction: column;
    text-align: center;
    padding-top: 70px
}



`

const ItemText = styled.div`
flex:1;


align-items: center;
h1{
    font-size:50px;
    font-weight:700;
    margin-top:3px;
}
h3{
    font-size:40px;
    font-weight:700;
}
p{
    
    font-weight:20px;
    line-height:1.625;
}

h3{
    display: inline-block;
}

@media (max-width: 768px){
    h3{
        display: inline;
    }
    p{
    margin-top:-35px;

    }
}


`


const ButtonGroup = styled.div`
display:flex;
align-items: center;
justify-content:flex-start;



@media (max-width: 768px){
    flex-direction:column;
    width:100%;
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

@media (max-width: 768px){
    margin-bottom:20px;
    width:100%;
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

    margin-right:0px;
    justify-content:flex-start;
    height:343px;
    width:400px;
    background-color: #232323;
    border-radius:50%;
}

@media (max-width: 768px){
    padding-top:30px;
    img{
        border-radius:70%;
        width:100%;
    }
  

`
