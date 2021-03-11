import React, { Component } from 'react'
import styled from 'styled-components'
import sign from '../Uiassets/signup.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useState} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'


function SignUp () {

    const history=useHistory()
    const [details, setDetails] = useState({
        name:' ',
        description:' ',
        email:' ',
        password:' ',
        r_password: ' '

    });


   const handleChange=(e)=>{
       setDetails( {
           ...details,
           [e.target.name]:e.target.value} )
    }


    const handleSubmit=(e)=>{
            
        
                if (details.description==="Artist"||details.description==="Lead"||details.description==="Supervisor"||
                      details.description==="It"||details.description==="It-Extended"||details.description==="Dev"||
                      details.description==="Dev-Extended")
                      { 
                        alert("Successfully Submitted");
                        axios.post('http://localhost:3004/privileges',{details})
                        .then(res=>{
                            console.log(res.data)
                        })
                    }
                    else{
                        alert("Select any one")
                    }
                e.preventDefault()
               
    }
 
    const re_direct=()=>{
        history.push("/auth/login")
    }
        return (
            <Container>
                <Border>
                    <MainContainer>
                        <div>
                        <a href="#"onClick={re_direct}><ArrowBackIcon/></a>
                        <img src={sign}></img>
                        </div>
                        <RightContent>
                            <h2>Sign Up</h2>
                            <form onSubmit={handleSubmit} >
                            <InputField>
                                <p>
                                    Full Name
                                </p>
                            <Input>
                                <input type="text" name="name" onChange={handleChange} required></input>
                            </Input>
                            </InputField>
                            <InputField>
                            <p>
                                Description
                            </p>
                            <Input>
                                <input type="text" list="description" name="description" onChange={handleChange}></input>
                                <datalist id="description">
                                <option>Artist</option>
                                <option>Lead</option>
                                <option>Supervisor</option>
                                <option>It</option>
                                <option>It_Extended</option>
                                <option>Dev</option>
                                <option>Dev_Extended</option>
                                </datalist>    
                            </Input>
                            </InputField>
                            <InputField>
                            <p>
                                Email
                            </p>
                            <Input>
                                <input type="email" name="email" onChange={handleChange} required ></input>
                            </Input>
                            </InputField>
                            <InputField>
                            <p>
                                Password
                            </p>
                            <Input>
                                <input type="password" name="password" onChange={handleChange} required></input>
                            </Input>
                            </InputField>
                            <InputField>
                            <p>
                                Repeat Password
                            </p>
                            <Input>
                                <input type="password" name="r_password" onChange={handleChange} required></input>
                            </Input>
                            </InputField>
                            <SubmitButton>
                                <button >
                                    Submit
                                </button>
                            </SubmitButton>
                            </form>
                        </RightContent>

                    </MainContainer>
                </Border>
            </Container>
        )
    }


export default SignUp

//=========================================================================CSS=================================================================================


const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#fcfcfc;
    a{
        text-decoration:none;
        color:#730e92;
    }
    a:active{
        color:#da63ff;
    }

`
const Border=styled.div`
        padding:20px;
        background:#da63ff;
        border-radius:14px;
`

const MainContainer=styled.div`
    width:700px;
    height:500px;
    display:grid;
    grid-template-columns:50% 50%;
    grid-gap:10px;
    background-color:#ffffff;
    padding:50px;
    border-radius:14px;
    img{
        width:100%;
        height:100%;
    }
  
`
const RightContent=styled.div`
    width:95%;
    height:100%;
    display:block;
    padding-left:25px;
    border-radius:10px;
    box-shadow:0 1px 3px rgb(0 0 0/12%),0 1px 2px rgb(0 0 0/24%);
    h2{
        margin:30px 0 0 0;
    }
`

const InputField=styled.div`
    padding-top:10px;
    p{
        margin:0;
        font-weight:700;
        padding-bottom:5px;
    }

`
const Input=styled.div`
    width:90%;
    height:34px;
    box-shadow:inset 0 0 0 1px #da63ff; 
    display:flex;
    justify-content:left;
    border-radius:5px;
    padding-left:10px;
    input{
        border:none;
        background:transparent;
        font-size:14px;
    }
    input:focus{
        outline:none;
    }
    input::-webkit-calendar-picker-indicator {
        display: none;
    }
   
`

const SubmitButton = styled.div`
    width:90%;
    height:44px;
    box-shadow:inset 0 0 0 1px #da63ff;
    background:#da63ff;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    border-radius:5px;
    margin-top:10px;
    button{
        width:100%;
        border:none;
        background-color:transparent;
        font-weight:600;
        color:white;
        cursor:pointer;
    }
    button:focus{
        outline:none;
    }
    :active{
        transform: translateY(4px);
    }



`