import React from 'react'
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

export const Projects = ({ }) => {
	return (
		<ScrollableAnchor id="projects">
			<section className="resume-section p-3 p-lg-5 d-flex flex-column">
				<div className="my-aauto">
					<h2 className="mb-5">Projects</h2>
				</div>
			</section>
		</ScrollableAnchor>
	)
};