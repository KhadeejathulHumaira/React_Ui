import React from 'react'
import Header from './Header'
import styled from 'styled-components'

function Task() {
    return (
        <Container>
            <Header/>
            <Bottom>
                It is Task page
            </Bottom>
        </Container>
    )
}

export default Task

const Container=styled.div`
     
`
const Bottom =styled.div`
        width:100%;
        height:100vh;
        background:#da63ff36;
        display:flex;
        justify-content:center;
        align-items:center;

`
