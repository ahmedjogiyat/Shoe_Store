// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavBar() {

//   return (
// 	<div>
//        <h4> <Link to="/"> Home </Link> <br/><br/></h4>
//        <h4> <Link to="/about"> About </Link><br/><br/></h4>
//        <h4> <Link to="/product"> Product </Link></h4>
// 	</div>
//   );
// }

// export default NavBar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
         
          <Button color="inherit " href>Home</Button>
          <Button color="inherit" href>About</Button>
          <Button color="inherit"href>Product</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}