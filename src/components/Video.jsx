import React, { Component } from 'react';
import Vid from '../../img/video_bg.mp4';

class Video extends Component {

 
  render () {
 
    return (
		<video src={Vid} autoPlay loop id="video-background" muted  type="video/mp4"/>
    );
  }
};
 
export default Video;