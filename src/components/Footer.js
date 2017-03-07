import React, { Component } from 'react';
import paypalLogo from '../../img/paypal_icon.png';
import twitterLogo from '../../img/twitter_icon.png';
import facebookLogo from '../../img/facebook_icon.png';
import mailLogo from '../../img/mail_icon.png';

class Footer extends Component {
  render() {
    return (
		<footer id="footer">

			<div className="footWrap">
				<h3>Donate</h3>
				<a target="_blank" href="http://paypal.com/baystatelearningcenter"><img className="paypalIcon" src={paypalLogo} alt="paypal-icon"/></a>
			</div>

			<div className="footWrap">
				<h4>Bay State Learning Center</h4>
				<h4>45 Bullard St, Dedham MA 02026</h4>
				<h4>617-817-1823</h4>
			</div>

			<div className="footWrap">
				<a target="_blank" href="https://twitter.com/baystatecoop">
					<img className="icon" src={twitterLogo} alt="twitterLogo"/>
				</a>
				<a target="_blank" href="https://www.facebook.com/baystatelearning">
					<img className="facebook_icon" src={facebookLogo} alt="facebookLogo"/>
				</a>
				<a target="_blank" href="mailto:board@baystatelearning.org">
					<img className="icon" src={mailLogo} alt="mailLogo"/>
				</a>
			</div>

			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      		<script type="text/javascript" src="../../dist/main.js"></script>

		</footer>
    );
  }
}

export default Footer;