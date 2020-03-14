import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom';
import {withAutorization} from './Autorization.js';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



class SignUp extends React.Component {
state={
  email:"",
  password: ""
  

}

handleInput=(event)=> {
  console.log(event.target.name, event.target.value);
  this.setState({[event.target.name]: event.target.value});
  
}

handleSubmit=(event)=>{
  event.preventDefault();
  
  this.props.tologin();
  this.props.history.push("/");
  
}

  render() {
    return (
      
      
      
      
<form onSubmit={this.handleSubmit}>

<h2> Page d'inscription  </h2>

  <TextField  required
          id="filled-required"
          label="Required"
          defaultValue="Email"
          variant="filled" type="text" name="email" placeholder="Email" onChange={this.handleInput}/>
  <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Password"
          variant="filled" type="text" name="password" placeholder="Password" onChange={this.handleInput}/>
  <Button  variant="contained" color="secondary" type="submit" name="email" >Je m'inscrit</Button>
     

</form>


     
     );
  }

}

export default withRouter (withAutorization(SignUp));
