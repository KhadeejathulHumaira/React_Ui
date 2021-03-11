import React from 'react'
import styled from 'styled-components'
import Header from './Header'


function Show() {
    return (
        <Container>
            <Header/>
            <Bottom >
                <Left>
                Details of the task
                </Left>
                <Right>
                    <h2>Details</h2>
                </Right>
            </Bottom>
        </Container>
       
    )
}

export default Show


const Container=styled.div``

const Bottom=styled.div`
    width:100%;
    height:100vh;
    display:grid;
    grid-template-columns:50% 50%;
    background:#da63ff36;

`
const Left =styled.div`

    display:flex;
    justify-content:center;
    padding:100px;
`

const Right=styled.div`
    h2{
        display:flex;
        justify-content:center;
        }
    

    padding:100px;
   

`