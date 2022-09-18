import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Account extends Component {
    constructor() {
        super();

        this.DeleteUser = this.DeleteUser.bind(this);
    }
    state = {
        Login: '',
        Password: '',
        Email: ''
    }

    componentDidMount() {
        fetch('https://localhost:44450/RegUser/GetInfo/' + localStorage.getItem("UserId"), {
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
            });
    }

    DeleteUser(event) {
         fetch('https://localhost:44450/RegUser/DeleteUser/' + localStorage.getItem("UserId"), { method: 'DELETE' })
             .then(() => {
                 localStorage.setItem('authenticated', false);
                 localStorage.setItem('UserLogin', "");
                 localStorage.setItem('UserId', "");
                 window.location.assign('https://localhost:44450');
             })
    }

    render() {
        return (
            <div className="Account">
                <h1>Your Info</h1>
                <p>Your Id: {localStorage.getItem("UserId")}</p>
                <p>Your Login: {this.state.Login}</p>
                <p>Your Password: {this.state.Password}</p>
                <p>Your Email: {this.state.Email}</p>
                <Button onClick={this.DeleteUser }>Delete my account</Button>
            </div>
        );
    }
}

export default Account;