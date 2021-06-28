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
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     //flexGrow: 1,
//     fontSize: "30px",
//     fontWeight: "Bold",
//     textTransform: "lowercase",
//     marginRight: "57%"

//   },

//   navbuttons: {
//       color: "white",
//       textDecoration: "none",
//       textTransform: "lowercase",
//       textAlign: "right",
//         fontSize: "35px"

    
//   }
// }));

// const styles = {
//     navlinks: {
//       display: "flex",
//       justifyContent: "flex-end"
//   }
//  }
export default function Navbar() {
  //const classes = useStyles();

  return (
    <div >
      {/* <AppBar position="static">
        <Toolbar className={classes.menuButton} >
          <Typography variant="h4" className={classes.title}>
            App Name 
          </Typography>
          <div style={styles.navlinks} >
                <Link className={classes.navbuttons} to="/trails"><Button color="inherit">Trails</Button></Link>
                <Link className={classes.navbuttons} to="/uncrowded"><Button color="inherit">Uncrowded Trails </Button></Link>
                
                
          </div>
          
        </Toolbar>
      </AppBar> */}
      <header className='navbar'>
        <div className='navbar__title navbar__item'>Ontario Trails</div>
        <div className='navbar__item'><Link className="link button" to="/trails">Trails</Link></div>
         <div className='navbar__item'><Link className="link button" to="/uncrowded">Uncrowded Trails</Link> </div>     
    </header>
    </div>
  );
}
