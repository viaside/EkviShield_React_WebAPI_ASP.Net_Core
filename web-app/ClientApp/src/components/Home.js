
import React, { Component } from 'react';
import { } from 'reactstrap';
import '../custom.css';
import girl from '../Images/girl.png';
import girl2 from '../Images/woman2.webp';
import footer from '../Images/21.jpg';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="text-white text-bg DeffaultBackGround">
                    <div className="centered"><h1>THE ROLE OF THE BUDGET OF THE CITY <br /> OF MOSCOW IN REDUCING POVERTY</h1></div>
                </div>
                <div className="text-dark my-5 ">
                    <div>
                        <div className="d-flex align-middle container">
                            <span class="align-middle d-flex">
                                <img height="200px" width="200px" className="p-2" src={girl }></img>
                                <div>
                                    <h1>THE ROLE OF THE BUDGET OF THE CITY <br /> OF MOSCOW IN REDUCING POVERTY</h1>
                                    <p>Lots of text here...With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a .clearfix and o</p>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="DeffaultBackGround text-white">
                    <div className="container p-5">
                        <div class="d-flex justify-content-start">
                            <div class="d-flex text-center flex-column">
                                <div class="p-2"><h1>Healthcar Education</h1></div>
                                <div class="p-2"><p>Text text text <br/> text text text </p></div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-end">
                            <div class="d-flex text-center flex-column">
                                <div class="p-2"><h1>Physical Culture</h1></div>
                                <div class="p-2"><p>Text text text <br /> text text text </p></div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-center">
                            <div class="d-flex text-center flex-column">
                                <div class="p-2"><h1>Politics</h1></div>
                                <div class="p-2"><p>Text text text <br /> text text text </p></div>
                            </div>
                        </div>
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
                                <img height="200px" width="200px" className="p-2" src={girl2}></img>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="DeffaultBackGround text-white">
                    <div className="container p-5">
                        <span class="align-middle d-flex text-center">
                            <div>
                                <h1>THE ROLE OF THE BUDGET OF THE CITY <br /> OF MOSCOW IN REDUCING POVERTY</h1>
                                <p>Lots of text here...With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a .clearfix and o</p>
                            </div>
                        </span>
                    </div>
                </div>
                <img width="100%" src={footer }></img>
            </div>
        );
    }
}

export default Home;