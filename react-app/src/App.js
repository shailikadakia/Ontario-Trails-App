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
              
                <Switch>
                <Route exact path='/'>
                  <div className ='description'>  <p>Welcome to Ontario Trails! Navigate through our site to  search through trails in the province of Ontario. </p>
                    < p>To begin, search through all trails in the province under the <i>Trails</i> tab. We hope you are able to find a trail that best suits your needs for your trip.</p>
                    <p>Or, search through less-popular trails under the <i>Uncrowded trails</i> tab. For Ontario residents who are hesitant about spending time outdoors in a popular trail, the Uncrowded tab is a frequently-updated list of trails that are less popular. This way, you can spend time outdoors without worrying about spreading COVID-19.</p>
                    <p>We hope you enjoy!</p> </div>
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
