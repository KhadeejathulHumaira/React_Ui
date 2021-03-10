import React, { Component } from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Loginpage from '../Uicomponents/Loginpage'
import SignUp from '../Uicomponents/SignUp'


function Login (){
 
  
        return (
            <Router>
                <Container>
                <Switch>
                <Route path="/home"></Route>
                <Route path="/auth/login" component={Loginpage}>
                </Route>  
                <Route path="/auth/signup" component={SignUp}>
                </Route>
                
                </Switch>
                </Container>
           </Router>
        )
    
}

export default Login

const Container =styled.div`


`



