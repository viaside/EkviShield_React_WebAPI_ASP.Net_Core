import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

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
        fetch('https://localhost:44450/RegUser/Registr', {
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

    render() {

        return (
            <div className="login-wrapper">
                <h1>Pleasee Registr</h1>
                <Input type="text" onChange={this.Login} placeholder="Enter Login" />
                <Input type="password" onChange={this.Password} placeholder="Enter Password" />
                <Input type="text" onChange={this.Email} placeholder="Enter Email" />
                <Input type="Date" onChange={this.DateOfBirth}/>
                <Button onClick={this.register} color="success" block>Create Account</Button>
            </div>
        );
    }
}

export default Reg;