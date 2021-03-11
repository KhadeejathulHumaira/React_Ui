import React from 'react'
import Header from './Header'
import styled from 'styled-components'

function Auth() {
    return (
        <Container>
            <Header/>
            <Bottom>
                It is auth page
            </Bottom>
        </Container>
    )
}

export default Auth

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
