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
            errMessage: '' //khai báo lỗi
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
        this.setState({// clear lỗi khi nhập lại
            errMessage: ''
        })

        try { //post request
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            console.log('hoicaigi ', error.response) //response là 1 object lay data tu server
        }
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
                                    <i className={this.state.isShowPassword ? 'far fa-regular fa-eye' : 'far fa-regular fa-eye-slash'}>
                                    </i></span>
                            </div>
                            <div className="col-12" style={{ color: "red" }}//hiển thị lỗi va style kieu moi 
                            >
                                {this.state.errMessage}
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
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
