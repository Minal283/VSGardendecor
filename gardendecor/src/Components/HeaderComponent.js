import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-info">
                        <div><h5>............................................................................................NURSERY PLANT SYSTEM APP..........................................................................................................</h5></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent