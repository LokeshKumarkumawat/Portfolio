import React from 'react'
import styled from 'styled-components';
import comming from '../assets/comming.svg'
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';






const Design = () => {
    return (

        // <Fade top>

        <Wrap>


            <ItemText>
                <h3>Designs</h3>
            </ItemText>


            <Container>
                <Child>
                    <img src={comming} alt="" />
                </Child>

                <Child>
                <img src={comming} alt="" />
                    
                </Child>

                <Child>
                <img src={comming} alt="" />

                </Child>

            </Container>
        </Wrap>

        // </Fade>


    )
}

export default Design;


const Container = styled.div`
display:flex;
overflow-x:hidden;
margin-bottom:70px;
justify-content:space-between;

@media (max-width: 768px){
    display:flex;
    flex-direction: column;

    text-align: center;
   
}



`

const Wrap = styled.div`
padding-top: 20vh;
display:flex;
flex-direction: column;
align-items:strach;
justify-content:space-between;



@media (max-width: 768px){
    flex-direction: column;
    text-align: center;
    padding-top: 50px
}


`
const ItemText = styled.div`
text-align: center;
flex-basis:100%;
margin-bottom: 50px;

h3{
    font-size:40px;
    font-weight:700;
}
p{
    font-size:20px;
    font-weight:0px;
    line-height:4vh;
}


@media (max-width: 768px){
    width:100%;
    margin-bottom: 10px;
}


`



const Child = styled.div`
display:flex;
align-items:left;
flex-direction: column;
width:33%;
background-color: #232323;
border-radius:4%;

img{
    

    
}




@media (max-width: 768px){
    width:100%;
    margin-top:40px;
    
}


`

