import React, { Component } from 'react';
import Banner from './Banner'
import downArrow from '../../img/down-arrow-2.svg';
import Video from './Video'

class Hero extends Component {

    constructor (props) {
        super(props);

        this.state = {
            videoURL: '../../img/video_bg.mpg4'
        }
    }

  render() {
    return (
		<div id="hero" className="hero">
		    <Video />
			<Banner />
			<div className="headline">
				<h1>Bay State Learning Center</h1> 
				<h3>Inspiring young learners to take education into their own hands.</h3>
			</div>
			<div className="middleSubHero">
				<a className="orangeButtonA" ref="learnmore.html"><button className="orangeButton"><h5>Learn more.</h5></button></a>
			</div>
			<a href="#studentPraise" className="heroArrow"><img src={downArrow} alt="DownArrow"/></a>
		</div>
    );
  }
}

export default Hero;