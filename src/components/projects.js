import React from 'react'
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

export const Projects = ({ }) => {
	return (
		<ScrollableAnchor id="projects">
			<section className="resume-section p-3 p-lg-5 d-flex flex-column">
				<div className="my-aauto">
					<h2 className="mb-5">Projects</h2>
					<div className="row">
						<div className="col-lg-4 col-sm-6 portfolio-item">
							<div className="card h-100">
								<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
									<div className="card-body">
										<h4 className="card-title">
											<a href="#">Project One</a>
										</h4>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
									</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 portfolio-item">
							<div className="card h-100">
								<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
								<div className="card-body">
									<h4 className="card-title">
										<a href="#">Project One</a>
									</h4>
									<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 portfolio-item">
							<div className="card h-100">
								<a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
								<div className="card-body">
									<h4 className="card-title">
										<a href="#">Project One</a>
									</h4>
									<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</ScrollableAnchor>
	)
};