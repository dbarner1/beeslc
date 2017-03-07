import React, { Component } from 'react';
import DummyStudentImage from '../../img/svg_edu2/svg/reading.svg';
import downArrow from '../../img/down-arrow-2.svg';

class Students extends Component {

  render() {
    return (
		<div className="students" id="students">
			<div className="allButArrow">
				<div className="featuredStudentContainer">
						<h3>Meet Our Featured Student: James!</h3>
						<img src={DummyStudentImage} alt="student photo" />
						<h4>James is a 3rd year student at Bay State Learning Center.  Next Fall he'll embark on a new mission to help spread awareness about income inequality in the world.  <a href="#">Read more.</a></h4>
				</div>
				<div className="studentContainer featuredStudentContainer">
					<h3>Other Featured Students</h3> 
					<div className="students2">
						<div className="student">
							<img src={DummyStudentImage}/>
						</div>	
						<div className="student">
							<img src={DummyStudentImage}/>
						</div>	
						<div className="student">
							<img src={DummyStudentImage}/>
						</div>	
						<div className="student">
							<img src={DummyStudentImage}/>
						</div>	
					</div>
					<h4>Click a picture above to learn more about their entrepeneurial path!</h4>
				</div>
			</div>
			<a href="#request" className="heroArrow"><img src={downArrow} alt="DownArrow"/></a>
		</div>

    );
  }
}

export default Students;