import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


export class Home extends React.Component {
    go() {
        console.log(' welcome ' + this.props)
        this.props.history.push('/')
    }
    render() {

        return (
            <div>

                <hr></hr>
                <h2><center>Welcome To GardenDecor Management !!</center></h2>
                <hr></hr>
                <img src="plants.jpg" class="rounded float-left" alt=""></img>
                <img src="images.jpg" class="img-fluid" ></img>
                <img src="new4.jpg" class="rounded float-right" alt=""></img>

            </div>
        )
    }
}

export default withRouter(Home)
