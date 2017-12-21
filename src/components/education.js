import React from 'react'
import { Translate } from 'react-redux-i18n';
import ScrollableAnchor from 'react-scrollable-anchor';

export class Education extends React.Component {
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
			<ScrollableAnchor id="education">
				<section className="resume-section p-3 p-lg-5 d-flex flex-column">
					<div>
						<h2 className="mb-5">
							<Translate className={animation} value="education.title" />
						</h2>
						<div className="resume-item d-flex flex-column flex-md-row mb-5">
							<div className="resume-content mr-auto">
								<h3 className="mb-0">
									<Translate className={animation} value="education.college.title" />
								</h3>
								<div className="subheading mb-3">
									<Translate className={animation} value="education.college.spc" />
								</div>
								<div>
									<Translate className={animation} value="education.college.track" />
								</div>
							</div>
							<div className="resume-date text-md-right">
								<span className="text-primary">
									<Translate className={animation} value="education.college.date" />
								</span>
							</div>
						</div>
						<div className="resume-item d-flex flex-column flex-md-row mb-5">
							<div className="resume-content mr-auto">
								<h3 className="mb-0">
									<Translate className={animation} value="education.school.title" />
								</h3>
								<div className="subheading mb-3">
									<Translate className={animation} value="education.school.spc" />
								</div>
							</div>
							<div className="resume-date text-md-right">
								<span className="text-primary">
									<Translate className={animation} value="education.school.date" />
								</span>
							</div>
						</div>
					</div>
				</section>
			</ScrollableAnchor>
		)
	}
}