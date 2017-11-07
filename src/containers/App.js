import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Nav } from '../components/nav';
import { About } from '../components/about';
import { Experience } from '../components/experience';
import { Education } from '../components/education';
import { Skills } from '../components/skills';
import { Interests } from '../components/interests';
// import MainSection from '../components/MainSection'
import * as resumeActions from '../actions'

const App = ({ language, actions }) => (
	<div>
		<Nav language={language} changeLanguage={actions.changeLanguage} />
		<About/>
		<Experience/>
		<Education/>
		<Skills/>
		<Interests/>
	</div>
);

App.propTypes = {
	language: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	language: state.i18n.locale
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(resumeActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
