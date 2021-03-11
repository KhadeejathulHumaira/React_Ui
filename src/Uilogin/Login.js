import React, { Component } from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Loginpage from '../Uicomponents/Loginpage'
import SignUp from '../Uicomponents/SignUp'
import Show from '../Uicomponents/Show'
import Auth from '../Uicomponents/Auth'
import Service from '../Uicomponents/Service'
import Task from '../Uicomponents/Task'



function Login (){
 
  
        return (
            <Router>
                <Container>
                <Switch>
                <Route path="/home"></Route>
                <Route path="/auth/login" component={Loginpage}/>
               
                <Route path="/auth/signup" component={SignUp}/>
          
                <Route path="/show" exact component={Show}/>
                <Route path="/show/task" component={Task}/>
                <Route path="/auth" component={Auth}/>
                <Route path="/service" component={Service}/>
                
                </Switch>
                </Container>
           </Router>
        )
    
}

export default Login

const Container =styled.div`


`


