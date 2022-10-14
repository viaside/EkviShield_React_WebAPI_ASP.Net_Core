
import React, { Component } from 'react';
import {  } from 'reactstrap';
import Carousel from 'react-elastic-carousel'
import '../custom.css';
import girl2 from '../Images/woman2.webp';

class Home extends Component {
    constructor(props) {
        super(props);

        var minOffset = 750;
        window.onscroll = function () {
            let has_class = document.body.classList.contains("scroll_navbar");

            if (minOffset < document.documentElement.scrollTop) {
                if (!has_class) {
                    document.div.add
                }
            } else if (has_class) {
                document.body.classList.remove("animation");
            }
        }
    }

    render() {

        return (
            <div className="Home">
                <div className="pad">
                    <div className="text-center text-white animated fadeInUp"><h1>THE ROLE OF THE BUDGET OF THE CITY <br /> OF MOSCOW IN REDUCING POVERTY</h1></div>
                </div>
                <div className="footer text-white ">
                    <div class="d-flex justify-content-around"><p>Foter text</p></div>

                    <div class="d-flex justify-content-center"><h1>Footer Text</h1></div>
                </div>
                <div className="text-dark">
                    <div>
                        <div className="bg-dark text-white p-5">
                            <div className="d-flex align-middle container">
                                <span className="align-middle d-flex">
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
                <div className="DeffaultBackGround text-center p-5 text-white ">
                    <Carousel className="s" itemsToShow={1}>
                        <div className="Item">
                            <img height="200px" width="200px" className="p-2" src={girl2} alt="girl"></img>
                            <h1>Text text</h1>
                            <p>Text text text text text text</p>
                        </div>
                        <div className="Item">
                            <img height="200px" width="200px" className="p-2" src={girl2} alt="girl"></img>
                            <h1>Text text</h1>
                            <p>Text text text text text text</p>
                        </div>
                        <div className="Item">
                            <img height="200px" width="200px" className="p-2" src={girl2} alt="girl"></img>
                            <h1>Text text</h1>
                            <p>Text text text text text text</p>
                        </div>
                        <div className="Item">
                            <img height="200px" width="200px" className="p-2" src={girl2} alt="girl"></img>
                            <h1>Text text</h1>
                            <p>Text text text text text text</p>
                        </div>
                        <div className="Item">
                            <img height="200px" width="200px" className="p-2" src={girl2} alt="girl"></img>
                            <h1>Text text</h1>
                            <p>Text text text text text text</p>
                        </div>
                        <div className="Item">
                            <img height="200px" width="200px" className="p-2" src={girl2} alt="girl"></img>
                            <h1>Text text</h1>
                            <p>Text text text text text text</p>
                        </div>
                    </Carousel>
                </div>

                <div>
                    <div className="bg-dark text-white p-5">
                        <div className="d-flex align-middle container">
                            <span className="align-middle d-flex">
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
                        <span className="align-middle d-flex text-center">
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