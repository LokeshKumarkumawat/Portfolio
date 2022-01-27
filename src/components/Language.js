import React from 'react'
import styled from 'styled-components'


import Javascript from '../assets/icons8-javascript.svg'
import Java from '../assets/icons8-java.svg'
import Dart from '../assets/icons8-dart.svg'
import Python from '../assets/icons8-python.svg'






const Language = () => {
    return (
        // <Fade top>
            <Wrap>

                <ItemText>
                    <h3>Languages</h3>
                </ItemText>


                <Lang>
                    <Child>
                        <img src={Javascript} alt="" />
                        <h2>Javascript</h2>
                    </Child>

                    <Child>
                        <img src={Java} alt="" />
                        <h2>Java</h2>
                    </Child>

                    <Child>
                        <img src={Dart} alt="" />
                        <h2>Dart</h2>
                    </Child>

                    <Child>
                        <img src={Python} alt="" />
                        <h2>Python</h2>
                    </Child>
                </Lang>


            </Wrap>

        // </Fade>

    )
}

export default Language;





const Wrap = styled.div`
padding-top: 20vh;
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
    
}
h2{
    padding:5px;
    line-height:9vh;
    text-align: center;
    flex:2;

}


@media (max-width: 768px){
    width:100%;
    margin-top:40px;
    
}


`


