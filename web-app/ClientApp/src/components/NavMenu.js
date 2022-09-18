import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

  constructor (props) {
    super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
        collapsed: true,
        authenticated: localStorage.getItem("authenticated")
      };

    }

    LogOut() {
        localStorage.setItem('authenticated', false);
        localStorage.setItem('UserLogin', "");
        window.location.assign('https://localhost:44450');
    }

    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }


    render() {
        if (localStorage.getItem("authenticated") == "true") {
            return (
                <header>
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                        <NavbarBrand tag={Link} to="/">EKVI SHIELD</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav  flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                        <NavLink tag={Link} to="/Account"> {localStorage.getItem("UserLogin") }</NavLink>
                        <Button onClick={this.LogOut }>log out</Button>
                    </Navbar>
                </header>
                );
        }

        else {
            return (
                <header>
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                        <NavbarBrand tag={Link} to="/">web_app</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                        <NavLink tag={Link} to="/Reg">Registration</NavLink>
                        <NavLink tag={Link} to="/Login">Log in </NavLink>
                    </Navbar>
                </header>
            );
        }
  }
}
