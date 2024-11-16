import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'; //đa ngôn ngữ



class HomeFooter extends Component {

	render() {
		return (
			<div className="home-footer">
				<p>&copy; 2024 KhanhBui HealthCare. More information, please visit my facebook.
					 <a target ="_blank" href="https://www.facebook.com/profile.php?id=100048034400458"> &#8594; Click here &#8592; </a>
				</p>
			</div>
		);
	}

}

const mapStateToProps = state => { //lấy biến thông qua state
	return {
		isLoggedIn: state.user.isLoggedIn,
		language: state.app.language,
	};
};

const mapDispatchToProps = dispatch => { //fire action event của redux
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter); //bộc 2 lớp dữ liệu từ store ra ngoài, kết nối redux với react
