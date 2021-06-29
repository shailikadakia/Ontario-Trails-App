import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {


  return (
    <div className='header' >
      
      <header className='navbar'>
    

        <div className='navbar__title'><Link className="link" to="/">Ontario Trails</Link></div>
        <div className='navbar__item'><Link className=" button" to="/trails">Trails</Link></div>
         <div className='navbar__item'><Link className=" button" to="/uncrowded">Uncrowded Trails</Link> </div> 
            

    </header>
    
    </div>
  );
}
