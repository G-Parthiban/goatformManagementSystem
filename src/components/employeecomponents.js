import React, {Component} from 'react'
import {TextField,Paper, Button} from '@material-ui/core'

const axios = require('axios');

export default class EmployeeComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            goatfarm_name:'',
            goatfarm_capacity:'',
            goat_quantity:'',
            farm_area:'',
            variety:'',
            quantity:'',
            gender:'',
            dob:'',
            purchase_details:'',
            amount:'',
            purchase_date: '',
            purchase_viewdate: '',
            purchase_data:[],
            asset_data:[],
            view_ready: false
        }
    }
    gotohome = ()=>{
        let path = `./`;
        this.props.history.push(path);
      }
      gotoback = ()=>{
        let path = `/purchasedetailscomponent`;
        this.props.history.push(path);
      }

    handleOnChange = (event)=>{
        if(event.target.name === "purchase_viewdate"){
            this.setState({purchase_viewdate: event.target.value});
        }
        else if (event.target.name === "goatfarmname"){
            this.setState({goatfarm_name: event.target.value});
        }
        else if (event.target.name === "goatfarmcapacity"){
            this.setState({goatfarm_capacity: event.target.value});
        }
        else if (event.target.name === "goatquantity"){
            this.setState({goat_quantity: event.target.value});
        }
        else if (event.target.name === "variety"){
            this.setState({variety: event.target.value});
        }
        else if (event.target.name === "quantity"){
            this.setState({quantity: event.target.value});
        }
        else if (event.target.name === "gender"){
            this.setState({gender: event.target.value});
        }
        else if (event.target.name === "dob"){
            this.setState({dob: event.target.value});
        }
    }
    insertGoatFarm = ()=>{
        const url = "http://localhost:4000/fielddetails/create";
        axios.post(url,{
            goatfarm_name: this.state.goatfarm_name,
            goatfarm_capacity: this.state.goatfarm_capacity,
            goat_quantity: this.state.goat_quantity,
            farm_area:this.state.farm_area
        }).then(res=>{
            console.log(res)
            window.alert("Goat Farm details were Inserted Successfully.")
        }).catch(err=>{
            console.log(err)
            window.alert("Error in insertion")
        })
    }
    insertstock = ()=>{
        const url = "http://localhost:4000/stockentry/create";
        axios.post(url,{
            variety: this.state.variety,
            quantity: this.state.quantity,
            gender: this.state.gender,
            dob:this.state.dob
        }).then(res=>{
            console.log(res)
            window.alert("Stock entered Successfully.")
        }).catch(err=>{
            console.log(err)
        })
    }
    viewAssets = ()=>{
        const url = "http://localhost:4000/assets/"
        axios.get(url).then(res=>{
            console.log(res.data);
            this.setState({asset_data: res.data});
            this.setState({view_ready: true});
            console.log(this.state.asset_data);
        }).catch(err=>{
            console.log(err)
        })
    }

    getPurchaseDetails = ()=>{
        const URL = "http://localhost:4000/purchasedetails/purchaseDetailsForDate";
        axios.post(URL, { purchase_date: this.state.purchase_viewdate }).then(res => {
            console.log(res.data);
            this.setState({purchase_data: res.data})
            this.setState({view_ready: true})
        }).catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <div style={{height:60}}>
                <center><h1 style={{color:'blueviolet' ,fontWeight:'bolder'}}>GOAT FARM MANAGEMENT SYSTEM</h1></center>
                <Button  style={{float:"right"}} variant="contained" color="secondary" onClick = {this.gotohome} >
                    HOME
                </Button></div>
                <div><center>
                    
                    <Paper className="employeePaper" style={{width:300,height:400}}><center>
                    <div><h2>View Purchase Details</h2>
                    Purchased Date: <TextField id="outlined-basic"  variant="outlined" name="purchase_viewdate" type="date" onChange = {this.handleOnChange} />
                    <Button variant="contained" color="primary" onClick = {this.getPurchaseDetails} >
                            View Details
                    </Button>
                    <div>
                    {
                        this.state.view_ready ?
                            this.state.purchase_data.map((element, index) => {
                                return (
                                    <div id="displayPurchaseDetails">
                                        <div>
                                            Farm Name: {element.purchase_details}&nbsp;
                                        </div>
                                        <div>
                                            Goats: {element.amount}&nbsp;
                                        </div>
                                    </div>
                                )
                            }) : ''
                    }
                    </div>
                </div></center>
                
                    </Paper >

                    </center>
                    <div>
                    <Paper className="employeePaper" style={{width:300,height:400}} ><center>
                    <div><h2>View Investments Details</h2>
                    <Button variant="contained" color="primary" onClick = {this.viewAssets} >
                        View Amounts
                    </Button>
                </div>
                    <div>
                    {
                        this.state.view_ready ?
                            this.state.asset_data.map((element, index) => {
                                return (
                                    <div id="displayInvest">
                                        
                                        <div>
                                            Amount: {element.amount}&nbsp;
                                        </div>
                                        
                                    </div>
                                )
                            }) : ''
                    }
                    </div></center>
                    </Paper>
                </div>
                    <Paper className="employeePaper" style={{width:300,height:400}}><center>
                    <div>
                    <h2>Enter Goat Farm Details</h2>
                    <div><TextField id="outlined-basic" label="Farm Name" variant="outlined" name="goatfarmname" onChange = {this.handleOnChange} />
                    </div><div><TextField id="outlined-basic" label="Farm capacity"  variant="outlined" name="goatfarmcapacity" onChange = {this.handleOnChange} />
                    </div>
                    <div><TextField id="outlined-basic" label="Goat Quantity"  variant="outlined" name="goatquantity" onChange = {this.handleOnChange} />
                    </div><div><TextField id="outlined-basic" label="Farm area"  variant="outlined" name="farmarea"  onChange = {this.handleOnChange} />
                    </div><div><Button variant="contained" color="primary" onClick = {this.insertGoatFarm} >
                        Enter
                    </Button></div>
                </div></center>
                    </Paper >
                    <Paper className="employeePaper" style={{width:300,height:400}}><center>
                    <div>
                    <h2>Stock Entry</h2>
                    <div><TextField id="outlined-basic" label="Variety" variant="outlined" name="variety" onChange = {this.handleOnChange} />
                    </div><div><TextField id="outlined-basic" label="gender"  variant="outlined" name="gender" onChange = {this.handleOnChange} />
                    </div>
                    <div><TextField id="outlined-basic" label="Quantity"  variant="outlined" name="quantity" onChange = {this.handleOnChange} />
                    </div><div>Entry Date:<TextField id="outlined-basic"   variant="outlined" name="dob" type="date" onChange = {this.handleOnChange} />
                    </div><div><Button variant="contained" color="primary" onClick = {this.insertstock} >
                        Enter Stock
                    </Button></div>
                </div></center>
                    </Paper>
                </div>
            </div>
        )
    }
}