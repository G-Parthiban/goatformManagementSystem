import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import List from '@material-ui/core/List';
import {TextField,FormControlLabel,FormControl, Button, Paper,Radio,RadioGroup} from '@material-ui/core'

const axios = require('axios');

 class RegisterUserComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
      }  
    gotohome = ()=>{
        let path = `./`;
        this.props.history.push(path);
    }

    handleOnChange = (event)=>{
        if(event.target.name === "userrole"){
            this.setState({userrole: event.target.value});
        }
        else if(event.target.name === "customername"){
            this.setState({customername: event.target.value});
        }
        else if(event.target.name === "username"){
            this.setState({username: event.target.value});
        }
        else if (event.target.name === "password"){
            this.setState({password: event.target.value});
        }
        else if(event.target.name === "customercontact"){
            this.setState({customercontact: event.target.value});
        }
        else if(event.target.name === "customerarea"){
            this.setState({username: event.target.value});
        }
    }
    registerUser = ()=>{
        const url = "http://localhost:4000/logindetails/create";
        axios.post(url,{
            user_role:this.state.userrole,
            customer_name:this.state.customername,
            user_name:this.state.username,
            password:this.state.password,
            customer_contact:this.state.customercontact,
            customer_area:this.state.customerarea
        }).then(res=>{
            window.alert("Registered successfully:)")
            window.alert("Go Back Home and Login Again :)")
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <Button style={{float:"left"}}variant="contained" color="secondary" onClick = {this.gotohome} >
                    HOME
                </Button>
                <center>
                <h1 style={{color:'blueviolet' ,fontWeight:'bolder'}}>GOAT FARM MANAGEMENT SYSTEM</h1>
                <h2 style={{color:'blueviolet' ,fontWeight:'bolder'}}>New Account Details</h2>
                <Paper elevation={1} style={{width:350,height:450}}>
                <List>
                <strong>User Role:</strong>
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="role" name="userrole"  onChange={this.handleOnChange}>
                            <FormControlLabel value="employee" control={<Radio />} label="Employee" />
                            <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                            </RadioGroup>
                            </FormControl>
                <TextField id="outlined-basic" label="Name" variant="outlined" name="customername" onChange = {this.handleOnChange} />
                <TextField id="outlined-basic" label="Username" variant="outlined" name="username" onChange = {this.handleOnChange} />
                <TextField id="outlined-basic" label="Password" variant="outlined" name="password" type="password" onChange = {this.handleOnChange} />
                <TextField id="outlined-basic" label="Contact" variant="outlined" name="customercontact" onChange = {this.handleOnChange} />
                <TextField id="outlined-basic" label="Area" variant="outlined" name="customerarea" onChange = {this.handleOnChange} />
                <div><Button variant="contained" color="primary" onClick = {this.registerUser} >
                    New User
                </Button>
                </div></List>
                </Paper></center>
                
            </div>
        )
    }
}
export default withRouter(RegisterUserComponent);
