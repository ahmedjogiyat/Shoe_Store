import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
	<div>
       <h4> <Link to="/"> Home </Link> <br/><br/></h4>
       <h4> <Link to="/about"> About </Link><br/><br/></h4>
       <h4> <Link to="/product"> Product </Link></h4>
	</div>
  );
}

export default NavBar;
