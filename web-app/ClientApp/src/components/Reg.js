import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Reg extends Component {
    constructor() {
        super();
        this.state = {
            Login: '',
            Password: '',
            Email: '',
            DateOfBirth: '',
        }

        this.Login = this.Login.bind(this);
        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.DateOfBirth = this.DateOfBirth.bind(this);
        this.register = this.register.bind(this);
    }

    Login(event) {
        this.setState({ Login: event.target.value })
    }

    Password(event) {
        this.setState({ Password: event.target.value })
    }

    Email(event) {
        this.setState({ Email: event.target.value })
    }
    DateOfBirth(event) {
        this.setState({ DateOfBirth: event.target.value })
    }

    register(event) {
        if (this.state.Login === '' && this.state.Password === '' && this.state.Email === '' && this.state.DateOfBirth === '') {
            alert("Enter all fields");
        }
        else if (this.state.Login === '') {
            alert("Enter Login");
        }
        else if (this.state.Password === '') {
            alert("Enter Password");
        }
        else if (this.state.Email === '') {
            alert("Enter Email");
        }
        else if (this.state.DateOfBirth === '') {
            alert("Enter Date Of Birth");
        }
        else {
            fetch('https://localhost:44450/UserApi/Registr', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Login: this.state.Login,
                    Password: this.state.Password,
                    Email: this.state.Email,
                    DateOfBirth: this.state.DateOfBirth,
                })
            }).then((Response) => Response.json())
                .then((Result) => {
                    console.log(Result);
                    let res = JSON.stringify(Result);
                    console.log(res)
                    if (res === '{"success":false}') {
                        alert('Invalid User');
                    }
                    else {
                        window.location.assign('https://localhost:44450/Login');
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
                                        <input onChange={this.Login} type="text" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example3">Login</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input onChange={this.Password} type="password" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example3">Password</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input onChange={this.Email} type="email" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example4">Email address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input onChange={this.DateOfBirth} type="date" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example4">Date of birth</label>
                                    </div>

                                    <Button onClick={this.register} className="btnSuccess border-0 mt-3" block>Create account</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reg;