import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';

import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

	render() {
		let settings = {
			dots: false, //chấm chấm dưới slide 
			infinite: false, //lặp vô hạn
			speed: 500,
			slidesToShow: 4, //số lượng slide hiển thị
			slidesTosScroll: 1, //số lượng slide chuyển khi click
		}


		return (
			<div>
				<HomeHeader />
				<Specialty
					settings={settings}
				/>
				<MedicalFacility
					settings={settings}
				/>
				<OutStandingDoctor
					settings={settings}
				/>
				<HandBook
					settings={settings}
				/>
				<About
				/>
				<HomeFooter
				/>
			</div>
		);
	}

}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.user.isLoggedIn
	};
};

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
