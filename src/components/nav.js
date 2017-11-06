import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
export class Nav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			animation: 'hidden'
		};
	}
	
	renderI18nButton() {
		const { language } = this.props;
		let flag = null;
		let nextLang = null;
		let title = null;
		switch ( language ) {
			case 'ES':
				flag = <img src="images/usa_flag.png" alt="english" width="30px" height="30px" />;
				nextLang = 'EN';
				title = 'English';
				break;
			case 'EN':
				flag = <img src="images/spain_flag.png" alt="español" width="30px" height="30px" />;
				title = 'Español';
				nextLang = 'ES';
				break;
			default:
				flag = <img src="images/usa_flag.png" alt="english" width="30px" height="30px" />;
				title = 'English';
				nextLang = 'EN';
		}
		return (
			<a href="#" title={title} onClick={() => this.handleI18NClick(nextLang)}>
				{flag}
			</a>
		)
	}

	handleI18NClick(nextLang) {
		// FIXME: REMOVE JQUERY CODE 
		if ($('.navbar-toggler').css('display') != 'none') {
			$(".navbar-toggler").trigger("click");
		}
		this.props.changeLanguage(nextLang);
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
		const i18nButton = this.renderI18nButton();
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
				<a className="navbar-brand js-scroll-trigger" href="#page-top">
					<span className="d-block d-lg-none">
						<Translate value="nav.title"/>
					</span>
					<span className="d-none d-lg-block">
						<img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/profile.jpg" alt=""/>
					</span>
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className={"nav-link js-scroll-trigger " + animation } href="#about">
								<Translate value="nav.section.about" />
							</a>
						</li>
						<li className="nav-item">
							<a className={"nav-link js-scroll-trigger " + animation} href="#experience">
								<Translate value="nav.section.experience" />
							</a>
						</li>
						<li className="nav-item">
							<a className={"nav-link js-scroll-trigger " + animation} href="#education">
								<Translate value="nav.section.education" />
							</a>
						</li>
						<li className="nav-item">
							<a  className={"nav-link js-scroll-trigger " + animation} href="#skills">
								<Translate value="nav.section.skills" />
							</a>
						</li>
						<li className="nav-item">
							<a className={"nav-link js-scroll-trigger " + animation} href="#projects">
								<Translate value="nav.section.projects" />
							</a>
						</li>
						<li className="nav-item">
							<a  className={"nav-link js-scroll-trigger " + animation} href="#interests">
								<Translate value="nav.section.interests" />
							</a>
						</li>
						<li className="nav-item">
							{i18nButton}
						</li>
					</ul>
				</div>
			</nav>
		);
	}
};

Nav.propTypes = {
	language: PropTypes.string.isRequired,
	changeLanguage: PropTypes.func.isRequired,
};