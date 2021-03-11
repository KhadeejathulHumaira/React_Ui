
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'



 function Header() {
    return (
        <Container>
            <Left>
               <strong>React UI</strong>
            </Left>
            <Right>
                <Link to="/home" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                <Link to="auth/login" style={{ textDecoration: 'none' }}><li>Login</li></Link>
                <Link to="/auth/signup" style={{ textDecoration: 'none' }}><li>Signup</li></Link>
                
            </Right>
        </Container>
    )
}
export default Header



const Container=styled.div`
    width:100%;
    height:64px;
    display:grid;
    grid-template-columns:50% 50%;
    background:#da63ff;
    color:black;

`

const Left=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding-right:450px;
    font-size:20px;
    color:black;
`

const Right=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    list-style-type:none;
    padding-left:400px;
    li{
        padding:10px;
        font-weight:700;
        cursor:pointer;
       
        :hover{
            background:#6d2683;
            color:white;
        }
    }
   
    
`
