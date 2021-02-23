import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AddGardenDecor from './AddGardenDecor'
import ViewAllGardenDecors from './ViewAllGardenDecors';
import Home from './Home'
import ViewGardenDecorByName from './ViewGardenDecorByName'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';



function ReactRouter() {
    return (
        <Router>
            <HeaderComponent />
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/"><button class="button"><span>Home</span></button></Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/listgardendecors" ><button class="button"><span>LIST OF GARDENDECORS</span></button></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add"><button class="button"><span>ADD/UPDATE</span></button></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewGardenDecorByName"><button class="button"><span>SEARCH BY PRODUCT NAME</span></button></Link>
                                </li>



                            </ul>
                        </div>
                    </div>
                </nav>


                <Switch>
                    <Route exact path="/listgardendecors">
                        <ViewAllGardenDecors></ViewAllGardenDecors>
                    </Route>
                    <Route path="/add">
                        <AddGardenDecor></AddGardenDecor>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>

                    <Route path="/viewGardenDecorByName" component={ViewGardenDecorByName} />




                </Switch>
            </div>
            <FooterComponent />
        </Router>
    )
}

export default ReactRouter
