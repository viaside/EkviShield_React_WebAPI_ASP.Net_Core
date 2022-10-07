
import React, { Component } from 'react';
import {  } from 'reactstrap';
import '../custom.css';
import girl2 from '../Images/woman2.webp';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="text-white text-bg DeffaultBackGround">
                    <div className="centered"><h1>THE ROLE OF THE BUDGET OF THE CITY <br /> OF MOSCOW IN REDUCING POVERTY</h1></div>
                </div>

                <div className="text-dark">
                    <div>
                        <div className="bg-dark text-white p-5">
                            <div className="d-flex align-middle container">
                                <span class="align-middle d-flex">
                                    <img height="200px" width="200px" className="p-2" src={girl2} alt="girl"></img>
                                    <div>
                                        <h1>THE ROLE OF THE BUDGET OF THE CITY <br /> OF MOSCOW IN REDUCING POVERTY</h1>
                                        <p>Lots of text here...With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a .clearfix and o</p>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DeffaultBackGround text-center text-white ">
                     <div class="p-5">
                         <div class="p-2"><img width="200px" height="200px"></img></div>
                         <div class="p-2"><h1>Healthcar <br/> Education</h1></div>
                         <div class="p-2"><p>Text text text <br/> text text text </p></div>
                     </div>
                     <div class="p-5">
                         <div class="p-2"><img width="200px" height="200px"></img></div>
                         <div class="p-2"><h1>Physical <br/> Culture</h1></div>
                         <div class="p-2"><p>Text text text <br /> text text text </p></div>
                     </div>
                     <div class="p-5">
                         <div class="p-2"><img width="200px" height="200px"></img></div>
                         <div class="p-2"><h1>Politics</h1></div>
                         <div class="p-2"><p>Text text text <br /> text text text </p></div>
                     </div>
                </div>
                <div>
                    <div className="bg-dark text-white p-5">
                        <div className="d-flex align-middle container">
                            <span class="align-middle d-flex">
                                <div>
                                    <h1>THE ROLE OF THE BUDGET OF THE CITY <br /> OF MOSCOW IN REDUCING POVERTY</h1>
                                    <p>Lots of text here...With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a .clearfix and o</p>
                                </div>
                                <img height="200px" width="200px" className="p-2" src={girl2} alt="girl"></img>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-white DeffaultBackGround">
                    <div className="container p-5">
                        <span class="align-middle d-flex text-center">
                            <div>
                                <h1>THE ROLE OF THE BUDGET OF THE CITY <br /> OF MOSCOW IN REDUCING POVERTY</h1>
                                <p>Lots of text here...With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a .clearfix and o</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;