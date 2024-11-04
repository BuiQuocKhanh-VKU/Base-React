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
			dots: false, //chấm chấm dưới slide 
			infinite: true, //lặp vô hạn
			speed: 500,
			slidesToShow: 4, //số lượng slide hiển thị
			slidesTosScroll: 1, //số lượng slide chuyển khi click
		}

		return (
			<div className="section-specialty">
				<div className="specialty-container">
					<div className="specialty-header">
						<span className="title-section">Popular specialty</span>
						<button className ="btn-section">See more</button>
					</div>

					<div className="specialty-body">
						<Slider {...settings}>
							<div className="specialty-customize">
								<div className="bg-image"></div>
								<div>Musculoskeletal 1</div>
							</div>
							<div className="specialty-customize">
								<div className="bg-image"></div>
								<div>Musculoskeletal 2</div>
							</div>
							<div className="specialty-customize">
								<div className="bg-image"></div>
								<div>Musculoskeletal 3</div>
							</div>
							<div className="specialty-customize">
								<div className="bg-image"></div>
								<div>Musculoskeletal 4</div>
							</div>
							<div className="specialty-customize">
								<div className="bg-image"></div>
								<div>Musculoskeletal 5</div>
							</div>
							<div className="specialty-customize">
								<div className="bg-image"></div>
								<div>Musculoskeletal 6</div>
							</div>
						</Slider>
					</div>

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
