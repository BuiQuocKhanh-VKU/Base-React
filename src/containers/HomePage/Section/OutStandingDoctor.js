import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'; //đa ngôn ngữ
import Slider from "react-slick"

class OutStandingDoctor extends Component {

	render() {


		return (
			<div className="section-share section-outstanding-doctor">
				<div className="section-container">
					<div className="section-header">
						<span className="title-section">Outstanding Doctor Lastweek</span>
						<button className="btn-section">See more</button>
					</div>

					<div className="section-body">
						<Slider {...this.props.settings}>
							<div className="section-customize">
								<div className="customize-border">
									<div className="outer-bg">
										<div className="bg-image section-outstanding-doctor"></div>
									</div>
									<div className="position text-center">
										<div>Dr.Khanh Bui</div>
										<div>Musculoskeletal</div>
									</div>
								</div>

							</div>
							<div className="section-customize">
								<div className="customize-border">
									<div className="outer-bg">
										<div className="bg-image section-outstanding-doctor"></div>
									</div>
									<div className="position text-center">
										<div>Dr.Khanh Bui</div>
										<div>Musculoskeletal 2</div>
									</div>
								</div>
							</div>
							<div className="section-customize">
								<div className="customize-border">
									<div className="outer-bg">
										<div className="bg-image section-outstanding-doctor"></div>
									</div>
									<div className="position text-center">
										<div>Dr.Khanh Bui</div>
										<div>Musculoskeletal 3</div>
									</div>
								</div>
							</div>
							<div className="section-customize">
								<div className="customize-border">
									<div className="outer-bg">
										<div className="bg-image section-outstanding-doctor"></div>
									</div>
									<div className="position text-center">
										<div>Dr.Khanh Bui</div>
										<div>Musculoskeletal 4</div>
									</div>
								</div>
							</div>
							<div className="section-customize">
								<div className="customize-border">
									<div className="outer-bg">
										<div className="bg-image section-outstanding-doctor"></div>
									</div>
									<div className="position text-center">
										<div>Dr.Khanh Bui</div>
										<div>Musculoskeletal</div>
									</div>
								</div>
							</div>
							<div className="section-customize">
								<div className="customize-border">
									<div className="outer-bg">
										<div className="bg-image section-outstanding-doctor"></div>
									</div>
									<div className="position text-center">
										<div>Dr.Khanh Bui</div>
										<div>Musculoskeletal</div>
									</div>
								</div>
							</div>


						</Slider>
					</div>

				</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
