import './App.css';
import React from 'react';
import { Trail } from './components/Trail';
import UncrowdedTrails from './components/UncrowdedTrails';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from "./components/Navbar" 

function App() {
    return (
        <div className = "App"> 
            <Router>
            <Navbar />
                {/* <div>
                    <h1>App Name</h1>
                    <Link to="/trails">Trails</Link>
                    <Link to="/uncrowded">Uncrowded Trails</Link>
                </div> */}
                <Switch>
                <Route exact path='/'>
                    <p>Welcome! On this site you can search for a variety of trails, and find out about the least busy and crowded trails in Ontario!</p>
                </Route>
                <Route path='/trails'>
                    <Trail/>
                </Route>
                <Route path='/uncrowded'>
                    <UncrowdedTrails/>
                </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
