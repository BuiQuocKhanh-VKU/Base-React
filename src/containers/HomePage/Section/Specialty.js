import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl'; //đa ngôn ngữ
import Slider from "react-slick"


class Specialty extends Component {

	render() {
		return (
			<div className="section-share section-specialty">
				<div className="section-container">
					<div className="section-header">
						<span className="title-section"> <FormattedMessage id={"homeheader.popular specialty"} /></span>
						<button className="btn-section">See more</button>
					</div>

					<div className="section-body">
						<Slider {...this.props.settings}>
							<div className="section-customize">
								<div className="bg-image section-specialty"></div>
								<div>Musculoskeletal 1</div>
							</div>
							<div className="section-customize">
								<div className="bg-image section-specialty"></div>
								<div>Musculoskeletal 2</div>
							</div>
							<div className="section-customize">
								<div className="bg-image section-specialty"></div>
								<div>Musculoskeletal 3</div>
							</div>
							<div className="section-customize">
								<div className="bg-image section-specialty"></div>
								<div>Musculoskeletal 4</div>
							</div>
							<div className="section-customize">
								<div className="bg-image section-specialty"></div>
								<div>Musculoskeletal 5</div>
							</div>
							<div className="section-customize">
								<div className="bg-image section-specialty"></div>
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
