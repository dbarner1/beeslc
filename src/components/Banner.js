import React, { Component } from 'react';

class Banner extends Component {

  render() {
    return (
		<div className="bannerAnnouncement">
			<h2>Fund a scholarship to your future employee!</h2>
			<a target="_blank" href="https://donate.constantcontact.com/lp/pages/e48421ba-f93a-44d0-92b8-9d77f9ef8456"><button>Donate!</button></a>
			<a href="#" className="closeBanner"><h3>x</h3></a>
		</div>
    );
  }
}

export default Banner;