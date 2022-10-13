import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            Login: '',
            Password: '',
            authenticated: localStorage.getItem("authenticated"),
            modal: false
        }

        this.Login = this.Login.bind(this);
        this.Password = this.Password.bind(this);
        this.login = this.login.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    Login(event) {
        this.setState({ Login: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }

    login(event) {
        if (this.state.Login ===  '' && this.state.Password === '')
        {
            alert("Enter all fields");
        }
        else if (this.state.Login === '') {
            alert("Enter login");
        }
        else if (this.state.Password === '') {
            alert("Enter password");
        }
        else {
            fetch('https://localhost:44450/UserApi/Login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Login: this.state.Login,
                    Password: this.state.Password
                })
            }).then((Response) => Response.json())
                .then((result) => {
                    console.log(result);
                    if (result["message"] !== "Success") {
                        this.toggle();
                    }
                    else {
                        window.location.assign('https://localhost:44450');
                        localStorage.setItem('authenticated', true);
                    }
                })
        }
    }

    render() {
        return (
            <div className="Login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-md-7 intro-section">
                            <div className="intro-content-wrapper">
                                <h1 className="display-1">Welcome to EkviShield!</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-5 form-section bg-dark text-white">
                            <div className="px-4 py-5 px-md-5">
                                <form>
                                    <div className="form-outline mb-4">
                                        <Input onChange={this.Login} type="text" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example3">Login</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <Input onChange={this.Password} type="password" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example3">Password</label>
                                    </div>
                                    <Button onClick={this.login} className="btnSuccess border-0 mt-3" block>Sign in</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;