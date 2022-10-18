import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import girl2 from '../Images/woman2.webp';
import './Test.css';

const animateList = [
    { id: 1, Title: 'THE ROLE OF THE BUDGET OF THE CITY OF MOSCOW IN REDUCING POVERTY', Text: 'THE ROLE OF THE BUDGET OF THE CITY OF MOSCOW IN REDUCING POVERTY', Image: girl2, Bg: 'bg-white text-dark'},
    { id: 2, Title: 'THE ROLE OF THE BUDGET OF THE CITY OF MOSCOW IN REDUCING POVERTY', Text: 'THE ROLE OF THE BUDGET OF THE CITY OF MOSCOW IN REDUCING POVERTY', Image: girl2, Bg: 'bg-dark text-white'},
    { id: 3, Title: 'THE ROLE OF THE BUDGET OF THE CITY OF MOSCOW IN REDUCING POVERTY', Text: 'THE ROLE OF THE BUDGET OF THE CITY OF MOSCOW IN REDUCING POVERTY', Image: girl2, Bg: 'bg-white text-dark'},
    { id: 4, Title: 'THE ROLE OF THE BUDGET OF THE CITY OF MOSCOW IN REDUCING POVERTY', Text: 'THE ROLE OF THE BUDGET OF THE CITY OF MOSCOW IN REDUCING POVERTY', Image: girl2, Bg: 'bg-dark text-white'},
    { id: 5, Title: 'THE ROLE OF THE BUDGET OF THE CITY OF MOSCOW IN REDUCING POVERTY', Text: 'THE ROLE OF THE BUDGET OF THE CITY OF MOSCOW IN REDUCING POVERTY', Image: girl2, Bg: 'bg-white text-dark'}
];

export default class ReactReveal extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        if (350 < window.scrollY){
        }
    }


    render() {
        return (
            <Fragment>
                <div className="pad" >
                    <div className="text-center text-white animated fadeInUp"><h1>THE ROLE OF THE BUDGET OF THE CITY <br /> OF MOSCOW IN REDUCING POVERTY</h1></div>
                </div>
                {animateList.map((item, key) => (
                    <div style={styles.block} className={item.Bg} key={key}>
                        <Fade bottom big >
                            <div className="p-5 ">
                                <img  src={item.Image} alt="image"/>
                            </div>
                            <div className="p-5" ref={this.myRef}>
                                <h1 style={styles.title}>{`${item.Title}`}</h1>
                                <p style={styles.Text} />{`${item.Text}` }<p/>
                            </div>
                        </Fade>
                    </div>
                ))}
            </Fragment>
        );
    }
}

const styles = {
    block: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '1000px',
        borderBottom: '1px solid rgba(255,255,255,.2)',
        color: 'white'
    },
    title: {

    },
    text: {

    },
};