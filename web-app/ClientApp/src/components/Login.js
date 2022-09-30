import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

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
                    <section className="background-radial-gradient text-light">
                        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                            <div className="row gx-lg-5 align-items-center mb-5">
                                <div className="col-lg-6 mb-5 mb-lg-0">
                                    <h1 className="my-5 display-5 fw-bold ls-tight">
                                        EKVI<br />
                                        <span>SHIELD</span>
                                    </h1>
                                    <p className="mb-4 opacity-70">
                                    </p>
                                </div>

                                <div className="col-lg-6 mb-5 mb-lg-0 position-relative ">
                                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                                <div className="card bg-glass border-radius">
                                    <div className="card-body px-4 py-5 px-md-5 bg-dark border-radius">
                                            <form>
                                                <div className="form-outline mb-4">
                                                    <input onChange={this.Login} type="text" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example3">Login</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input onChange={this.Password} type="password" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example3">Password</label>
                                                </div>
                                                    <Button onClick={this.login} className="btnSuccess border-0 mt-3" block>Sign in</Button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <div className="DeffaultBackGround text-light">
                        <ModalHeader toggle={this.toggle}>Invalid user</ModalHeader>
                        <ModalFooter>
                            <button onClick={this.toggle} className="btn btn-success">Okey</button>{' '}
                        </ModalFooter>
                    </div>
                </Modal>
                </div>
        );
    }
}

export default Login;