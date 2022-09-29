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
        console.log(this.state.DateOfBirth);
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

    render() {

        return (
            <div className="login-wrapper m-5">
                <h1 className="text-white">Please Registr</h1>
                <p className="px-0 m-0 text-white">Enter Login</p>
                <Input type="text" className="InputColor border-0 text-light text-white" onChange={this.Login} placeholder="Enter Login" />
                <p className="px-0 m-0 text-white">Enter Password</p>
                <Input type="password" className="InputColor border-0 text-light text-white" onChange={this.Password} placeholder="Enter Password" />
                <p className="px-0 m-0 text-white">Enter Email</p>
                <Input type="text" className="InputColor border-0 text-light text-white"  onChange={this.Email} placeholder="Enter Email" />
                <p className="px-0 m-0 text-white">Enter Date Of Birth</p>
                <Input type="date" className="InputColor border-0 text-light text-white"  onChange={this.DateOfBirth}/>
                <Button onClick={this.register} className="btnSuccess border-0 mt-3" block>Create Account</Button>
            </div>
        );
    }
}

export default Reg;