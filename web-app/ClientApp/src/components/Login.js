import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            Login: '',
            Password: '',
            authenticated: localStorage.getItem("authenticated")
        }

        this.Login = this.Login.bind(this);
        this.Password = this.Password.bind(this);
        this.login = this.login.bind(this);
    }

    Login(event) {
        this.setState({ Login: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }

    login(event) {
        fetch('https://localhost:44450/RegUser/Login', {
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
                if (result["message"] != "Success") {
                    alert('Invalid User');
                }
                else {
                    window.location.assign('https://localhost:44450');
                    localStorage.setItem('authenticated', true);
                }
                })
    }

    render() {
        return (
            <div className="login-wrapper">
                <h1>Pleasee Log In</h1>
                <Input type="text" onChange = {this.Login }  placeholder = "Enter Login" />
                <Input type="text" onChange = {this.Password} placeholder = "Enter Password" />
                <Button onClick={this.login} color="success" block>Login</Button>
            </div>
        );
    }
}

export default Login;