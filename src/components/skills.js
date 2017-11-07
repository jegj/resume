import React from 'react'
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

export const Skills = ({ }) => {
	return (
		<ScrollableAnchor id="skills">
			<section className="resume-section p-3 p-lg-5 d-flex flex-column">
				<div className="my-aauto">
					<h2 className="mb-5">Skills</h2>

					<div className="subheading mb-3">Programming Languages &amp; Tools</div>
					<ul className="list-inline list-icons">
						<li className="list-inline-item" title="HTML5">
							<i className="devicon-html5-plain colored"></i>
						</li>
						<li className="list-inline-item" title="CSS3">
							<i class="devicon-css3-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Bootstrap">
							<i class="devicon-bootstrap-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Javascript">
							<i class="devicon-javascript-plain colored"></i>
						</li>
						<li className="list-inline-item" title="React">
							<i class="devicon-react-original colored"></i>
						</li>
						<li className="list-inline-item" title="Jquery">
							<i class="devicon-jquery-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Webpack">
							<i class="devicon-webpack-plain colored"></i>
						</li>
						<li className="list-inline-item" title="babel">
							<i class="devicon-babel-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Node JS">
							<i class="devicon-nodejs-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Express">
							<i class="devicon-express-original colored"></i>
						</li>
						<li className="list-inline-item" title="Python">
							<i class="devicon-python-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Django">
							<i class="devicon-django-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Postgres SQL">
							<i class="devicon-postgresql-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Mongo DB">
							<i class="devicon-mongodb-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Mocha">
							<i class="devicon-mocha-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Travis">
							<i class="devicon-travis-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Heroku">
							<i class="devicon-heroku-original colored"></i>
						</li>
						<li className="list-inline-item" title="Amaazon Web Services">
							<i class="devicon-amazonwebservices-original colored"></i>
						</li>
						<li className="list-inline-item" title="GIT">
							<i class="devicon-git-plain colored"></i>
						</li>
						<li className="list-inline-item" title="GitHub">
							<i class="devicon-github-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Slack">
							<i class="devicon-slack-plain colored"></i>
						</li>
						<li className="list-inline-item" title="Linux">
							<i class="devicon-linux-plain colored"></i>
						</li>
					</ul>

					<div className="subheading mb-3">Workflow</div>
					<ul className="fa-ul mb-0">
						<li>
							<i className="fa-li fa fa-check"></i>
							Mobile-First, Responsive Design
						</li>
						<li>
							<i className="fa-li fa fa-check"></i>
							Progressive Web Apps
						</li>
						<li>
							<i className="fa-li fa fa-check"></i>
							Single Page Applications
						</li>
						<li>
							<i className="fa-li fa fa-check"></i>
							Cross Browser Testing &amp; Debugging
						</li>
						<li>
							<i className="fa-li fa fa-check"></i>
							Cross Functional Teams
						</li>
						<li>
							<i className="fa-li fa fa-check"></i>
							Agile Development &amp; Scrum
						</li>
					</ul>
				</div>
			</section>
		</ScrollableAnchor>
	)
};