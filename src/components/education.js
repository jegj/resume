import React from 'react'
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

export const Education = ({ }) => {
	return (
		<ScrollableAnchor id="education">
			<section className="resume-section p-3 p-lg-5 d-flex flex-column">
				<div>
					<h2 className="mb-5">Education</h2>

					<div className="resume-item d-flex flex-column flex-md-row mb-5">
						<div className="resume-content mr-auto">
							<h3 className="mb-0">University of Colorado Boulder</h3>
							<div className="subheading mb-3">Bachelor of Science</div>
							<div>Computer Science - Web Development Track</div>
							<p>GPA: 3.23</p>
						</div>
						<div className="resume-date text-md-right">
							<span className="text-primary">August 2006 - May 2010</span>
						</div>
					</div>

					<div className="resume-item d-flex flex-column flex-md-row">
						<div className="resume-content mr-auto">
							<h3 className="mb-0">James Buchanan High School</h3>
							<div className="subheading mb-3">Technology Magnet Program</div>
							<p>GPA: 3.56</p>
						</div>
						<div className="resume-date text-md-right">
							<span className="text-primary">August 2002 - May 2006</span>
						</div>
					</div>

				</div>
			</section>
		</ScrollableAnchor>
	)
};