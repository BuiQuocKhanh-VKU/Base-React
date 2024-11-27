import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo-healthcare.svg';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl'; //đa ngôn ngữ
import { LANGUAGES } from '../../utils'; //lấy biến từ file constant
import { changeLanguageApp } from '../../store/actions';
class HomeHeader extends Component {

	changeLanguage = (language) => {
		this.props.changeLanguageAppRedux(language); //fire action event của redux để thay đổi ngôn ngữ
	}
	render() {
		let language = this.props.language; //lấy biến từ store thông qua props
console.log("use info", this.props.userInfo);
		return (
			<React.Fragment> 
				<div className="home-header-container">
					<div className="home-header-content">

						<div className="left-content">
							<i className="fas fa-bars"></i>
							<div className ="logo"></div>
						</div>

						<div className="center-content">
							<div className="child-content">
								<div><b><FormattedMessage id="homeheader.speciality" /></b></div>
								<div className="subs-title"><FormattedMessage id="homeheader.searchdoctor" /></div>
							</div>
							<div className="child-content">
								<div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
								<div className="subs-title"><FormattedMessage id="homeheader.select-room" /></div>
							</div>
							<div className="child-content">
								<div><b><FormattedMessage id="homeheader.doctor" /></b></div>
								<div className="subs-title"><FormattedMessage id="homeheader.select-doctor" /> </div>
							</div>
							<div className="child-content">
								<div><b><FormattedMessage id="homeheader.fee" /></b></div>
								<div className="subs-title"><FormattedMessage id="homeheader.check-health" /></div>
							</div>
						</div>

						<div className="right-content">
							<div className="support">
								<i className="fas fa-question-circle"></i>
								<FormattedMessage id="homeheader.support" />
								<div className="language-vi"><span onClick={() => { this.changeLanguage(LANGUAGES.VI) }}>| VN</span></div>
								<div className="language-en"><span onClick={() => { this.changeLanguage(LANGUAGES.EN) }}>EN</span></div>
							</div>
						</div>

					</div>
				</div>

				<div className="home-header-banner">
					<div className="content-up">
						<div className="title1"><FormattedMessage id="homeheader.HEALTH FOUNDATION" /></div>
						<div className="title2"><b><FormattedMessage id="homeheader.COMPREHENSIVE HEALTH CARE" /></b></div>
						<div className="search">
							<i className="fas fa-search"></i>
							<input
								type="text "
								placeholder='Finding a medical specialist'></input>
						</div>
					</div>
					<div className="content-down">
						<div className="options">
							<div className="option-child">
								<div className="icon-child"><i className="far fa-hospital"></i></div>
								<div className="text-child">Specialized Examination</div>
							</div>
							<div className="option-child">
								<div className="icon-child"><i className="fas fa-mobile-alt"></i></div>
								<div className="text-child">Remote Examination</div>
							</div>
							<div className="option-child">
								<div className="icon-child"><i className="fas fa-hospital-alt"></i></div>
								<div className="text-child">General Examination</div>
							</div>
							<div className="option-child">
								<div className="icon-child"><i className="fas fa-flask"></i></div>
								<div className="text-child">Medical Tests</div>
							</div>
							<div className="option-child">
								<div className="icon-child"><i className="fas fa-user-md"></i></div>
								<div className="text-child">Mental Health</div>
							</div>
							<div className="option-child">
								<div className="icon-child"><i className="fas fa-briefcase medical"></i></div>
								<div className="text-child">Detal Examination</div>
							</div>

						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}

}

const mapStateToProps = state => { //lấy biến thông qua state
	return {
		isLoggedIn: state.user.isLoggedIn,
		userInfo: state.user.userInfo, //lấy thông tin user từ store
		language: state.app.language,
	};
};

const mapDispatchToProps = dispatch => { //fire action event của redux
	return {
		changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)) //fire action event của redux để thay đổi ngôn ngữ
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader); //bộc 2 lớp dữ liệu từ store ra ngoài, kết nối redux với react
