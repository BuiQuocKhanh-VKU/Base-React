import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'; //đa ngôn ngữ



class About extends Component {

	render() {
		return (
			<div className="section-share section-about">
				<div className="section-about-header">
					Contact us!
				</div>
				<div className="section-about-content">
					<div className="content-left">
						<iframe width="100%" height="400px"
							src="https://www.youtube.com/embed/5H3SC47cBpo"
							title="NGƯỜI YÊU GIẢN ĐƠN - CHI DÂN |  OFFICIAL MUSIC VIDEO"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen></iframe>
					</div>
					<div className="content-right">
<p> Hello</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About); //bộc 2 lớp dữ liệu từ store ra ngoài, kết nối redux với react
