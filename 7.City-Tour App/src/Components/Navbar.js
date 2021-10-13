import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
	return (
		<div>
			  <nav>
			    <div className="nav-wrapper">
			      <Link href="#" className="brand-logo">CityTour</Link>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><Link to="/Home">Home</Link></li>
			        <li><Link  to="/About">About</Link></li>
			        <li><Link to="/City">Cities</Link></li>
			      </ul>
			    </div>
  			</nav>
		</div>
	)
}

export default Navbar