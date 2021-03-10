import React from 'react'
import styled from 'styled-components'
import login from '../Uiassets/login.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';


function Loginpage() {
    const history=useHistory()
    const[user,setUser]=useState({
        email:' ',
        password:' '
    })
    const[db_details,setDbdetails]=useState({})
    
    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const get_User=()=>{
        axios.get(`http://localhost:3001/privileges?details.email=${user.email}&details.password=${user.password}`)
        .then(res=>{
            setDbdetails(res.data)
        })
    }
    useEffect(()=>{
        get_User()
    })

    const checkUser=()=>{
        db_details.map(item=>{
            if(item.details.description==="Artist"){
                   history.push("/auth/login")
                   console.log("Hello Artist")
            }
            else if(item.details.description==="Supervisor"){
                
                   console.log("Hey Supervisor")
            }
            else if(item.details.description==="It"){
               console.log("Hey It")
           }
           else if(item.details.description==="Lead"){
               console.log("Hey Lead")
           }
           else if(item.details.description==="It_Extended"){
               console.log("Hey It_Extended")
           }
           else if(item.details.description==="Dev"){
               console.log("Hey Dev")
           }
           else if(item.details.description==="Dev_Extended"){
               console.log("Hey Dev_Extended")
           }
           else{
               console.log("sorry")
           }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
                if (db_details.length===0){
                    alert("User Not Found")
                 }
                 else{
                 
                     alert("Logged IN")
                    checkUser()
                 } 
            }
         
        const re_direct=()=>{
            history.push("/auth/signup")
        }
   

    return (
        <Container>
            <Border>
           <MainContainer>
                <LeftContent>
                    <form onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    <p>Doesn't have an account yet? <a href="#" onClick={re_direct}><strong>Signup</strong></a> </p>
                    <TopInput>
                        <p>Email Address</p>
                        <Input>
                        <input type="text" placeholder="yourmail@gmail.com" name="email" onChange={handleChange} required></input>
                        </Input>
                    </TopInput>
                    <BottomInput>
                        <Bottomrow>
                        <p>Password</p>
                        <p><a href="#">Forget password?</a></p>
                        </Bottomrow>
                        <Input>
                        <input type="password" name="password" onChange={handleChange} required></input>
                        </Input>
                    </BottomInput>
                    <Remember>
                        <input type="checkbox"></input>
                        <p>Remember Me</p>
                    </Remember>
                    <LoginButton>
                        <button > LOGIN</button>
                    </LoginButton>
                    </form>
                    <HorizontalLine>
                        <p>Or Login With</p>
                    </HorizontalLine>
                    <OtherLogins>
                        <Facebook>
                            <FacebookIcon/>
                        </Facebook>
                        Facebook
                    </OtherLogins>
                </LeftContent>
                <img src={login}></img>
           </MainContainer>
            </Border>
        </Container>
    )
}

export default Loginpage

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

const LeftContent=styled.div`
        width:95%;
        height:100%;
        display:block;
        padding-left:25px;
        border-radius:10px;
        box-shadow:0 1px 3px rgb(0 0 0/12%),0 1px 2px rgb(0 0 0/24%);
        h2{
            margin:40px 0 0 0;
        }
        p{
            margin :0;
        }
      
`
const Border=styled.div`
       
        background-color:#da63ff;
        padding:20px;
        border-radius:14px;
`
const TopInput=styled.div`
        display:block;
        font-weight:700;
        padding-top:15px;
        padding-bottom:15px;
        p{
            padding-bottom:5px;
        }
       

`
const Input=styled.div`
    width:90%;
    height:44px;
    box-shadow:inset 0 0 0 1px #da63ff;
    display:flex;
    justify-content:left;
    align-items:center;
    border-radius:5px;

    input{
        font-size:15px;
        background-color:transparent;
        border:none;
        padding-left:10px;
        padding-right:8px;
        color:black;
        padding-top:4px;
        padding-bottom:4px;
    }
    input:focus{
        outline:none;
    }
`

const BottomInput=styled.div`
    font-weight:700;
    padding-bottom:10px;
    p{
        padding-bottom:5px;
    }
`

const Bottomrow=styled.div`
    display:flex;
    justify-content:space-between;
    padding-right:40px;
`

const Remember=styled.div`
    padding:10px 0;
    display:flex;
    align-items:center;
    p{
        padding-left:7px;
        color:	#808080;
    }
    
`
const LoginButton=styled.div`
    width:90%;
    height:44px;
    box-shadow:inset 0 0 0 1px #da63ff;
    background:#da63ff;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    border-radius:5px;
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

const HorizontalLine=styled.div`

    margin-top:10px;
    color:#808080;
    p{
        display:flex;
        flex-direction:row;
    
    }
    p:before{
        content:" ";
        flex:1 1;
        border:1px solid #808080;
        margin:auto;
    
    }
    p:after{
        content:" ";
        flex:1 1;
        border:1px solid #808080;
        margin:auto;
        margin-right:35px;
    }
`

const OtherLogins=styled.div`
    width:90%;
    height:44px;
    box-shadow:inset 0 0 0 1px #da63ff;
    border-radius:5px;
    margin-top:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#da63ff;
    font-weight:700;
    :active{
        transform: translateY(4px);
    }


`
const Facebook=styled.div`
    color:#da63ff;
    padding-right:10px;

`