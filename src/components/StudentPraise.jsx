 import React, { Component } from 'react';
 import DownArrow from '../../img/down-arrow-2.svg';
 import logo from '../../img/logo.png';

class StudentPraise extends Component {
  render() {
    return (
		<div className="studentPraise" id="studentPraise">
			<h3>Hear from our students</h3>
			<div className="studentStories">
				<div className="studentStory studentNotFeatured">
					<p>"Words cannot express the gratitude that we feel upon having her transition from public school to BSLC's open learning format. She is stress free and has found her smile. She actually loves going to school now and for so many reasons. Mostly, it has been lovely to watch her decompress from her past experiences and see the girl we know return as she feels safe to be herself!"</p>
					<br />
					<br />
					<p className="author">Student 1</p>
				</div>
				<div className="studentStory studentNotFeatured">
					<p>"When he started at BSLC he had an immediate feeling of relief and joy. He went from being a kid who said "I hate school" all day long to a kid who was happy to go in the morning and happy when he gets picked up in the afternoon. The learning part took a few months, for him to reset and find his footing. At first we were anxious, but looking back on this, and seeing where he evolved to over the course of his first year, it seems very natural and positive how it happened."</p>
					<br />
					<br />
					<p className="author">Student 2</p>
				</div>
				<div className="studentStory studentNotFeatured">
					<p>"As a parent, it is great to have a place my son is thrilled to attend and does not have to worry about being judged by anyone, including the adults!  My son is thriving at BSLC due to the awesome staff that allows him the freedom to pursue his interests and the other students who have been welcoming!"</p>
					<br />
					<br />
					<br />
					<br />
					<br />
					<p className="author">Student 3</p>
				</div>
				<a href="#praise" className="arrow6"><img src={DownArrow} alt="NavArrow"/></a>
			</div>
		</div>
    );
  }
}

export default StudentPraise;


