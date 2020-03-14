import React from 'react';
import Component from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import Navigation from './Navigation.js';
import SignIn from './Signin.js';
import SignUp from './Signup.js';
import Panier from './panier';
import {AutorizationProvider} from './Autorization.js';


class App extends React.Component{
  

  
  render(){
    
    return(
         <React.Fragment>
     
              <AutorizationProvider>
                   
                         <Navigation/>
                            <Switch>
                            
                               <Route exact path="/"> 
                                      <Home/>
                               </Route>
                               
                                  <Route path="/signin"> 
                                       <SignIn/>
                                  </Route>
              
                                  <Route path="/signup"> 
                                        <SignUp/>
                                  </Route>
                                    
                                  <Route path="/panier"> 
                                        <h2> Panier </h2>
                                  </Route>
               
             
                              </Switch>
                   
              </AutorizationProvider>
     
         </React.Fragment>
  
      )  
    
  }
  
}

export default App;
