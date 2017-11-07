import React from 'react'
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

export const Interests = ({ }) => {
	return (
		<ScrollableAnchor id="interests">
			<section className="resume-section p-3 p-lg-5 d-flex flex-column">
				<div className="my-aauto">
					<h2 className="mb-5">Interests</h2>
					<p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice
						ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
					<p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef,
						and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development
						world.</p>
				</div>
			</section>
		</ScrollableAnchor>
	)
};