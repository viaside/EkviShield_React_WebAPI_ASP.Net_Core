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
            <div className="login-wrapper m-5">
                <h1 className="text-white">Please Registr</h1>
                <p className="px-0 m-0 text-white">Enter Login</p>
                <Input type="text" className="InputColor border-0 text-light text-white" onChange={this.Login} placeholder="Enter Login" />
                <p className="px-0 m-0 text-white">Enter Password</p>
                <Input type="password" className="InputColor border-0 text-light text-white" onChange={this.Password} placeholder="Enter Password" />
                <Button onClick={this.login} className="btnSuccess border-0 mt-3" block>Log In</Button>
            </div>
        );
    }
}

export default Login;