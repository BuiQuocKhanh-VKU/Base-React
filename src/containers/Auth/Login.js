import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props); //trc khi conponent đc render thì hàm constructor sẽ đc gọi đầu tiên
        this.state = { //cài trạng thái 
            username: '',
            password: '',
            isShowPassword: false,
        }
    }


    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        console.log('username:', this.state.username, 'password:', this.state.password);
        console.log('all state', this.state)
        await handleLoginApi(this.state.username, this.state.password);
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        //JSX
        return (  //chỉ render ra 1 thẻ div
            <div div className="login-background">
                <div className="login-container">
                    <div className="login-content">

                        <div className="col-12 text-login">Login</div>
                        < div className="col-12 form-group login-input" >
                            <label>Username</label>
                            <input type="text" className="form-control"
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)} />
                        </div>

                        < div className="col-12 form-group login-input ">
                            <label>Password</label>
                            <div className="custom-input-password">
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className="form-control"
                                    placeholder='Enter your password'
                                    onChange={(event) => { this.handleOnChangePassword(event) }}
                                />
                                <span span onClick={() => { this.handleShowHidePassword() }}>
                                    <i class={this.state.isShowPassword ? 'far fa-regular fa-eye' : 'far fa-regular fa-eye-slash'}>
                                    </i></span>
                            </div>
                        </div>

                        < div className="col-12">
                            <button className="btn-login" onClick={() => { this.handleLogin() }}>Log in</button>
                        </div>

                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>

                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login">Or Login with:</span>
                        </div>
                        <div className="col-12 social-login">
                            <i class="fab fa-brands fa-google google"></i>
                            <i class="fab fa-brands fa-facebook facebook"></i>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
