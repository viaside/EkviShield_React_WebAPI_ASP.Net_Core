import React, { Component } from 'react';
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
            TextLogin: 'ChangeThis',
            saveLogin: false,
            ClassLogin: 'btn btn-outline-secondary',
            TypeLogin: 'p',
            TextPassowrd: 'ChangeThis',
            savePassword: false,
            ClassPassword: 'btn btn-outline-secondary',
            TypePassword: 'p'
        }

        this.ChangeValuePassword = this.ChangeValuePassword.bind(this);
        this.ChangeValueLogin = this.ChangeValueLogin.bind(this);
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
                this.setState({ DateOfBirth: responseData.responseData.dateOfBirth.slice(0, 10) } );
            });
    }

    DeleteUser(event) {
         fetch('https://localhost:44450/UserApi/DeleteUser/' + getCookie("Id"), { method: 'DELETE' })
             .then(() => {
                 localStorage.setItem('authenticated', false);
                window.location.assign('https://localhost:44450');
             })
    }

    ChangeValueLogin(event) {
        this.setState({ NewLogin: event.target.value })
    }

    ChangeLogin = () =>  {
        if (this.state.saveLogin === false) {
            this.setState({ TextLogin: "Save changes" });
            this.setState({ saveLogin: true });
            this.setState({ ClassLogin: 'btn btn-outline-success' });
            this.setState({ TypeLogin: 'input' });
        }
        else {
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
                        alert('Invalid Login');
                    }
                    else {
                        window.location.reload();
                    }
                })
            this.setState({ TextLogin: "Change this"});
            this.setState({ saveLogin: false });
            this.setState({ ClassLogin: 'btn btn-outline-secondary' });
            this.setState({ TypeLogin: 'p' });
        }
    }

    ChangeValuePassword(event) {
        this.setState({ NewPassword: event.target.value })
    }

    ChangePassword = () =>{
        if (this.state.savePassword === false) {
            this.setState({ TextPassowrd: "Save changes" });
            this.setState({ savePassword: true });
            this.setState({ ClassPassword: 'btn btn-outline-success' });
            this.setState({ TypePassword: 'input' });
        }
        else {
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
    }

    ChangeInfo(event) {
        window.location.assign('https://localhost:44450/ChangeInfo');
    }

    render() {
        return (
            <div class="Account">
                <div className="d-flex w-100 ">
                    <div className="col-1 "><p>Id: </p> </div>
                    <div className="col-1"><p>{getCookie("Id")}</p></div>
                </div>

                <div className="d-flex w-100 ">
                    <div className="col-1 "><p>Login: </p> </div>
                    <div className="col-1"><p>{this.state.Login}</p></div>
                    <div className="col-2"><this.state.TypeLogin type="text" onChange={this.ChangeValueLogin }></this.state.TypeLogin></div>
                    <div className="col-2"><button onClick={this.ChangeLogin} className={this.state.ClassLogin }>{this.state.TextLogin }</button></div>
                </div>

                <div className="d-flex w-100 ">
                    <div className="col-1 "><p>Password: </p> </div>
                    <div className="col-1"><p>{this.state.Password}</p></div>
                    <div className="col-2"><this.state.TypePassword type="text" onChange={this.ChangeValuePassword}></this.state.TypePassword></div>
                    <div className="col-2"><button onClick={this.ChangePassword} className={this.state.ClassPassword}>{this.state.TextPassowrd}</button></div>
                </div>

                <div className="d-flex w-100 ">
                    <div className="col-1 "><p>Email: </p> </div>
                    <div className="col-10"><p>{this.state.Email}</p></div>
                </div>

                <div className="d-flex w-100 ">
                    <div className="col-1 "><p>Date: </p> </div>
                    <div className="col-10"><p>{this.state.DateOfBirth}</p></div>
                </div>

                <div className="d-flex w-100 ">
                    <div className="col-2"><button onClick={this.DeleteUser} className="btn btn-outline-danger">Delete Account</button></div>
                </div>
            </div>
        );
    }
}

export default Account;