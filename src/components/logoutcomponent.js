import React, { Component } from 'react'
import {Button} from '@material-ui/core'

export default class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={() => {
                    localStorage.removeItem('token')
                    this.props.history.push("/")
                }}>Logout</Button>
            </div>
            
        )
    }
}