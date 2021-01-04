import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import List from '@material-ui/core/List';
import {TextField,FormControlLabel,FormControl, Button, Paper,Radio,RadioGroup} from '@material-ui/core'
const axios = require('axios');

class LoginUserComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
        this.callLoginApi = this.callLoginApi.bind(this)
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
        else if(event.target.name === "username"){
            this.setState({username: event.target.value});
        }
        else if (event.target.name === "password"){
            this.setState({password: event.target.value});
        }
    }

    callLoginApi(event) {
        const url = "http://localhost:4000/auth/authenticate"
        const loginDetails = {
            user_role:this.state.userrole,
            user_name: this.state.username,
            password: this.state.password
        }
    if(this.state.userrole==="customer"){
        axios.post(url, loginDetails).then(res => {
            if (res.data.success) {
                const token = res.data.token
                localStorage.setItem('token', token)
                let path = `/purchasedetailscomponent`;
                this.props.history.push(path);
            }
            else{
                window.alert("Invalid credential!!")
            }
        }).catch(err => {
            console.log(err)
        })
    }
    else if(this.state.userrole==="employee"){
        axios.post(url, loginDetails).then(res => {
            if (res.data.success) {
                const token = res.data.token
                localStorage.setItem('token', token)
                let path = `/employeecomponents`;
                this.props.history.push(path);
            }
            else{
                window.alert("Invalid credential!!")
            }
        }).catch(err => {
    
            console.log(err)
        })
    }
    }
    render(){
        return(
            
            <div><center><h1 style={{color:'blueviolet' ,fontWeight:'bolder'}}>GOAT FARM MANAGEMENT SYSTEM</h1>
                <Paper elevation={1} style={{width:450,height:350}}>
                    <List>
                        
                            <h3 style={{color:'royalblue'}}>Login Credential</h3>
                            <strong>User Role:</strong>
                            <FormControl component="fieldset">
                            <RadioGroup aria-label="role" name="userrole"  onChange={this.handleOnChange}>
                            <FormControlLabel value="employee" control={<Radio />} label="Employee" />
                            <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                            </RadioGroup>
                            </FormControl>
                            <div>
                            <TextField id="outlined-basic" label="Username" variant="outlined" name="username" onChange = {this.handleOnChange} />
                            </div>
                            <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined" name="password" type="password" onChange = {this.handleOnChange} />
                            </div>
                            <div>
                            <Button variant="contained" color="primary" onClick = {this.callLoginApi} >
                                Login
                            </Button>
                            </div>
                    </List>
                    <Button variant="contained" color="secondary" onClick = {this.gotohome} >
                    Back
                </Button>
                </Paper>
                </center>
            </div>
            
        )
    }
}
export default withRouter(LoginUserComponent);
