import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

	componentDidMount() {
		this.props.getProfile(this.props.match.params.userId);
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

export default compose(
	connect(mapStateToProps, {getProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);