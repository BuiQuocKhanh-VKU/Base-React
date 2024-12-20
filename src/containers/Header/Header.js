import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import { LANGUAGES } from '../../utils';
import './Header.scss';
import { lang } from 'moment';
import { FormattedMessage } from 'react-intl';

class Header extends Component {

    handleChangeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language); //fire action event của redux để thay đổi ngôn ngữ

    }


    render() {
        const { processLogout, language, userInfo } = this.props;
        console.log('check user info', userInfo);
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                <div className="languages">
                    <span className="welcome"><FormattedMessage id="homeheader.welcome" />
                        {userInfo && userInfo.firstName ? userInfo.firstName : ''}
                        !
                    </span>
                    <span className={language === LANGUAGES.VI ? "language-vi active" : "language-vi"}
                        onClick={() => this.handleChangeLanguage(LANGUAGES.VI)}>VN
                    </span>

                    <span className={language === LANGUAGES.EN ? "language-en active" : "language-en"}
                        onClick={() => this.handleChangeLanguage(LANGUAGES.EN)}>EN
                    </span>

                    <div className="btn btn-logout" onClick={processLogout} title="log out">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

                {/* nút logout */}

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo, //lấy thông tin user từ store

    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)) //fire action event của redux để thay đổi ngôn ngữ

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
