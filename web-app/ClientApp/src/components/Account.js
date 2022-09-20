import React, { Component } from 'react';
import { Button } from 'reactstrap';
import getCookie from '../WorkWithCookie';

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
        fetch('https://localhost:44450/RegUser/GetInfo/' + getCookie("Id"), {
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
                 window.location.assign('https://localhost:44450');
             })
    }

    render() {
        return (
            <div className="Account">
                <h1>Your Info</h1>
                <p>Your Id: {getCookie("Id")}</p>
                <p>Your Login: {this.state.Login}</p>
                <p>Your Password: {this.state.Password}</p>
                <p>Your Email: {this.state.Email}</p>
                <Button onClick={this.DeleteUser }>Delete my account</Button>
            </div>
        );
    }
}

export default Account;