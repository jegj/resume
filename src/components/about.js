import React from 'react'
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

export class About extends React.Component {
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
			<ScrollableAnchor id="about">
				<section className="resume-section p-3 p-lg-5 d-flex d-column">
					<div className="my-auto">
						<h1 className="mb-0">Javier
							<span className="text-primary">Galarza</span>
						</h1>
						<div className="subheading mb-5">
							<span>Jiron 28 de Julio # 283 · Magdalena del Mar · Perú </span>
							<br/>
							<a href="mailto:jegj57@gmail.com">jegj57@gmail.com</a>
						</div>
						<p className="mb-5 about-description">
							<Translate className={animation} value="about.description" />
						</p>
						<ul className="list-inline list-social-icons mb-0">
							<li className="list-inline-item">
								<a href="https://www.facebook.com/javier.galarza.58">
									<span className="fa-stack fa-lg">
										<i className="fa fa-circle fa-stack-2x"></i>
										<i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
									</span>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="https://twitter.com/jegj57">
									<span className="fa-stack fa-lg">
										<i className="fa fa-circle fa-stack-2x"></i>
										<i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
									</span>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="https://www.linkedin.com/in/javier-galarza-55112b57/">
									<span className="fa-stack fa-lg">
										<i className="fa fa-circle fa-stack-2x"></i>
										<i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
									</span>
								</a>
							</li>
							<li className="list-inline-item">
								<a href="https://github.com/jegj">
									<span className="fa-stack fa-lg">
										<i className="fa fa-circle fa-stack-2x"></i>
										<i className="fa fa-github fa-stack-1x fa-inverse"></i>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</section>
			</ScrollableAnchor>
		);
	}
}