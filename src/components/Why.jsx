import React, { Component } from 'react';
import Graduate from '../../img/svg_edu/svg/graduate.svg';
import EReader from '../../img/svg_edu/svg/ereader.svg';
import Presentation from '../../img/svg_edu2/svg/presentation.svg';
import Certificate from '../../img/svg_edu2/svg/certificate.svg';
import DownArrow from '../../img/down-arrow-2.svg';

class Why extends Component {
  render() {
    return (
		<div className="why" id="why">
			<div className="sub-whys">
				<div className="why-box whyBox1">
					<div className="KPI">
						<img src={Graduate}/>
						<h3>70%</h3>
					</div> 
					<div className="kpiDescription" id="graduate">
						<p>Based on data from our partner Liberated Learning, we will graduate 70% students to college.  This is likely higher than the public high school average.</p>
					</div>
				</div>
				<div className="why-box whyBox2">
					<div className="KPI">
						<img src={EReader}/>
						<h3>100%</h3>
					</div> 
					<div className="kpiDescription">
						<p>100% of students leave this program with a portfolio and report that details their teaching.  Colleges accept students with this material, even without taking the SAT.</p>
					</div>
				</div>
				<div className="why-box whyBox3">
					<div className="KPI">	
						<img src={Presentation}/>
						<h3>94%</h3>
					</div> 
					<div className="kpiDescription">
						<p>Our students report a satisfaction rate of 94%, via an independent survey. There are several reasons why.  Read more <a href="#">here</a>. </p>
					</div>
				</div>
			</div>
			
			<div className="whyBoxFeatured">
				<img src={Certificate}/>
				<div className="KPI">
					<h3>90%</h3>
				</div> 
				<div className="kpiDescription">
					<p>We take pride in accepting most students. <br /> Inclusion is part of our culture. <br />90% of students who apply are accepted into the program.</p>
				</div>
			</div>
			<a href="#students" className="arrow4"><img src={DownArrow} /></a>
		</div>

    );
  }
}

export default Why;