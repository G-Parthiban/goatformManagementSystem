import React, {Component} from 'react'
import {Button} from '@material-ui/core'
import { withRouter} from 'react-router-dom'
import '../App.css';
import borg from '../images/BORG.jpg';
import goatlogo from '../images/goatlogo.jpg'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from "@material-ui/core/Paper"
import ListItemText from '@material-ui/core/ListItemText';

class HomePageComponent extends Component{
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
      }    
      
    loginuser = ()=>{
 
        let path = `./loginusercomponent`;
    this.props.history.push(path);
    }
    registerUser = ()=>{
        let path = `./registerusercomponent`;
        this.props.history.push(path);
    }
    
    render(){
        return(
        
            <div className="homepage-container">
                 
                <Button style={{float: 'right'}} variant="contained" color="primary" onClick = {this.registerUser} >
                    SIGN UP
                </Button>
                <Button  style={{float: 'right'}} variant="contained" color="secondary"  onClick = {this.loginuser} >
                    LOGIN
                </Button>
                <div className="Title">
                <img src={goatlogo} alt="goat face" width="75" height="55" style={{borderStyle:'dotted'}} />
                    <div><h1>  GOAT FARM MANAGEMENT SYSTEM</h1></div>
                    
                </div>
                <h2 className='heading' style={{ color: 'red',backgroundColor:'silver' }}>What is GOAT forming??</h2>
                <h3 className='text1' style={{backgroundColor:"whitesmoke"}}>Goat farming involves the raising 
                and breeding of domestic goats (Capra aegagrus hircus) as a branch of animal husbandry. 
                People farm goats principally for their meat, milk, fibre and skins. 
                    Goat farming can be very suited to production alongside other livestock (such as sheep and cattle)
                     on low-quality grazing land.</h3>
                <div className="borg">
                    <img src={borg} className="center" width="80" height="40" alt="borg"/>
                </div>
                <div style={{margin:"auto",width:400}}>
                <h2 className='heading' style={{ color: 'red',backgroundColor:'silver' }}>Common Benefits</h2>
                <Paper className="paper" elevation={1}>
                <List component="nav" className="listItems" aria-label="contacts">
                    <ListItem button>
                        <ListItemText primary="1. Produce Milk..." />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="2. Produce Soap..." />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="3.Produce fibre..." />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="4. Raise your own meat..." />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="5. Use them as pack Animals" />
                    </ListItem>
                </List>
                </Paper>
                </div>
            </div>
        );
    }
    
};
export default withRouter(HomePageComponent);