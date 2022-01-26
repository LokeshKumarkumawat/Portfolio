import React from 'react'
import styled from 'styled-components';
import github from '../assets/github.svg'
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import Profile from '../assets/pppp2.png'
import Tesla from '../assets/tesla1.png'
import Facebook from '../assets/facebook.png'
import Fade from 'react-reveal/Fade';
import { IconContext } from "react-icons";







const Projects = () => {
    return (

        // <Fade top>

        <Wrap>



            <ItemText>
                <h3>Project</h3>
            </ItemText>








            <Container>

                <Child>

                    <img src={Profile} alt="" />
                    <p1>React | Figma</p1>
                    <h3>My Portfolio</h3>
                    <p>Portfolio built with the React.js. Created the UI wireframes in Figma and implemented the responsive design. Built custom & reusable components for elements like navbar and footer. Used styled-components for implementing a mobile-first responsive UI for the entire app.</p>
                    <Link>
                        <IconContext.Provider value={{ color: "blue", size: "1.3em" }}>

                            <a href="">< CgWebsite /></a>
                            <man> <HiOutlineDotsVertical /> </man>

                            <a href="">< BsGithub /></a>
                        </IconContext.Provider>
                    </Link>

                </Child>





                <Child>

                    <img src={Tesla} alt="" />
                    <p1>React | Figma</p1>
                    <h3>Tesla</h3>
                    <p>Tesla clone built with the React.js. Created the UI wireframes in Figma and implemented the responsive design. Built custom & reusable components for elements like navbar and footer. Used styled-components for implementing a mobile-first responsive UI for the entire app.</p>
                    <Link>
                        <IconContext.Provider value={{ color: "blue", size: "1.3em" }}>
                            <a href="">< CgWebsite /></a>
                            <man> <HiOutlineDotsVertical /> </man>

                            <a href="">< BsGithub /></a>
                        </IconContext.Provider>
                    </Link>

                </Child>

                <Child>

                    <img src={Facebook} alt="" />
                    <p1>React.js | Node.js | MongoDB | Express  </p1>
                    <h3>Facebook clone</h3>
                    <p>Facebook clone built with the MERN stack. Implemented google auth using express and bcrypt for password encryption. Created a global predictable state container for the frontend using ReduxJS. Created the UI wireframes in Figma and implemented the responsive design. Designed schema for no-SQL DB (mongodb) using the mongoose.</p>
                    <Link>

                        <IconContext.Provider value={{ color: "blue", size: "1.3em" }}>

                            <a href="">< CgWebsite /></a>
                            <man> <HiOutlineDotsVertical /> </man>

                            <a href="">< BsGithub /></a>

                        </IconContext.Provider>

                    </Link>

                </Child>


            </Container>

        </Wrap>
        // </Fade>
    )
}

export default Projects;


const Container = styled.div`
display:flex;
overflow-x:hidden;
margin-bottom:70px;
justify-content:space-between;



@media (max-width: 768px){
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
width:32%;
background-color: #232323;



padding:10px 10px;
border-radius:4%;

h3{
    color:rgba(59, 130, 246);
    align-items:left;
}



p1{

    
    background: rgba(255, 255, 255, 0.3);
    color: #FFFFFF;
    width:100%;
    margin-top:6px;
    padding:5px 9px;
    border-radius:4px;
    text-align: left;
    margin:20px 0;
    line-height:2vh;
}

img{
   
    width:100%;
    height:170px;
    
}

p{
    margin-top:10px;
    
    font-weight:0px;
    line-height:1.625;
}



@media (max-width: 768px){
    width:100%;
    margin-top:40px;

    p{
        text-align:left;
    }
    
    h3{
        text-align:left;
    }
}


`


const Link = styled.div`
text-align:right;

a{

   

}



margin:10px 8px;





`

const Buttonleft = styled.div`

`

