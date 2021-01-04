import React, {Component} from 'react'
import {TextField,Paper, Button} from '@material-ui/core'

const axios = require('axios');

export default class AssetsComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            goatfarm_name:'',
            amount:'',
            totalamount:'',
            date_of_invest:'',
            period_of_invest:'',
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
      addAmount= amount =>{
          this.setState({
              totalamount:[amount, ...this.state.totalamount]
          })
      }

    handleOnChange = (event)=>{
        if(event.target.name === "goatfarmname"){
            this.setState({goatfarm_name: event.target.value});
        }
        else if (event.target.name === "amount"){
            this.setState({amount: event.target.value});
        }
        else if (event.target.name === "dateofinvest"){
            this.setState({date_of_invest: event.target.value});
        }
        else if (event.target.name === "periodofinvest"){
            this.setState({period_of_invest: event.target.value});
        }
    }
    insertAsset = ()=>{
        const url = "http://localhost:4000/assets/create";
        axios.post(url,{
            goatfarm_name:this.state.goatfarm_name,
            amount:this.state.amount,
            date_of_invest:this.state.date_of_invest,
            period_of_invest:this.state.period_of_invest
        }).then(res=>{
            console.log(res)
            window.alert("Investment done Successfully :)")
        }).catch(err=>{
            console.log(err)
            window.alert("Investment failed!")
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
    viewtotal = ()=>{
        const url = "http://localhost:4000/assets/totalamount"
        axios.get(url).then(res=>{
            console.log(res.data);
            this.setState({totalamount: res.data});
            this.setState({view_ready: true});
            console.log(this.state.totalamount);
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <Button  style={{float:"left"}} variant="contained" color="secondary" onClick = {this.gotoback} >
                    Back
                </Button>
                <Button  style={{float:"right"}} variant="contained" color="secondary" onClick = {this.gotohome} >
                    HOME
                </Button>
                <div><center>
                    
                    <Paper style={{width:300,height:450}}>
                    <h2><strong>Investment Details</strong></h2>
                    <TextField id="outlined-basic" label="Goat farm Name" variant="outlined" name="goatfarmname" onChange = {this.handleOnChange} />
                    <TextField id="outlined-basic" label="Amount" variant="outlined" name="amount" onChange = {this.handleOnChange} />
                 <div>Date: <TextField id="outlined-basic"  variant="outlined" name="dateofinvest" type="date" onChange = {this.handleOnChange} /></div>
                    <TextField id="outlined-basic" label="Period" variant="outlined" name="periodofinvest" onChange = {this.handleOnChange} />
                    <div style={{color:"red"}}>*'Period' in terms of No.Of.Months</div>
                    <Button variant="contained" color="primary" onClick = {this.insertAsset} >
                        Do Invest
                    </Button>
                    
                    </Paper></center>
                </div><center>
               <div>
                    <Button variant="contained" color="primary" onClick = {this.viewAssets} >
                        View Amounts
                    </Button>
                    
                
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
                    </div>
                    
                    </div></center>
            </div>
        )
    }
}

