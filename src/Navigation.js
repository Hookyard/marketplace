import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {Link} from 'react-router-dom';
import {withAutorization} from './Autorization';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'initial'
    },
    link: {
        color: 'white'
    }, 
    icon : {
        marginRight: '.2em'
    }
});

class Navigation extends React.Component {
    
    constructor(props) {
        super(props);
    }


    tryLogout() {
        console.log("hello")
        if (this.props.isLogged) {
            this.props.toLogout();
        }
    }


    Button(classes) {
        if (this.props.isLogged) {
            return(
                  <IconButton className={classes.link}><PowerSettingsNewIcon/>
                  </IconButton>
            );
        } else {
            return(
               <Button className={classes.link}><AccountCircleIcon className={classes.icon}/>Connexion
               </Button>
            );
        }
    }

    render() {
        const { classes } = this.props;
        return(
        <header className={classes.root}>
            <AppBar position="static">
                    <Toolbar>
                       
                        <Typography variant="h6" className={classes.title}>
                            Marketplace
                        </Typography>
                        <Link to="/">
                            <Button className={classes.link}><HomeIcon className={classes.icon}/>Home</Button>
                        </Link>
                        <Link to="/panier">
                            <Button className={classes.link}><ShoppingCartIcon className={classes.icon}/>Panier</Button>
                        </Link>
                        <Link to="/signin">
                            {this.Button(classes)}
                        </Link>
                        
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}

export default withAutorization(withStyles(useStyles)(Navigation));