import React, {Component} from 'react'
import {TextField, Button,Paper,Divider} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const axios = require('axios');

export default class PurchaseDetailsComponent extends Component{
   
    constructor(props){
        super(props)
        this.state = {
            purchase_details:'',
            amount:'',
            purchase_date: '',
            purchase_viewdate: '',
            purchase_data:[],
            view_ready: false
        }
    }
    
    gotohome = ()=>{
      let path = `./`;
      this.props.history.push(path);
    }
    goToInvestment = ()=>{
      let path = `./assetscomponent`;
      this.props.history.push(path);
    }
    
    handleOnChange = (event)=>{
        if(event.target.name === "purchasedetails"){
            this.setState({purchase_details: event.target.value});
        }
        else if (event.target.name === "amount"){
            this.setState({amount: event.target.value});
        }
        else if (event.target.name === "purchase_date") {
            this.setState({purchase_date: event.target.value});
        }
        else if (event.target.name === "purchase_viewdate") {
            this.setState({purchase_viewdate: event.target.value});
        }
    }
    insertPurchase = ()=>{
        const url = "http://localhost:4000/purchasedetails/create";
        axios.post(url,{
            purchase_details: this.state.purchase_details,
            amount: this.state.amount,
            purchase_date: this.state.purchase_date
        }).then(res=>{
            console.log(res)
            window.alert("Purchase Details were Inserted Successfully.")
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
              <div className="investStyle" ><center>
              <Button  variant="contained" color="secondary" onClick = {this.gotohome} >
                    HOME
                </Button></center>
                <div>
                  <Paper style={{width:180,height:200}}  elevation={1} >
                    <center>
                    <h2>Here To Invest $Money On Goat farm</h2>
                    <div><Button variant="contained" color="primary" onClick = {this.goToInvestment} >
                        Investment
                    </Button></div>
                    </center>
                  </Paper>
                </div>
                </div>
                <div  className="purchaseWallpaper">
              <Paper style={{width:350,height:550}}  elevation={1}>
                <center>
                
                  <div>
                    <h2>Enter Purchase Details</h2>
                    <div><TextField id="outlined-basic" label="Farm Name" variant="outlined" name="purchasedetails" onChange = {this.handleOnChange} />
                    </div><div><TextField id="outlined-basic" label="Goat Quantity"  variant="outlined" name="amount" onChange = {this.handleOnChange} />
                    </div><div>Purchase date:<TextField id="outlined-basic"   variant="outlined" name="purchase_date" type="date" onChange = {this.handleOnChange} />
                    </div><div><Button variant="contained" color="primary" onClick = {this.insertPurchase} >
                        Purchase
                    </Button></div>
                </div><Divider/>
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
                                            Goat Farm: {element.purchase_details}&nbsp;
                                        </div>
                                        <div>
                                            Amount: {element.amount}&nbsp;
                                        </div>
                                    </div>
                                )
                            }) : ''
                    }
                    </div>
                </div></center>
                </Paper >
                </div>
                
                <div>
                <Card  className="root">
      <CardHeader
        avatar={
          <Avatar className="avatar" aria-label="goatfarm" >
            ML
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Mane Livesstock Farming Pvt Ltd. ... "
        subheader="+(91) 1234567890 Pune"
      />
      <CardMedia
        className="media"
        image="https://ichef.bbci.co.uk/news/1024/cpsprodpb/C271/production/_98677794_gettyimages-486869012.jpg"
        title="Mane Livesstock Logo"
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
        This company has a wide range of products and services to cater to the varied requirements of their customers. 
        The staff at this establishment are courteous and prompt at providing any assistance.
        </Typography>
      </CardContent>
    </Card>
    <Card className="root">
      <CardHeader
        avatar={
          <Avatar aria-label="goatfarm" className="avatar">
            SA
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Salem Goat Farm "
        subheader="+(91) 0023432311  Tamil Nadu 636308"
      />
      <CardMedia
        className="media"
        image="https://ichef.bbci.co.uk/news/1024/cpsprodpb/C271/production/_98677794_gettyimages-486869012.jpg"
        title="Salem Goat"
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
        This company has a wide range of products and services to cater to the varied requirements of their customers. 
        The staff at this establishment are courteous and prompt at providing any assistance.
        </Typography>
      </CardContent>
    </Card>
    <Card className="root">
      <CardHeader
        avatar={
          <Avatar aria-label="goatfarm" className="avatar">
            SA
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Madurai Goat Farm "
        subheader="+(91) 0030003032  Tamil Nadu 636308"
      />
      <CardMedia
        className="media"
        image="https://ichef.bbci.co.uk/news/1024/cpsprodpb/C271/production/_98677794_gettyimages-486869012.jpg"
        title="Maduari Goat"
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
        This company has a wide range of products and services to cater to the varied requirements of their customers. 
        The staff at this establishment are courteous and prompt at providing any assistance.
        </Typography>
      </CardContent>
    </Card>
    <Card className="root">
      <CardHeader
        avatar={
          <Avatar aria-label="goatfarm" className="avatar">
            SA
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Sivakasi green Goat Farm "
        subheader="+(91) 0023432311  Tamil Nadu 636308"
      />
      <CardMedia
        className="media"
        image="https://ichef.bbci.co.uk/news/1024/cpsprodpb/C271/production/_98677794_gettyimages-486869012.jpg"
        title="sivakasi Goat"
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
        This company has a wide range of products and services to cater to the varied requirements of their customers. 
        The staff at this establishment are courteous and prompt at providing any assistance.
        </Typography>
      </CardContent>
    </Card>
                </div>
            </div>
        )
    }
}

