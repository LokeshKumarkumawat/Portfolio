

import React from 'react'
import styled from 'styled-components'




import Html from '../assets/frame/icons8-html-5.svg'
import Css from '../assets/frame/icons8-css3.svg'

import ReactSvg from '../assets/react.svg'
import NodeSvg from '../assets/node.svg'
import ExSvg from '../assets/express.svg'


import Mongo1 from '../assets/mogo.svg'
import Mysql from '../assets/mysql.svg'
import Ang from '../assets/ang.svg'





const LibrariesFrameworks = () => {
    return (
        // <Fade top>
            <Wrap>

                <ItemText>
                    <h3>Libraries / Frameworks</h3>
                </ItemText>




                <Lang>
                    <Child>
                        <img src={Html} alt="" />
                        <img src={Css} alt="" />
                    </Child>

                    <Child>
                        <img src={ReactSvg} alt="" />
                        <img src={Ang} alt="" />
                    </Child>

                    <Child>
                        <img src={NodeSvg} alt="" />
                        <img src={ExSvg} alt="" />
                    </Child>

                    <Child>
                        <img src={Mongo1} alt="" />
                        <img src={Mysql} alt="" />
                    </Child>
                </Lang>


            </Wrap>

        // </Fade>

    )
}

export default LibrariesFrameworks;





const Wrap = styled.div`
padding-top: 5vh;
display:flex;
flex-direction: column;
overflow-x:hidden;
margin-bottom:70px;
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


const Lang = styled.div`
display:flex;
align-items:center;
justify-content:space-between;




@media (max-width: 768px){
    flex-direction: column;
    
}



`
const Child = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-basis:24%;
background-color: #232323;

padding:10px 25px;
border-radius:8%;

img{
    padding:10px;
    
}


@media (max-width: 768px){
    width:100%;
    margin-top:40px;
    
}


`









