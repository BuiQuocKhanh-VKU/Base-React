import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl'; //đa ngôn ngữ
import Slider from "react-slick"

//import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Specialty extends Component {

	render() {
		let settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slideToShow: 1,
			slideTosScroll: 1,
		}

		return (
			<div className="section-specialty">
				<div className="specialty-content">
					<Slider {...settings}>
						<div className="img-customize">
							<h3>1</h3>
						</div>
						<div className="img-customize">
							<h3>2</h3>
						</div>
						<div className="img-customize">
							<h3>3</h3>
						</div>
						<div className="img-customize">
							<h3>4</h3>
						</div>
						<div className="img-customize">
							<h3>5</h3>
						</div>
						<div className="img-customize">
							<h3>6</h3>
						</div>
					</Slider>
				</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty); //bộc 2 lớp dữ liệu từ store ra ngoài, kết nối redux với react
