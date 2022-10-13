
import React, { Component } from 'react';
import { Carousel } from 'reactstrap';
import '../custom.css';
import girl2 from '../Images/woman2.webp';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <div className="pad">
                    <div className="text-center text-white"><h1>THE ROLE OF THE BUDGET OF THE CITY <br /> OF MOSCOW IN REDUCING POVERTY</h1></div>
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
                <div className="DeffaultBackGround text-center text-white">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={girl2} width="250px" className=" d-block " alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                        <h1>First </h1>
                                        <p>First info</p>
                                    </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={girl2} className="d-block " alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                        <h1>Метка второго слайда</h1>
                                        <p>Некоторый репрезентативный заполнитель для второго слайда.</p>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <img src={girl2} className="d-block " alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                        <h1>Метка третьего слайда</h1>
                                        <p>Некоторый репрезентативный заполнитель для третьего слайда.</p>
                                    </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Предыдущий</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Следующий</span>
                        </button>
                    </div>
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