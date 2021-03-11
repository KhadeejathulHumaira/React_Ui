import React from 'react'
import Header from './Header'
import styled from 'styled-components'

function Service() {
    return (
        <Container>
            <Header/>
            <Bottom>
                It is service page
            </Bottom>
        </Container>
    )
}

export default Service

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