import React from 'react';
import JumbotronSimon from "./Jumbotron/Jumbotron";
import NavigaBar from "./NavigaBar/NavigaBar";
import Footer from "./Footer/Footer";
import '../App.css';
import Basic from "./Form/Form";
import Container from "react-bootstrap/Container";


class Householding extends React.Component {
    render() {
        return (
            <div  style={thisStyle}>
                <JumbotronSimon/>
                <NavigaBar/>
                <div className='container'>
                    <div>
                        <h2>Householding</h2>
                    </div>
                </div>
                <Basic/>
                <Footer/>
            </div>
        );
    }
}

const thisStyle = {
    height: '100%',
    backgroundColor: '#121212'
}

export default Householding;
