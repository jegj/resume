import React from 'react'
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

export class Skills extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			animation: 'hidden'
		};
	}

	componentWillReceiveProps() {
		this.toogleAnimation();
	}

	componentDidMount() {
		this.toogleAnimation();
	}

	toogleAnimation() {
		this.setState({
			animation: 'animated fadeIn'
		}, () => {
			setTimeout(() => {
				this.setState({
					animation: ''
				});
			}, 500);
		});
	}

	render() {
		const { animation } = this.state; 
		return (
			<ScrollableAnchor id="skills">
				<section className="resume-section p-3 p-lg-5 d-flex flex-column">
					<div>
						<h2 className="mb-5"><Translate className={animation} value="skills.title" /></h2>

						<div className="subheading mb-3">
							<Translate className={animation} value="skills.tools" dangerousHTML/>
						</div>
						<ul className="list-inline list-icons">
							<li className="list-inline-item" title="HTML5">
								<i className="devicon-html5-plain colored"></i>
							</li>
							<li className="list-inline-item" title="CSS3">
								<i className="devicon-css3-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Bootstrap">
								<i className="devicon-bootstrap-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Javascript">
								<i className="devicon-javascript-plain colored"></i>
							</li>
							<li className="list-inline-item" title="React">
								<i className="devicon-react-original colored"></i>
							</li>
							<li className="list-inline-item" title="Jquery">
								<i className="devicon-jquery-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Webpack">
								<i className="devicon-webpack-plain colored"></i>
							</li>
							<li className="list-inline-item" title="babel">
								<i className="devicon-babel-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Node JS">
								<i className="devicon-nodejs-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Express">
								<i className="devicon-express-original colored"></i>
							</li>
							<li className="list-inline-item" title="Python">
								<i className="devicon-python-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Django">
								<i className="devicon-django-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Postgres SQL">
								<i className="devicon-postgresql-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Mongo DB">
								<i className="devicon-mongodb-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Mocha">
								<i className="devicon-mocha-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Travis">
								<i className="devicon-travis-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Nginx">
								<i className="devicon-nginx-original colored"></i>
							</li>
							<li className="list-inline-item" title="Heroku">
								<i className="devicon-heroku-original colored"></i>
							</li>
							<li className="list-inline-item" title="Amaazon Web Services">
								<i className="devicon-amazonwebservices-original colored"></i>
							</li>
							<li className="list-inline-item" title="GIT">
								<i className="devicon-git-plain colored"></i>
							</li>
							<li className="list-inline-item" title="GitHub">
								<i className="devicon-github-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Slack">
								<i className="devicon-slack-plain colored"></i>
							</li>
							<li className="list-inline-item" title="Linux">
								<i className="devicon-linux-plain colored"></i>
							</li>
						</ul>

						<div className="subheading mb-3">
							<Translate className={animation} value="skills.flow" />
						</div>
						<ul className="fa-ul mb-0">
							<li>
								<i className="fa-li fa fa-check"></i>
								<Translate className={animation} value="skills.responsive" />
							</li>
							<li>
								<i className="fa-li fa fa-check"></i>
								<span className={animation}>Progressive Web Apps(PWA)</span>
						</li>
							<li>
								<i className="fa-li fa fa-check"></i>
								<span className={animation}>Single Page Applications(SPA)</span>
						</li>
							<li>
								<i className="fa-li fa fa-check"></i>
								<Translate className={animation} value="skills.debug" />
							</li>
							<li>
								<i className="fa-li fa fa-check"></i>
								<Translate className={animation} value="skills.devops" dangerousHTML />
							</li>
							<li>
								<i className="fa-li fa fa-check"></i>
								<Translate className={animation} value="skills.agile" dangerousHTML />
							</li>
						</ul>
					</div>
				</section>
			</ScrollableAnchor>
		);
	}
	
};