import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import getCookie from '../WorkWithCookie';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

  constructor (props) {
    super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);

      this.state = {
        collapsed: true,
        authenticated: localStorage.getItem("authenticated")
      };


      window.addEventListener('scroll', function () {
          var minOffset = 980;
          let has_class = document.body.classList.contains("scroll_navbar");
          if (minOffset < window.scrollY) {
              document.body.classList.add('scroll_navbar');
          }
          else if (has_class) {
              document.body.classList.remove('scroll_navbar');
          }
      });
    }


    LogOut() {
        fetch('https://localhost:44450/UserApi/LogOut', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
            .then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result["message"] !== "Success") {
                    alert('Invalid User');
                }
                else {
                    localStorage.setItem('authenticated', false);
                    window.location.assign('https://localhost:44450');
                }
            })
    }

    

    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });
}


    render() {
        if (localStorage.getItem("authenticated") === "true") {
            return (
                <header>
                    <Navbar className="navbar-expand-lg navbar-toggleable-sm box-shadow fixed-top navbar-scroll d container-fluid" container light>
                        <NavbarBrand tag={Link} to="/" className="text-white">EKVI SHIELD</NavbarBrand>
                        <div className="flex-grow-1">
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-white" to="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-white" to="/Test">Test</NavLink>
                                    </NavItem>
                            </ul>
                            </Collapse>
                        </div>
                        <div className="flex-grow-2">
                                <NavLink tag={Link} className="text-white" to="/Account">{getCookie("UserLogin")}</NavLink>
                        </div>  
                        <Button className="btnSuccess border-0 " onClick={this.LogOut}>Log Out</Button>
                    </Navbar>
                </header>
                );
        }

        else {
            return (
                <header id="header" className="navbar-outer navbar-expand-lg  fixed-top">
                    <Navbar className="container-fluid navbar-inner " container light>
                        <NavbarBrand tag={Link} to="/" className="text-white">EKVI SHIELD</NavbarBrand>
                        <div className="flex-grow-1">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                                <NavLink tag={Link} className="text-white" to="/">Home</NavLink>
                                <NavLink tag={Link} className="text-white" to="/Test">Test</NavLink>
                            </ul>
                        </div>
                        <div className="flex-grow-2 ">
                                <NavLink tag={Link} className="text-white" to="/Reg">Registration</NavLink>
                                <NavLink tag={Link} className="text-white" to="/Login">Log in </NavLink>
                        </div>  
                    </Navbar>
                </header>
            );
        }
  }
}
