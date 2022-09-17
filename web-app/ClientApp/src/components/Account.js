import React, { Component } from 'react';

class Account extends Component {
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
                console.log(responseData.responseData.login);
                this.setState({ Login: responseData.responseData.login });
                this.setState({ Password: responseData.responseData.password });
                this.setState({ Email: responseData.responseData.email });
            });
    }

    render() {
        return (
            <div className="Account">
                <h1>Your Info</h1>
                <p>Your Id: {localStorage.getItem("UserId")}</p>
                <p>Your Login: {this.state.Login}</p>
                <p>Your Password: {this.state.Password}</p>
                <p>Your Email: {this.state.Email}</p>
            </div>
        );
    }
}

export default Account;