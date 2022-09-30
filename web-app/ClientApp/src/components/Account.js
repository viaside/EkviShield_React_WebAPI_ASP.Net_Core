import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import getCookie from '../WorkWithCookie';

class Account extends Component {
    constructor() {
        super();

        this.state = {
            Login: '',
            NewLogin: '',
            Password: '',
            NewPassword: '',
            Email: '',
            DateOfBirth: '',
            TextLogin: 'Change This',
            saveLogin: false,
            ClassLogin: 'btn btn-outline-secondary text-dark',
            TypeLogin: 'p',
            TextPassowrd: 'Change This',
            savePassword: false,
            ClassPassword: 'btn btn-outline-secondary text-dark',
            TypePassword: 'p',
            modal: false
        }

        this.ChangeValuePassword = this.ChangeValuePassword.bind(this);
        this.ChangeValueLogin = this.ChangeValueLogin.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        fetch('https://localhost:44450/UserApi/GetInfo/' + getCookie("Id"), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseData) => {
                this.setState({ Login: responseData.responseData.login });
                this.setState({ Password: responseData.responseData.password });
                this.setState({ Email: responseData.responseData.email });
                this.setState({ DateOfBirth: responseData.responseData.dateOfBirth.slice(0, 10) });
            });
    }

    DeleteUser = () => {
        fetch('https://localhost:44450/UserApi/DeleteUser/' + getCookie("Id"), { method: 'DELETE' })
            .then(() => {
                localStorage.setItem('authenticated', false);
                window.location.assign('https://localhost:44450');
            })
    }

    ChangeValueLogin(event) {
        this.setState({ NewLogin: event.target.value })
    }

    ChangeLogin = () => {
        if (this.state.saveLogin === false) {
            this.setState({ TextLogin: "Save changes" });
            this.setState({ saveLogin: true });
            this.setState({ ClassLogin: 'btn btn-outline-success' });
            this.setState({ TypeLogin: 'Input' });
        }
        else {
            if (this.state.NewLogin !== '') {
                if (this.state.NewLogin !== this.state.Login) {
                    fetch('https://localhost:44450/UserApi/ChangeLogin', {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: getCookie("Id"),
                            Login: this.state.NewLogin,
                        })
                    }).then((Response) => Response.json())
                        .then((Result) => {
                            console.log(Result);
                            let res = JSON.stringify(Result);
                            console.log(res)
                            if (res === '{"success":false}') {
                                this.setState({ isOpen: true });
                            }
                            else {
                                window.location.reload();
                            }
                        })
                    this.setState({ TextLogin: "Change this" });
                    this.setState({ saveLogin: false });
                    this.setState({ ClassLogin: 'btn btn-outline-secondary' });
                    this.setState({ TypeLogin: 'p' });
                }
                alert("Login cannot be the same");
            }
            else {
                alert("Enter value");
            }
        }
    }

    ChangeValuePassword(event) {
        this.setState({ NewPassword: event.target.value })
    }

    ChangePassword = () => {
        if (this.state.savePassword === false) {
            this.setState({ TextPassowrd: "Save changes" });
            this.setState({ savePassword: true });
            this.setState({ ClassPassword: 'btn btn-outline-success' });
            this.setState({ TypePassword: 'input' });
        }
        else {
            if (this.state.NewPassword !== '') {
                if (this.state.NewPassword !== this.state.Password) {
                    fetch('https://localhost:44450/UserApi/ChangePassword', {
                        method: 'PUT',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: getCookie("Id"),
                            password: this.state.NewPassword,
                        })
                    }).then((Response) => Response.json())
                        .then((Result) => {
                            console.log(Result);
                            let res = JSON.stringify(Result);
                            console.log(res)
                            if (res === '{"success":false}') {
                                alert('Invalid Login');
                            }
                            else {
                                window.location.reload();
                            }
                        })
                    console.log(this.state.NewPassword);
                    this.setState({ TextPassowrd: "Change this" });
                    this.setState({ savePassword: false });
                    this.setState({ ClassPassword: 'btn btn-outline-secondary' });
                    this.setState({ TypePassword: 'p' });
                }
                else {
                    alert("Password cannot be the same")
                }
            }
            else {
                alert("Enter value");
            }
        }
    }

    render() {
        return (
            <div className="Test">
                <section>
                    <div className="container px-4 py-5 px-md-5 text-center text-dark text-lg-start my-5">
                        <div className="border-radius ">
                        <h1 className="text-center">EKVI SHIELD</h1>
                        <h2 className="text-center">Your account</h2>
                        </div>  
                        <div className="col-lg-12 mb-1 mb-lg-4 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                            <div class="container py-5 text-dark ">
                                <div class="col-lg-12 ">
                                    <div class="card mb-4 border-radius">
                                        <div class="card-body ">
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Id</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-dark mb-0">{getCookie("Id")}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Login</p>
                                                </div>
                                                <div class="col-sm-2">
                                                    <p class="text-dark mb-0">{this.state.Login}</p>
                                                </div>
                                                <div class="col-sm-5">
                                                    <this.state.TypeLogin type="text" className="InputColor border-0 " onChange={this.ChangeValueLogin} />
                                                </div>
                                                <div class="col-sm-2">
                                                    <button onClick={this.ChangeLogin} className={this.state.ClassLogin}>{this.state.TextLogin}</button>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Password</p>
                                                </div>
                                                <div class="col-sm-2">
                                                    <p class="text-dark mb-0">{this.state.Password}</p>
                                                </div>
                                                <div class="col-sm-5">
                                                    <this.state.TypePassword type="text" className="InputColor border-0 " onChange={this.ChangeValuePassword} />
                                                </div>
                                                <div class="col-sm-2">
                                                    <button onClick={this.ChangePassword} className={this.state.ClassPassword}>{this.state.TextPassowrd}</button>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Email</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-dark mb-0">{this.state.Email}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Date of birth</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-dark mb-0">{this.state.DateOfBirth}</p>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <Button className="btn btn-danger" onClick={this.toggle }>Delete account</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <div className="DeffaultBackGround text-light">
                        <ModalHeader toggle={this.toggle}>Delete account</ModalHeader>
                        <ModalBody>After the account is deleted, the data cannot be returned</ModalBody>
                        <ModalFooter>
                            <button onClick={this.DeleteUser} className="btn btn-danger">Okey, Delete my account</button>{' '}
                            <button onClick={this.toggle} className="btn btn-secondary">Cancel</button>{' '}
                        </ModalFooter>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Account;