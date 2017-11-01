import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Nav } from '../components/nav'
// import MainSection from '../components/MainSection'
import * as resumeActions from '../actions'

const App = ({ language, actions }) => (
	<div>
		<Nav language={language} changeLanguage={actions.changeLanguage} />
	</div>
);

App.propTypes = {
	language: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	language: state.language
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(resumeActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
