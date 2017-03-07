import React, { Component } from 'react';
import logo from '../../img/logo.png';

class Header extends Component {
  render() {
    return (
		<header>
			<a href="#"><img id="logo" src={logo} alt={"BSLC Logo"} /></a>
			<nav>
				<ul>
					<li className="border-left"><h3><a href="learnmore.html">Learn More</a></h3></li>
					<li><h3><a href="whatwedo.html">What We Do</a></h3></li>
					<li><h3><a href="tuition.html">Tuition</a></h3></li>
					<li><h3><a href="makerspace.html">Makerspace</a></h3></li>
					<li><h3><a href="contactus.html">Contact Us</a></h3></li>
					<li> <a target="_blank" href="https://donate.constantcontact.com/lp/pages/e48421ba-f93a-44d0-92b8-9d77f9ef8456"><button>Donate!</button></a></li>
				</ul>
			</nav>
		</header>
    );
  }
}

export default Header;